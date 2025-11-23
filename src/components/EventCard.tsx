import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { Event } from '../types';
import { useTheme } from '../hooks/useTheme';
import { useApp } from '../contexts/AppContext';

interface EventCardProps {
  event: Event;
  onPress: () => void;
  index: number;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const EventCard: React.FC<EventCardProps> = ({ event, onPress, index }) => {
  const theme = useTheme();
  const { toggleFavorite } = useApp();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.borderRadius.lg,
      marginHorizontal: theme.spacing.md,
      marginVertical: theme.spacing.sm,
      overflow: 'hidden',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    pressedContainer: {
      opacity: 0.7,
      transform: [{ scale: 0.98 }],
    },
    contentWrapper: {
      flexDirection: 'row',
      padding: theme.spacing.md,
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.border.light,
    },
    rightContent: {
      flex: 1,
      marginLeft: theme.spacing.md,
      justifyContent: 'space-between',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    titleContainer: {
      flex: 1,
      marginRight: theme.spacing.sm,
    },
    title: {
      ...theme.typography.h4,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.xs,
    },
    speaker: {
      ...theme.typography.body2,
      color: theme.colors.text.secondary,
      marginBottom: theme.spacing.xs,
    },
    timeLocation: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: theme.spacing.sm,
    },
    timeText: {
      ...theme.typography.caption,
      color: theme.colors.text.secondary,
      marginLeft: theme.spacing.xs,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: theme.spacing.md,
    },
    locationText: {
      ...theme.typography.caption,
      color: theme.colors.text.secondary,
      marginLeft: theme.spacing.xs,
    },
    favoriteButton: {
      padding: theme.spacing.xs,
    },
    categoryBadge: {
      position: 'absolute',
      top: theme.spacing.sm,
      left: theme.spacing.sm,
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: theme.spacing.sm,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
    },
    categoryText: {
      ...theme.typography.caption,
      color: theme.colors.primary.contrast,
      fontWeight: '600',
    },
  });

  const handleFavoritePress = (e: any) => {
    e.stopPropagation();
    toggleFavorite(event.id);
  };

  return (
    <AnimatedPressable
      entering={FadeInDown.delay(index * 100).springify()}
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressedContainer]}
      accessibilityRole="button"
      accessibilityLabel={`Event: ${event.title} by ${event.speaker}`}
      accessibilityHint="Double tap to view event details"
    >
      <View style={styles.contentWrapper}>
        <View>
          <Image
            source={{ uri: event.image }}
            style={styles.image}
            accessibilityIgnoresInvertColors
          />
          {event.category && (
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{event.category}</Text>
            </View>
          )}
        </View>

        <View style={styles.rightContent}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {event.title}
              </Text>
              <Text style={styles.speaker} numberOfLines={1}>
                {event.speaker}
              </Text>
            </View>

            <TouchableOpacity
              onPress={handleFavoritePress}
              style={styles.favoriteButton}
              accessibilityRole="button"
              accessibilityLabel={
                event.isFavorite ? 'Remove from favorites' : 'Add to favorites'
              }
            >
              <Ionicons
                name={event.isFavorite ? 'heart' : 'heart-outline'}
                size={24}
                color={event.isFavorite ? theme.colors.error : theme.colors.text.secondary}
              />
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.timeLocation}>
              <Ionicons name="time-outline" size={14} color={theme.colors.text.secondary} />
              <Text style={styles.timeText}>{event.time}</Text>
            </View>
            {event.location && (
              <View style={[styles.timeLocation, { marginTop: theme.spacing.xs }]}>
                <Ionicons
                  name="location-outline"
                  size={14}
                  color={theme.colors.text.secondary}
                />
                <Text style={styles.locationText} numberOfLines={1}>
                  {event.location}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </AnimatedPressable>
  );
};
