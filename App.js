import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import data from './app/(tabs)/data';

const Stack = createStackNavigator();

export default function App() {
  console.log(data); // log the data in your JSON file.

  return (
    <NavigationContainer>
      <Stack.Navigator 
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
