import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './Styles';

export default function SearchBar({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search taco trucks or enter zip code"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
