import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Styles";
import { tacoTruckData } from "../(tabs)/data";
import HeaderImage from "../HeaderImage";
import SearchBar from "../SearchBar";
import TruckList from "../TruckList";  // TruckList should manage its own scrolling
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
    if (searchQuery.trim() === "") {
      showAlert("Type keyword in the search bar");
    } else {
      const results = data.filter(
        (item) =>
          item.FACILITY_NAME.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.ZIP.includes(searchQuery)
      );
      setFilteredData(results);
      if (results.length === 0) {
        showAlert("No results found.");
      }
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
    setAlertVisible(false);
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
      
      {/* Remove ScrollView and directly render TruckList */}
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

      {alertVisible && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setAlertVisible(false)} 
        />
      )}
    </>
  );
}
