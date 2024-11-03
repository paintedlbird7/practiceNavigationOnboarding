import { View, Image, Text, StyleSheet } from "react-native";
import  styles from "./styles";

export default function Header() {
  return (
    <View style={styles.imageContainer}>
      <Image source={require("./assets/images/rp_my_logo.png")} style={styles.headerImage} />
      <Text style={styles.headerText}>Discover the Best Taco Trucks in Your Area!</Text>
    </View>
  );
}
