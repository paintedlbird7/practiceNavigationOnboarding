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
      { id: '1', name: 'Tacos Los Tres Reyes', location: '95122', description: 'Popular for authentic Mexican street tacos.', image: require("../assets/images/taco1.jpg"), latitude: 37.349080, longitude: -121.829437 },
      { id: '2', name: 'La Oaxaquense Food Truck', location: '95116', description: 'Known for their delicious carne asada and al pastor tacos.', image: require("../assets/images/taco2.jpg"), latitude: 37.378892, longitude: 121.867202 },
      { id: '3', name: 'Orale taco truck', location: '95116', description: 'Famous for crispy tacos and fresh ingredients.', image: require("../assets/images/taco3.jpg"), latitude: 37.389258, longitude: -121.844543 },
      { id: '4', name: 'El Señor De Los Tacos Food Truck', location: '95127', description: 'Serving amazing birria tacos and quesadillas.', image: require("../assets/images/taco4.jpg"), latitude: 37.357079, longitude: -121.825904 },
      { id: '5', name: 'Tacos Chencho', location: '95127', description: 'Great for fish tacos and unique flavors.', image: require("../assets/images/taco5.jpg"), latitude: 37.362264, longitude: -121.819381 },
      { id: '6', name: 'Tacos Huandacareo Food Truck', location: '95127', description: 'A local favorite with authentic flavors.', image: require("../assets/images/taco6.jpg"), latitude: 37.359126, longitude: -121.827793 },
      { id: '7', name: 'Tacos Montero Food Truck', location: '95122', description: 'Known for their giant tacos and amazing sauces.', image: require("../assets/images/taco7.jpg"), latitude: 37.339885, longitude: -121.853027 },
      { id: '8', name: 'Hugos Tacos Food Truck', location: '95122', description: 'Specializes in tacos de lengua and tripa.', image: require("../assets/images/taco8.jpg"), latitude: 37.321594, longitude: -121.8830 },
      { id: '9', name: 'Taqueria Paracuaro', location: '95113', description: 'A family-owned taqueria known for authentic Michoacán-style tacos and fresh salsas.', image: require("../assets/images/taco9.jpg"), latitude: 37.356432493707636, longitude: -121.88825403550148 },
      { id: '10', name: 'Tortilleria La Familiar', location: '95127', description: 'Tortilleria La Familiar offers fresh, handmade tortillas and traditional Mexican dishes.', image: require("../assets/images/taco10.jpg"), latitude: 37.359174, longitude: -121.821133 },
      { id: '11', name: 'Tacos Mi Reynita', location: '94603', description: 'Famous for authentic Tijuana-style street tacos with fresh salsas.', image: require("../assets/images/taco11.jpg"), latitude: 37.738624, longitude: -122.166524 },
      { id: '12', name: 'Tacos Santiaguito', location: '95129', description: 'Known for its rich, slow-cooked meats and flavorful toppings.', image: require("../assets/images/taco12.jpg"), latitude: 37.322381, longitude: -121.970633 },
      { id: '13', name: 'Tacos El Plebe', location: '95112', description: 'Specializes in street tacos with a variety of fillings including carne asada and al pastor.', image: require("../assets/images/taco13.jpg"), latitude: 37.327337, longitude: -121.820249 }, 
      { id: '14', name: 'Rosario\'s Tacos', location: '95110', description: 'A local favorite, Rosario\'s Tacos serves up authentic Mexican tacos with homemade tortillas and fresh ingredients.', image: require("../assets/images/taco14.jpg"), latitude: 37.321136, longitude: -121.884015 },
      { id: '15', name: 'Mariscos y Tacos Los Compas', location: '95122', description: 'Seafood tacos and delicious salsas.', image: require("../assets/images/taco15.jpg"), latitude: 37.341984, longitude: -121.842094 },
      { id: '16', name: 'Spartan Taco', location: '95112', description: 'A popular spot for students with a wide range of tacos.', image: require("../assets/images/taco16.jpg"), latitude: 37.338529, longitude: -121.850009 }, 
      { id: '17', name: 'Tustacos Taqueria', location: '95008', description: 'Known for its variety of tacos and quick service.', image: require("../assets/images/taco17.jpg"), latitude: 37.287990, longitude: -121.974990 },
      { id: '18', name: 'Taco De Oro Taco Truck', location: '94089', description: 'Well-loved for golden tacos and delicious fillings.', image: require("../assets/images/taco18.jpg"), latitude: 37.406231, longitude: -121.996075 },
      { id: '19', name: 'Famosa Taqueria', location: '95112', description: 'A family-run taqueria with authentic flavors.', image: require("../assets/images/taco19.jpg"), latitude: 37.323020, longitude: -121.872353 },
      { id: '20', name: 'Taco Genesis', location: '95127', description: 'Great for late-night tacos with spicy sauces.', image: require("../assets/images/taco20.jpg"), latitude: 37.353422, longitude: -121.822666 }, 
      { id: '21', name: 'Tacos El ValleSJ', location: '95136', description: 'Serves up authentic tacos with bold flavors and fresh ingredients.', image: require("../assets/images/taco21.jpg"), latitude: 37.26023, longitude: -121.86311 },  
  ];

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
      // Clear the filteredData when the search query is empty
      setFilteredData([]);
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
      <View style={styles.imageContainer}>
        <Image 
          source={require("../assets/images/rp_my_logo.png")} // Replace with the actual path to your image
          style={styles.headerImage}
        />
      </View>

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
    justifyContent: "space-evenly",
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
      height: 200, 
      borderRadius: 10,
      marginVertical: 10,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    headerImage: {
      width: '100%',
      height: 200, 
      resizeMode: 'cover',
    },    
});
