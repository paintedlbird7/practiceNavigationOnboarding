import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TruckMap from './TruckMap';

export default function MapViewScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Map View Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
