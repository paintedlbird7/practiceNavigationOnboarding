// RootLayout.js

import React, { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../app/(tabs)/index';
import SignUpScreen from './SignUpForm';
import ProfileScreen from '../app/ProfileScreen';
// import SettingsScreen from './screens/SettingsScreen'; // New tab screen
import { useColorScheme } from '@/hooks/useColorScheme';
import MapViewScreen from './MapViewScreen';

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'SignUp') {
              iconName = 'create-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            } else if (route.name === 'MapView') {
              iconName = 'map-outline'; // Icon for the new Settings tab
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="MapView" component={MapViewScreen} options={{ title: 'Map View' }} />
        <Tab.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />

        {/* <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} /> */}
        {/* <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} /> New tab */}
      </Tab.Navigator>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="(tabs)" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
