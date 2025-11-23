import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Event, EventFilter, AppContextType } from '../types';
import { mockEvents } from '../constants/mockData';

const AppContext = createContext<AppContextType | undefined>(undefined);

const FAVORITES_STORAGE_KEY = '@summit_favorites';

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<EventFilter>('All');

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    const updatedEvents = mockEvents.map(event => ({
      ...event,
      isFavorite: favorites.includes(event.id),
    }));
    setEvents(updatedEvents);
  }, [favorites]);

  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem(FAVORITES_STORAGE_KEY);
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const toggleFavorite = async (eventId: string) => {
    try {
      const newFavorites = favorites.includes(eventId)
        ? favorites.filter(id => id !== eventId)
        : [...favorites, eventId];

      setFavorites(newFavorites);
      await AsyncStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  };

  const value: AppContextType = {
    events,
    favorites,
    toggleFavorite,
    searchQuery,
    setSearchQuery,
    selectedFilter,
    setSelectedFilter,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
