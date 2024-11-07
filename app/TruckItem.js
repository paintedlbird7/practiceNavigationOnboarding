// TruckItem.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const TruckItem = ({ truck, openModal, rating }) => (
  <TouchableOpacity style={styles.resultItem} onPress={() => openModal(truck)}>
    <Text style={styles.resultText}>{truck.FACILITY_NAME}</Text>
    <Text style={styles.resultLocation}>Zip Code: {truck.ZIP}</Text>
    <Text style={styles.resultDescription}>{truck.description}</Text>
    {rating && <Text style={styles.ratingText}>Rating: {rating} ★</Text>}
  </TouchableOpacity>
);

export default TruckItem;
