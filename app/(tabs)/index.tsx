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
} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { useNavigation } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState(""); // Single search query
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility
  const [selectedTruck, setSelectedTruck] = useState(null); // Selected truck data

  // Dummy data for taco trucks with images
  const data = [
    { id: '1', name: 'Tacos El Primo', location: '95127', description: 'Popular for authentic Mexican street tacos.', image: require("../assets/images/taco1.jpg"), latitude: 37.3352, longitude: -121.8830 },
    { id: '2', name: 'La Calle Tacos', location: '95122', description: 'Known for their delicious carne asada and al pastor tacos.', image: require("../assets/images/taco2.jpg"), latitude: 37.3200, longitude: -121.8700 },
    { id: '3', name: 'Tacos El Dorado', location: '95116', description: 'Famous for crispy tacos and fresh ingredients.', image: require("../assets/images/taco3.jpg"), latitude: 37.3200, longitude: -121.8700 },
    { id: '4', name: 'El Tapatio Taco Truck', location: '95148', description: 'Serving amazing birria tacos and quesadillas.', image: require("../assets/images/taco4.jpg"), latitude: 37.3200, longitude: -121.8700 },
    { id: '5', name: 'Taqueria La Vaca', location: '95127', description: 'Great for fish tacos and unique flavors.', image: require("../assets/images/taco5.jpg"), latitude: 37.3200, longitude: -121.8700 },
    { id: '6', name: 'Tacos Michoacan', location: '95116', description: 'A local favorite with authentic flavors.', image: require("../assets/images/taco6.jpg"), latitude: 37.3352, longitude: -121.8830 },
    { id: '7', name: 'Tacos El Gordo', location: '95122', description: 'Known for their giant tacos and amazing sauces.', image: require("../assets/images/taco7.jpg"), latitude: 37.3352, longitude: -121.8830 },
    { id: '8', name: 'El Rey Taco Truck', location: '95148', description: 'Specializes in tacos de lengua and tripa.', image: require("../assets/images/taco8.jpg"), latitude: 37.3352, longitude: -121.8830 },
  ];
  //TODO: Add latitude and longitude for the other taco trucks...


  const navigation = useNavigation();

  useEffect(() => {
    if (navigation) {
      navigation.setOptions({
        headerLargeTitle: true,
      });
    }
  }, [navigation]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const results = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.location.includes(searchQuery)
      );
      setFilteredData(results);

      if (results.length === 0) {
        Alert.alert("No results found.");
      }
    } else {
      Alert.alert("Please enter a search term.");
    }
  };

  // Open the modal and set selected truck
  const openModal = (item) => {
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

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedTruck(null);
  };

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image source={require("../assets/images/RP_my_logo.png")} />
        }
      >
        <ThemedView style={styles.titleContainer}></ThemedView>
      </ParallaxScrollView>

      <View style={styles.container}>
        {/* Single Search Box */}
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

        {/* Search Results */}
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

      {/* Modal for displaying selected truck details */}
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

        {/* Map component */}
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
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
      height: 200, // Set the height as needed
      borderRadius: 10,
      marginVertical: 10,
    },
});
