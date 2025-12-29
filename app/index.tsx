import { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Pressable, Image } from 'react-native';
import { events, Event } from '@/data/events';

const DAYS = ['All', 'Friday', 'Saturday', 'Sunday'];

function EventCard({ data }: { data: Event }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.speaker}>{data.speaker}</Text>
        <Text style={styles.time}>{data.time}</Text>
      </View>
    </View>
  );
}

export default function EventsScreen() {
  const [selected, setSelected] = useState('All');

  const filtered = events.filter((e) => e.date === selected || selected === 'All');

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {DAYS.map((day) => (
          <Pressable
            key={day}
            style={[styles.tab, selected === day && styles.tabActive]}
            onPress={() => setSelected(day)}
          >
            <Text style={[styles.tabText, selected === day && styles.tabTextActive]}>
              {day}
            </Text>
          </Pressable>
        ))}
      </View>
      <FlatList
        data={filtered}
        renderItem={({ item }) => <EventCard data={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  tabs: { flexDirection: 'row', padding: 12, gap: 8 },
  tab: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#f0f0f0' },
  tabActive: { backgroundColor: '#007AFF' },
  tabText: { color: '#666' },
  tabTextActive: { color: '#fff' },
  list: { padding: 12 },
  card: { flexDirection: 'row', padding: 12, marginBottom: 12, backgroundColor: '#f9f9f9', borderRadius: 12 },
  image: { width: 80, height: 80, borderRadius: 8 },
  cardContent: { flex: 1, marginLeft: 12, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: '600' },
  speaker: { fontSize: 14, color: '#666', marginTop: 4 },
  time: { fontSize: 12, color: '#999', marginTop: 4 },
});
