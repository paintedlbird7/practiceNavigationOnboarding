import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert, // Import Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function WelcomeScreen(props) {
  const navigation = useNavigation();

  const showLoginAlert = () => {
    Alert.alert("Login", "Login button pressed", [{ text: "OK" }]);
    navigation.navigate('LoginScreen');
  };

  const showRegisterAlert = () => {
    Alert.alert("Register", "Register button pressed", [{ text: "OK" }]);
    navigation.navigate('RegisterScreen');
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/background.jpeg")}
    >
      <View style={styles.buttonsContainer}>
        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={showLoginAlert} // Call the alert function
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={showRegisterAlert} // Call the alert function
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginBottom: 10,
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
