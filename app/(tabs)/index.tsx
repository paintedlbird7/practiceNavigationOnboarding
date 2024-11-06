import { Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Styles";
import { tacoTruckData } from "../(tabs)/tacoTruckData";
import HeaderImage from "../HeaderImage";
import SearchBar from "../SearchBar";
import TruckList from "../TruckList";
import TruckModal from "../TruckModal";
import CustomAlert from '../CustomAlert';
import SignUpForm from '../SignUpForm';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [ratings, setRatings] = useState({});
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const data = tacoTruckData;

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
        showAlert("No results found.");
      }
    } else {
      setFilteredData([]);
      showAlert("Please enter a search term.");
    }
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const handleRating = async (truckId, rating) => {
    const updatedRatings = { ...ratings, [truckId]: rating };
    setRatings(updatedRatings);

    try {
      await AsyncStorage.setItem("ratings", JSON.stringify(updatedRatings));
      showAlert(`You rated ${selectedTruck.name} ${rating} stars!`);
    } catch (error) {
      console.error("Failed to save rating", error);
    }
  };

  const openModal = (item) => {
    setSelectedTruck(item);
    setModalVisible(true);
    setAlertVisible(false); // Ensure alert is not visible when opening the modal
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedTruck(null);
  };

  return (
    <>
      <HeaderImage />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      
      {/* Wrap TruckList with ScrollView to make results scrollable */}
      <ScrollView>
        <TruckList
          filteredData={filteredData}
          openModal={openModal}
          ratings={ratings}
        />
      </ScrollView>

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
}
