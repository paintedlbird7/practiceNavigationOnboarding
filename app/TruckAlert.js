import React from 'react';
import CustomAlert from './CustomAlert';

export default function TruckAlert({ alertVisible, alertMessage, onClose }) {
  return (
    <CustomAlert
      visible={alertVisible}
      message={alertMessage}
      onClose={onClose}
    />
  );
}
