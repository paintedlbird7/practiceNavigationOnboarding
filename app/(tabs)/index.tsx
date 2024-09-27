import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Button } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "../screens/WelcomeScreen";

export default function HomeScreen() {
  const handleImagePress = () => {
    // Action when image is clicked, e.g., navigate to another screen or show an alert
    console.log("Image clicked!");
  };
  const handlePress = () => console.log("text pressed")
  return (
    <>
    <WelcomeScreen/>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <TouchableOpacity onPress={handleImagePress}>
            <Image source={require("@/assets/images/RP_my_logo.png")} 
              // style={styles.logoImage} // Resizing the header image
            />
          </TouchableOpacity>
        }
      >
        <ThemedView style={styles.titleContainer}></ThemedView>
      </ParallaxScrollView>
      <View style={styles.container}>
        <Text numberOfLines={1} onPress={handlePress}>hello a really really long textreally really long text really really long text really really long text
        </Text>
        <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image 
        source={{
          width: 200,
          height: 300, 
          uri: "https://picsum.photos/200/300"}}
        // source={require('@/assets/images/icon.png')}
        // style={styles.iconImage} // Resizing the icon image
        /></TouchableOpacity>
        <SafeAreaView>
        <Button 
        color="orange"
        title="Click Me" 
        onPress={() => Alert.alert("My title", "My message", [
          {text: "Yes", onPress:( ) => console.log("Yes")},
          {text: "No", onPress:( ) => console.log("Yes")},

        ])} /></SafeAreaView>
        {/* </Button> */}
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
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: "absolute",
  // },
  logoImage: {
    width: 150, // Set desired width for logo image
    height: 150, // Set desired height for logo image
  },
  iconImage: {
    width: 50,  // Set desired width for icon
    height: 50, // Set desired height for icon
  },
});
