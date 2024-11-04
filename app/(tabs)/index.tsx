import { Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Styles";
import { tacoTruckData } from "../(tabs)/tacoTruckData";
import HeaderImage from "../HeaderImage";
import SearchBar from "../SearchBar";
import TruckList from "../TruckList";
import TruckModal from "../TruckModal";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [ratings, setRatings] = useState({}); // State to store ratings

  const data = tacoTruckData; // Use the imported data

  useEffect(() => {
    const loadRatings = async () => {
      try {
        const storedRatings = await AsyncStorage.getItem("ratings");
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

  const handleRating = async (truckId, rating) => {
    const updatedRatings = { ...ratings, [truckId]: rating };
    setRatings(updatedRatings);

    try {
      await AsyncStorage.setItem("ratings", JSON.stringify(updatedRatings));
      Alert.alert(`You rated ${selectedTruck.name} ${rating} stars!`);
    } catch (error) {
      console.error("Failed to save rating", error);
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
      {/* <View style={styles.container}>
        <View style={styles.searchContainer}>
        </View>
      </View> */}
      <HeaderImage />
      <Text style={styles.headerText}>
        Discover the Best Taco Trucks in Your Area!
      </Text>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <TruckList
        filteredData={filteredData}
        openModal={openModal}
        ratings={ratings}
      />
      {selectedTruck && (
        <TruckModal
          truck={selectedTruck}
          modalVisible={modalVisible}
          closeModal={() => setModalVisible(false)}
          handleRating={handleRating}
        />
      )}
    </>
  );
}
