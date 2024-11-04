import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './Styles';

const TruckMap = ({ latitude, longitude, name }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={{ latitude, longitude }} title={name} />
    </MapView>
  );
};

export default TruckMap;
