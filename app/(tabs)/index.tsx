import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList,
  Modal,
  Button,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); 
  const [selectedTruck, setSelectedTruck] = useState(null); 

  console.log("HomeScreen component rendered");

  const data = [
    { id: '1', name: 'Tacos Los Tres Reyes', location: '95122', description: 'Popular for authentic Mexican street tacos.', image: require("../assets/images/taco1.jpg"), latitude: 37.349080, longitude: -121.829437 },
    { id: '2', name: 'La Oaxaquense Food Truck', location: '95116', description: 'Known for their delicious carne asada and al pastor tacos.', image: require("../assets/images/taco2.jpg"), latitude: 37.378892, longitude: 121.867202 },
    // More taco truck data...
  ];

  const { width, height } = Dimensions.get('window');
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation) {
      console.log("Navigation hook triggered");
      navigation.setOptions({
        headerLargeTitle: true,
      });
    }
  }, [navigation]);

  const handleSearch = () => {
    console.log("Search initiated with query:", searchQuery);
    if (searchQuery.trim() !== "") {
      const results = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.location.includes(searchQuery)
      );
      console.log("Filtered data:", results);
      setFilteredData(results);

      if (results.length === 0) {
        Alert.alert("No results found.");
      }
    } else {
      setFilteredData([]);
      Alert.alert("Please enter a search term.");
    }
  };

  const openModal = (item) => {
    console.log("Modal opened for truck:", item.name);
    setSelectedTruck(item);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => openModal(item)}>
      <Text style={styles.resultText}>{item.name}</Text>
      <Text style={styles.resultLocation}>Zip Code: {item.location}</Text>
      <Text style={styles.resultDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  const closeModal = () => {
    setModalVisible(false);
    setSelectedTruck(null);
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <Image 
          source={require("../assets/images/rp_my_logo.png")} 
          style={styles.headerImage}
        />
      </View>
      <Text style={styles.headerText}>Discover the Best Taco Trucks in Your Area!</Text>

      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search taco trucks or enter zip code"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={handleSearch}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.resultsList}
          />
        ) : (
          <Text style={styles.noResultsText}>No results to display</Text>
        )}
      </View>

      {selectedTruck && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={selectedTruck.image} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedTruck.name}</Text>
              <Text style={styles.modalLocation}>Zip Code: {selectedTruck.location}</Text>
              <Text style={styles.modalDescription}>{selectedTruck.description}</Text>

              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: selectedTruck.latitude,
                  longitude: selectedTruck.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  coordinate={{ latitude: selectedTruck.latitude, longitude: selectedTruck.longitude }}
                  title={selectedTruck.name}
                />
              </MapView>

              <Button title="Close" onPress={closeModal} />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: '5%', // Responsive padding
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  resultsList: {
    width: "100%",
  },
  resultItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resultLocation: {
    fontSize: 14,
    color: "#666",
  },
  resultDescription: {
    fontSize: 14,
    color: "#444",
  },
  noResultsText: {
    fontSize: 16,
    color: "#888",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalLocation: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '90%', // Responsive width
    height: 200, 
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
});
