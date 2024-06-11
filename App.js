import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EventScreen from './screens/Event';
import EventsScreen from './screens/Events';
import MapScreen from './screens/Map';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EventsScreen" component={EventsScreen} />
      <Stack.Screen name="EventScreen" component={EventScreen} />
    </Stack.Navigator>
  );
}

function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="EventStack" component={EventsStack} />
        <Tab.Screen name="MapStack" component={MapStack} />
      </Tab.Navigator>
    </NavigationContainer>
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

export default App