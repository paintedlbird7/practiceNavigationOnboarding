// HeaderImage.js
import { View, Image } from "react-native";
import styles from "./Styles";

export default function HeaderImage() {
    return (
      <View style={styles.imageContainer}>
        <Image 
         source={require("./assets/images/rp_my_logo.png")}
          style={styles.headerImage}
        />
      </View>
    );
  }