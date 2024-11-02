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
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Marker } from 'react-native-maps';
import styles from "../styles";
import { tacoTruckData } from "../(tabs)/tacoTruckData";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); 
  const [selectedTruck, setSelectedTruck] = useState(null); 
  const [ratings, setRatings] = useState({}); // State to store ratings

  const data = tacoTruckData; // Use the imported data

  const navigation = useNavigation();

  useEffect(() => {
    const loadRatings = async () => {
      try {
        const storedRatings = await AsyncStorage.getItem('ratings');
        if (storedRatings) {
          setRatings(JSON.parse(storedRatings));
        }
      } catch (error) {
        console.error("Failed to load ratings", error);
      }
    };

    loadRatings();
  }, []);

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
      setFilteredData([]);
      Alert.alert("Please enter a search term.");
    }
  };

  const openModal = (item) => {
    setSelectedTruck(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedTruck(null);
  };

  const handleRating = async (truckId, rating) => {
    const updatedRatings = { ...ratings, [truckId]: rating };
    setRatings(updatedRatings);
    
    try {
      await AsyncStorage.setItem('ratings', JSON.stringify(updatedRatings));
      Alert.alert(`You rated ${selectedTruck.name} ${rating} stars!`);
    } catch (error) {
      console.error("Failed to save rating", error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => openModal(item)}>
      <Text style={styles.resultText}>{item.name}</Text>
      <Text style={styles.resultLocation}>Zip Code: {item.location}</Text>
      <Text style={styles.resultDescription}>{item.description}</Text>
      {ratings[item.id] && (
        <Text style={styles.ratingText}>Rating: {ratings[item.id]} ★</Text>
      )}
    </TouchableOpacity>
  );

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
            onSubmitEditing={handleSearch}
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

              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity key={star} onPress={() => handleRating(selectedTruck.id, star)}>
                    <Text style={styles.ratingStar}>{star} ★</Text>
                  </TouchableOpacity>
                ))}
              </View>

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
