import { Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../Styles";
import tacoTruckData from "../(tabs)/data";
import HeaderImage from "../HeaderImage";
import SearchBar from "../SearchBar";
import TruckList from "../TruckList";
import TruckModal from "../TruckModal";
import CustomAlert from "../CustomAlert"; // Assuming this is your custom alert component
import SignUpForm from "../SignUpForm";
import MapViewScreen from './MapViewScreen';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [ratings, setRatings] = useState({});
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const data = tacoTruckData || [];  // Ensure tacoTruckData is an array

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

  const handleRating = async (truckId, newRating) => {
    // Update the ratings object with the new rating for the specific truck
    const updatedRatings = { ...ratings, [truckId]: newRating };
    setRatings(updatedRatings);

    try {
      // Store updated ratings in AsyncStorage
      await AsyncStorage.setItem("ratings", JSON.stringify(updatedRatings));

      // Show confirmation alert with the number of stars given
      showAlert(`You gave ${newRating} ${newRating === 1 ? "star" : "stars"}`);
    } catch (error) {
      console.error("Failed to save rating", error);
    }
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true); // Make the alert visible
  };

  const handleSearch = () => {
    // console.log(data); // Check if data is loaded correctly
    if (searchQuery.trim() === "") {
      showAlert("Type keyword in the search bar");
    } else {
      const results = data.filter((item) => {
        const facilityName = item.FACILITY_NAME || "";  // Ensure FACILITY_NAME is always a string
        const zipCode = item.ZIP || "";  // Ensure ZIP is a string
  
        return (
          facilityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          zipCode.includes(searchQuery)
        );
      });
      setFilteredData(results);
      if (results.length === 0) {
        showAlert("No results found.");
      }
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
          ratings={ratings} // Pass ratings object here
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
          ratings={ratings} // Pass the ratings to the modal
        />
      )}

      {/* Displaying the alert if it's visible */}
      {alertVisible && (
        <CustomAlert
          message={alertMessage}
          onClose={() => setAlertVisible(false)}
        />
      )}
    </>
  );
}
