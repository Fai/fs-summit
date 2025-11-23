import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Marker, Callout, Region } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';
import { useApp } from '../contexts/AppContext';
import { Event } from '../types';

const { width, height } = Dimensions.get('window');

const INITIAL_REGION: Region = {
  latitude: 37.7749,
  longitude: -122.4194,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export const MapScreen: React.FC = () => {
  const theme = useTheme();
  const { events } = useApp();
  const mapRef = useRef<MapView>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const eventsWithLocation = events.filter(
    event => event.latitude !== undefined && event.longitude !== undefined
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.default,
    },
    map: {
      width: width,
      height: height,
    },
    calloutContainer: {
      width: 200,
      padding: theme.spacing.sm,
    },
    calloutTitle: {
      ...theme.typography.body1,
      fontWeight: '600',
      marginBottom: theme.spacing.xs,
    },
    calloutText: {
      ...theme.typography.caption,
      color: theme.colors.text.secondary,
    },
    recenterButton: {
      position: 'absolute',
      bottom: theme.spacing.xl,
      right: theme.spacing.md,
      width: 56,
      height: 56,
      borderRadius: theme.borderRadius.full,
      backgroundColor: theme.colors.primary.main,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.xl,
    },
    emptyText: {
      ...theme.typography.h3,
      color: theme.colors.text.secondary,
      textAlign: 'center',
      marginTop: theme.spacing.md,
    },
  });

  const handleRecenter = () => {
    if (eventsWithLocation.length > 0) {
      mapRef.current?.fitToCoordinates(
        eventsWithLocation.map(event => ({
          latitude: event.latitude!,
          longitude: event.longitude!,
        })),
        {
          edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
          animated: true,
        }
      );
    } else {
      mapRef.current?.animateToRegion(INITIAL_REGION);
    }
  };

  if (eventsWithLocation.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="map-outline" size={64} color={theme.colors.text.disabled} />
        <Text style={styles.emptyText}>No events with location data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton={false}
        accessibilityLabel="Event locations map"
      >
        {eventsWithLocation.map(event => (
          <Marker
            key={event.id}
            coordinate={{
              latitude: event.latitude!,
              longitude: event.longitude!,
            }}
            onPress={() => setSelectedEvent(event)}
          >
            <Callout>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{event.title}</Text>
                <Text style={styles.calloutText}>{event.speaker}</Text>
                <Text style={styles.calloutText}>
                  {event.date} • {event.time}
                </Text>
                {event.location && <Text style={styles.calloutText}>{event.location}</Text>}
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <TouchableOpacity
        style={styles.recenterButton}
        onPress={handleRecenter}
        accessibilityRole="button"
        accessibilityLabel="Recenter map to show all events"
      >
        <Ionicons name="locate" size={28} color={theme.colors.primary.contrast} />
      </TouchableOpacity>
    </View>
  );
};
