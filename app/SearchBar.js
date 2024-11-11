import React from 'react';
import { View, TextInput, TouchableOpacity, Text, useColorScheme } from 'react-native';
import styles from './styles';

export default function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
  const colorScheme = useColorScheme(); // Detects light or dark mode
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={[styles.searchBar, { color: isDarkMode ? '#FFFFFF' : '#000000' }]} // White text in dark mode
        placeholder="Search taco trucks or enter zip code"
        placeholderTextColor={isDarkMode ? '#AAAAAA' : '#888888'} // Dimmed placeholder color in dark mode
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={[styles.buttonText, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
