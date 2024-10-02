import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  FlatList,
} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { useNavigation } from 'expo-router';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState(""); // Single search query
  const [filteredData, setFilteredData] = useState([]);

  // Dummy data for taco trucks
  const data = [
    { id: '1', name: 'Tacos El Primo', location: '95127', description: 'Popular for authentic Mexican street tacos.' },
    { id: '2', name: 'La Calle Tacos', location: '95122', description: 'Known for their delicious carne asada and al pastor tacos.' },
    { id: '3', name: 'Tacos El Dorado', location: '95116', description: 'Famous for crispy tacos and fresh ingredients.' },
    { id: '4', name: 'El Tapatio Taco Truck', location: '95148', description: 'Serving amazing birria tacos and quesadillas.' },
    { id: '5', name: 'Taqueria La Vaca', location: '95127', description: 'Great for fish tacos and unique flavors.' },
    { id: '6', name: 'Tacos Michoacan', location: '95116', description: 'A local favorite with authentic flavors.' },
    { id: '7', name: 'Tacos El Gordo', location: '95122', description: 'Known for their giant tacos and amazing sauces.' },
    { id: '8', name: 'El Rey Taco Truck', location: '95148', description: 'Specializes in tacos de lengua and tripa.' },
  ];

  const navigation = useNavigation();

  useEffect(() => {
    if (navigation) {
      navigation.setOptions({
        headerLargeTitle: true,
      });
    }
  }, [navigation]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      // Filter the data based on the search query (name or location)
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
      Alert.alert("Please enter a search term.");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.resultItem}>
      <Text style={styles.resultText}>{item.name}</Text>
      <Text style={styles.resultLocation}>Zip Code: {item.location}</Text>
      <Text style={styles.resultDescription}>{item.description}</Text>
    </View>
  );

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image source={require("../assets/images/RP_my_logo.png")} />
        }
      >
        <ThemedView style={styles.titleContainer}></ThemedView>
      </ParallaxScrollView>

      <View style={styles.container}>
        {/* Single Search Box */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search taco trucks or enter zip code"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={handleSearch}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Search Results */}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  resultsList: {
    width: "100%",
  },
  resultItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resultLocation: {
    fontSize: 14,
    color: "#666",
  },
  resultDescription: {
    fontSize: 14,
    color: "#444",
  },
  noResultsText: {
    fontSize: 16,
    color: "#888",
  },
});
