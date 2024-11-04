// TruckModal.js
import React from 'react';
import { View, Text, Image, Modal, Button, TouchableOpacity } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import styles from "./styles";

export default function TruckModal({ truck, modalVisible, closeModal, handleRating }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={truck.image} style={styles.modalImage} />
          <Text style={styles.modalTitle}>{truck.name}</Text>
          <Text style={styles.modalLocation}>Zip Code: {truck.location}</Text>
          <Text style={styles.modalDescription}>{truck.description}</Text>

          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleRating(truck.id, star)}>
                <Text style={styles.ratingStar}>{star} ★</Text>
              </TouchableOpacity>
            ))}
          </View>

          <MapView
            style={styles.map}
            initialRegion={{
              latitude: truck.latitude,
              longitude: truck.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{ latitude: truck.latitude, longitude: truck.longitude }}
              title={truck.name}
            />
          </MapView>

          <Button title="Close" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
}
