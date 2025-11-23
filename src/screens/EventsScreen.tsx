import React, { useMemo } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../hooks/useTheme';
import { useApp } from '../contexts/AppContext';
import { Event, RootStackParamList } from '../types';
import { EventCard } from '../components/EventCard';
import { FilterTabs } from '../components/FilterTabs';
import { SearchBar } from '../components/SearchBar';
import { EmptyState } from '../components/EmptyState';

type EventsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;

interface EventsScreenProps {
  navigation: EventsScreenNavigationProp;
}

export const EventsScreen: React.FC<EventsScreenProps> = ({ navigation }) => {
  const theme = useTheme();
  const { events, searchQuery, setSearchQuery, selectedFilter, setSelectedFilter } = useApp();

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch =
        searchQuery === '' ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter = selectedFilter === 'All' || event.date === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [events, searchQuery, selectedFilter]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.default,
    },
    listContent: {
      paddingBottom: theme.spacing.lg,
    },
  });

  const handleEventPress = (event: Event) => {
    navigation.navigate('EventDetail', { event });
  };

  const renderItem = ({ item, index }: { item: Event; index: number }) => (
    <EventCard event={item} onPress={() => handleEventPress(item)} index={index} />
  );

  const renderEmptyState = () => {
    if (searchQuery) {
      return (
        <EmptyState
          icon="search-outline"
          title="No events found"
          message={`No events match "${searchQuery}". Try adjusting your search.`}
        />
      );
    }
    return (
      <EmptyState
        icon="calendar-outline"
        title="No events available"
        message="Check back later for upcoming events."
      />
    );
  };

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
      <FilterTabs selected={selectedFilter} onSelect={setSelectedFilter} />
      <FlatList
        data={filteredEvents}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyState}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
