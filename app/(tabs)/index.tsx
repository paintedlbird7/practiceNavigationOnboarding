import { Image, StyleSheet, View, Text, TouchableOpacity, Alert, TextInput } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

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
        {/* Horizontal layout for Search Bar and Button */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity 
            style={styles.searchButton} 
            onPress={() => Alert.alert("Search", `Searching for: ${searchQuery}`)}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Vertical layout: Texts above Button */}
        <View style={styles.verticalLayout}>
          {/* Horizontal layout for "Write A Review" and "Events" */}
          <View style={styles.horizontalLine}>
            <Text style={styles.horizontalText}>Write A Review</Text>
            <Text style={styles.horizontalText}>Events</Text>
          </View>

          {/* Vertical layout for "Login" and "SignUp" */}
          <View style={styles.textContainer}>
            <Text style={styles.verticalText}>Login</Text>
            <Text style={styles.verticalText}>SignUp</Text>
          </View>

          {/* Button below the text */}
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => Alert.alert("My title", "My message", [
              { text: "Yes", onPress: () => console.log("Yes") },
              { text: "No", onPress: () => console.log("No") },
            ])}
          >
            <Text style={styles.buttonText}>Click Me</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row', // Horizontal layout for search bar and button
    alignItems: 'center',  // Vertically align items in the center
    width: '100%',
    marginBottom: 20, // Adds space below the search area
  },
  searchBar: {
    height: 40,
    flex: 1, // Allows the search bar to take up available space
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10, // Space between search bar and button
  },
  searchButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  verticalLayout: {
    flexDirection: 'column',  // Layout items in a column (text on top, button below)
    justifyContent: 'center',  // Center everything vertically
    alignItems: 'center',      // Align all content horizontally in the center
    width: '100%',
  },
  horizontalLine: {
    flexDirection: 'row',  // Layout "Write A Review" and "Events" in a row
    justifyContent: 'space-between',  // Space between the two text items
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,  // Space between horizontal and vertical text containers
  },
  textContainer: {
    flexDirection: 'column',  // Layout "Login" and "SignUp" in a column
    alignItems: 'center',
    marginBottom: 20,  // Adds space between text and button
  },
  horizontalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verticalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,  // Adds space between "Login" and "SignUp"
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',  // Centers the button text horizontally
    justifyContent: 'center',  // Centers the button text vertically
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
