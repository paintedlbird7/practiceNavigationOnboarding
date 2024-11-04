// HeaderImage.js
import { View, Image, Text, } from "react-native";
import styles from "./Styles";

export default function HeaderImage() {
    return (
      <View style={styles.imageContainer}>
        <Image 
         source={require("./assets/images/rp_my_logo.png")}
          style={styles.headerImage}
        />
   <Text style={styles.headerText}>
        Discover the Best Taco Trucks in Your Area!
      </Text>
      </View>
    );
  }