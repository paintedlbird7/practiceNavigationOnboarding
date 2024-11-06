import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RatingsLoader({ setRatings, showAlert }) {
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
  }, [setRatings]);

  const saveRating = async (truckId, rating) => {
    try {
      await AsyncStorage.setItem("ratings", JSON.stringify(ratings));
      showAlert(`You rated ${selectedTruck.name} ${rating} stars!`);
    } catch (error) {
      console.error("Failed to save rating", error);
    }
  };

  return null; // No UI elements needed, handles state and logic only.
}
