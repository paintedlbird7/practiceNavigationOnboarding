import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
// Import other screens as needed, e.g., HomeScreen, TacoTruckScreen
// If you're not using Firebase SDK directly, you can omit the following imports:
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaVr5MuDiG1foXosSdnbFRttOsY6KS9wc",
  authDomain: "find-taco-truck.firebaseapp.com",
  projectId: "find-taco-truck",
  storageBucket: "find-taco-truck.appspot.com",
  messagingSenderId: "247893466140",
  appId: "1:247893466140:web:5785361e1ac59992ca93d9",
  measurementId: "G-TNNK4ETP9Z"
};

// Initialize Firebase only if it hasn't been initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  // Optional: You can use this effect to test Firestore setup
  useEffect(() => {
    const addTacoTruck = async () => {
      await firestore().collection('tacoTrucks').add({
        name: 'Taco Truck 1',
        location: 'Location 1',
        rating: 5,
      });
    };

    const getTacoTrucks = async () => {
      const snapshot = await firestore().collection('tacoTrucks').get();
      const trucks = snapshot.docs.map(doc => doc.data());
      console.log(trucks);
    };

    // Uncomment to test adding and fetching taco trucks
    // addTacoTruck();
    // getTacoTrucks();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" // Set your initial screen
      >
        {/* Example screen components */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="TacoTruck" component={TacoTruckScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
