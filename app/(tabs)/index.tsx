import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Button } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeScreen from "../screens/WelcomeScreen";

export default function HomeScreen() {
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
        <Text>hello </Text>
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
  logoImage: {
    width: 150, // Set desired width for logo image
    height: 150, // Set desired height for logo image
  },
  iconImage: {
    width: 50,  // Set desired width for icon
    height: 50, // Set desired height for icon
  },
});
