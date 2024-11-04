import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';

const TruckMap = ({ latitude, longitude, name }) => (
    <Text>hi</Text>
//   <MapView
//     style={styles.map}
//     initialRegion={{
//       latitude: latitude, // Use the passed props
//       longitude: longitude, // Use the passed props
//       latitudeDelta: 0.01,
//       longitudeDelta: 0.01,
//     }}
//   >
//     <Marker
//       coordinate={{ latitude, longitude }} // Use the passed props
//       title={name} // Use the passed props
//     />
//   </MapView>
);

export default TruckMap;
