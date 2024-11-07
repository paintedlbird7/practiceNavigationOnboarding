import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function TruckList({ filteredData, openModal, ratings }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => openModal(item)}>
      <Text style={styles.resultText}>{item.FACILITY_NAME}</Text>
      <Text style={styles.resultLocation}>Zip Code: {item.ZIP}</Text>
      <Text style={styles.resultDescription}>{item.description}</Text>
      {ratings[item.id] && (
        <Text style={styles.ratingText}>Rating: {ratings[item.id]} ★</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View>
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
  );
}
