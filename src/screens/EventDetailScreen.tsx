import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types';
import { useTheme } from '../hooks/useTheme';
import { useApp } from '../contexts/AppContext';

const { width } = Dimensions.get('window');

type EventDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'EventDetail'>;

export const EventDetailScreen: React.FC<EventDetailScreenProps> = ({ route, navigation }) => {
  const { event } = route.params;
  const theme = useTheme();
  const { toggleFavorite } = useApp();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.default,
    },
    imageContainer: {
      width: width,
      height: width * 0.6,
      backgroundColor: theme.colors.border.light,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    favoriteButton: {
      position: 'absolute',
      top: theme.spacing.md,
      right: theme.spacing.md,
      width: 48,
      height: 48,
      borderRadius: theme.borderRadius.full,
      backgroundColor: theme.colors.background.paper,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    content: {
      padding: theme.spacing.lg,
    },
    categoryBadge: {
      alignSelf: 'flex-start',
      backgroundColor: theme.colors.primary.main,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.full,
      marginBottom: theme.spacing.md,
    },
    categoryText: {
      ...theme.typography.body2,
      color: theme.colors.primary.contrast,
      fontWeight: '600',
    },
    title: {
      ...theme.typography.h2,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.md,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.borderRadius.md,
    },
    infoIcon: {
      marginRight: theme.spacing.md,
    },
    infoContent: {
      flex: 1,
    },
    infoLabel: {
      ...theme.typography.caption,
      color: theme.colors.text.secondary,
      marginBottom: theme.spacing.xs,
    },
    infoText: {
      ...theme.typography.body1,
      color: theme.colors.text.primary,
      fontWeight: '500',
    },
    sectionTitle: {
      ...theme.typography.h3,
      color: theme.colors.text.primary,
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.md,
    },
    description: {
      ...theme.typography.body1,
      color: theme.colors.text.secondary,
      lineHeight: 24,
      marginBottom: theme.spacing.lg,
    },
    speakerCard: {
      flexDirection: 'row',
      padding: theme.spacing.md,
      backgroundColor: theme.colors.background.paper,
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.lg,
    },
    speakerImage: {
      width: 60,
      height: 60,
      borderRadius: theme.borderRadius.full,
      marginRight: theme.spacing.md,
      backgroundColor: theme.colors.border.light,
    },
    speakerInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    speakerName: {
      ...theme.typography.h4,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.xs,
    },
    speakerBio: {
      ...theme.typography.body2,
      color: theme.colors.text.secondary,
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: theme.spacing.lg,
    },
    tag: {
      backgroundColor: theme.colors.background.paper,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.borderRadius.full,
      marginRight: theme.spacing.sm,
      marginBottom: theme.spacing.sm,
      borderWidth: 1,
      borderColor: theme.colors.border.light,
    },
    tagText: {
      ...theme.typography.body2,
      color: theme.colors.text.primary,
    },
  });

  const handleFavoritePress = () => {
    toggleFavorite(event.id);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeIn}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: event.image }}
              style={styles.image}
              resizeMode="cover"
              accessibilityIgnoresInvertColors
            />
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={handleFavoritePress}
              accessibilityRole="button"
              accessibilityLabel={
                event.isFavorite ? 'Remove from favorites' : 'Add to favorites'
              }
            >
              <Ionicons
                name={event.isFavorite ? 'heart' : 'heart-outline'}
                size={28}
                color={event.isFavorite ? theme.colors.error : theme.colors.text.primary}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Animated.View entering={SlideInDown.springify()} style={styles.content}>
          {event.category && (
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{event.category}</Text>
            </View>
          )}

          <Text style={styles.title}>{event.title}</Text>

          <View style={styles.infoRow}>
            <Ionicons
              name="calendar-outline"
              size={24}
              color={theme.colors.primary.main}
              style={styles.infoIcon}
            />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Date</Text>
              <Text style={styles.infoText}>{event.date}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons
              name="time-outline"
              size={24}
              color={theme.colors.primary.main}
              style={styles.infoIcon}
            />
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Time</Text>
              <Text style={styles.infoText}>{event.time}</Text>
            </View>
          </View>

          {event.location && (
            <View style={styles.infoRow}>
              <Ionicons
                name="location-outline"
                size={24}
                color={theme.colors.primary.main}
                style={styles.infoIcon}
              />
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>Location</Text>
                <Text style={styles.infoText}>{event.location}</Text>
              </View>
            </View>
          )}

          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>{event.description}</Text>

          <Text style={styles.sectionTitle}>Speaker</Text>
          <View style={styles.speakerCard}>
            {event.speakerImage && (
              <Image
                source={{ uri: event.speakerImage }}
                style={styles.speakerImage}
                accessibilityIgnoresInvertColors
              />
            )}
            <View style={styles.speakerInfo}>
              <Text style={styles.speakerName}>{event.speaker}</Text>
              {event.speakerBio && <Text style={styles.speakerBio}>{event.speakerBio}</Text>}
            </View>
          </View>

          {event.tags && event.tags.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Tags</Text>
              <View style={styles.tagsContainer}>
                {event.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </>
          )}
        </Animated.View>
      </ScrollView>
    </View>
  );
};
