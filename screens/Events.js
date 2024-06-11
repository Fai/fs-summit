import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Card from '../components/Card';
import Tab from '../components/Tab';
import mock from '../data';

const Events = () => {
  return (
    <View>
        <Tab />
        <FlatList
            data={mock}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={item => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Events