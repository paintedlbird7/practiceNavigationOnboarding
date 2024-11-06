import { Tabs } from 'expo-router';
import React from 'react';
import { useRouter } from 'expo-router'; // Import useRouter
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter(); // Initialize useRouter to navigate

  // Function to handle navigation to login screen
  const goToLogin = () => {
    router.push('/login'); // Use router.push to go to LoginScreen
  };

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      {/* Taco Truck Finder Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Taco Truck Finder',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      
      {/* Sign Up A Taco Truck Tab */}
      <Tabs.Screen
        name="form"
        options={{
          title: 'Sign Up A Taco Truck',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'SignUpForm' : 'car-outline'} color={color} />
          ),
        }}
      />

      {/* Register Tab (Optional) */}
      <Tabs.Screen
        name="register"
        options={{
          title: 'Register',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />

      {/* Link to Login Screen */}
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'log-in' : 'log-in-outline'} color={color} />
          ),
          tabBarButton: () => (
            <button onClick={goToLogin}>Login</button> // Or use TouchableOpacity
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
