import React from 'react';
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';
import TruckMap from './TruckMap';
import CustomAlert from './CustomAlert';

export default function TruckModal({ 
  truck, 
  modalVisible, 
  closeModal, 
  handleRating, 
  alertVisible, 
  alertMessage, 
  onClose 
}) {
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
          <Text style={styles.modalTitle}>{truck.FACILITY_NAME}</Text>
          <Text style={styles.modalLocation}>Zip Code: {truck.ZIP}</Text>
          <Text style={styles.modalDescription}>{truck.PROGRAM_DESCRIPTION}</Text>

          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleRating(truck.facility_id, star)}>
                <Text style={styles.ratingStar}>{star} ★</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TruckMap 
            latitude={truck.latitude} 
            longitude={truck.longitude} 
            name={truck.name} 
          />

          {/* Close Button at the Bottom */}
          <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
            <Text style={styles.closeModalButtonText}>Close</Text>
          </TouchableOpacity>
          
        </View>

        {/* Custom Alert inside TruckModal */}
        <CustomAlert
          visible={alertVisible}
          message={alertMessage}
          onClose={onClose}
        />
      </View>
    </Modal>
  );
}