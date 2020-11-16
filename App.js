import 'react-native-gesture-handler';
import * as React from 'react';
// import { Text, View, StyleSheet, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import AppScreen from './NoteApp';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="App" component={AppScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;