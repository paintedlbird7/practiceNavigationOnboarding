import React from "react";
import { FlatList, Text, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./styles";

export default function TruckList({ filteredData, openModal, ratings }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.resultItem} onPress={() => openModal(item)}>
      <Text style={styles.resultText}>{item.FACILITY_NAME}</Text>
      <Text style={styles.resultLocation}>Zip Code: {item.ZIP}</Text>
      <Text style={styles.resultDescription}>{item.PROGRAM_DESCRIPTION}</Text>
      {ratings[item.facility_id] && (
        <Text style={styles.ratingText}>
        {ratings[truck.facility_facility_facility_facility_facility_facility_id] ? `Rating: ${ratings[truck.facility_facility_facility_id]} ★` : "No rating yet"}
      </Text>
        // <Text style={styles.ratingText}>Rating: {ratings[item.facility_id]} ★</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.listContainer}>
        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.facility_id}
            style={styles.resultsList}
          />
        ) : (
          <Text style={styles.noResultsText}>No results to display</Text>
        )}
      </View>
    </ScrollView>
  );
}
