export interface Event {
  id: string;
  title: string;
  description: string;
  speaker: string;
  speakerBio?: string;
  speakerImage?: string;
  date: string;
  time: string;
  location?: string;
  image: string;
  category?: string;
  tags?: string[];
  latitude?: number;
  longitude?: number;
  isFavorite?: boolean;
}

export type EventFilter = 'All' | 'Friday' | 'Saturday' | 'Sunday';

export interface AppContextType {
  events: Event[];
  favorites: string[];
  toggleFavorite: (eventId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilter: EventFilter;
  setSelectedFilter: (filter: EventFilter) => void;
}

export type RootStackParamList = {
  MainTabs: undefined;
  EventDetail: { event: Event };
};

export type TabParamList = {
  Events: undefined;
  Map: undefined;
};
