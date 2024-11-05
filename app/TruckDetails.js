import React from 'react';
import TruckList from '../app/TruckList';
import TruckModal from '../app/TruckModal';

const TruckDetails = ({
  filteredData,
  openModal,
  ratings,
  selectedTruck,
  modalVisible,
  closeModal,
  handleRating,
  alertVisible,
  alertMessage,
}) => (
  <>
    <TruckList
      filteredData={filteredData}
      openModal={openModal}
      ratings={ratings}
    />

    {selectedTruck && (
      <TruckModal
        truck={selectedTruck}
        modalVisible={modalVisible}
        closeModal={closeModal}
        handleRating={handleRating}
        alertVisible={alertVisible}
        alertMessage={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
    )}
  </>
);

export default TruckDetails;
