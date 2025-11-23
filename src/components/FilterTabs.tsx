import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { EventFilter } from '../types';
import { useTheme } from '../hooks/useTheme';

interface FilterTabsProps {
  selected: EventFilter;
  onSelect: (filter: EventFilter) => void;
}

const filters: EventFilter[] = ['All', 'Friday', 'Saturday', 'Sunday'];

export const FilterTabs: React.FC<FilterTabsProps> = ({ selected, onSelect }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.paper,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border.light,
      paddingVertical: theme.spacing.sm,
    },
    scrollContent: {
      paddingHorizontal: theme.spacing.md,
    },
    tab: {
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.sm,
      marginRight: theme.spacing.sm,
      borderRadius: theme.borderRadius.full,
      borderWidth: 1,
      borderColor: theme.colors.border.main,
      backgroundColor: theme.colors.background.default,
    },
    selectedTab: {
      backgroundColor: theme.colors.primary.main,
      borderColor: theme.colors.primary.main,
    },
    tabText: {
      ...theme.typography.body2,
      color: theme.colors.text.primary,
      fontWeight: '500',
    },
    selectedTabText: {
      color: theme.colors.primary.contrast,
      fontWeight: '600',
    },
  });

  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {filters.map(filter => (
          <TouchableOpacity
            key={filter}
            onPress={() => onSelect(filter)}
            style={[styles.tab, selected === filter && styles.selectedTab]}
            accessibilityRole="tab"
            accessibilityLabel={`Filter by ${filter}`}
            accessibilityState={{ selected: selected === filter }}
          >
            <Text style={[styles.tabText, selected === filter && styles.selectedTabText]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Animated.View>
  );
};
