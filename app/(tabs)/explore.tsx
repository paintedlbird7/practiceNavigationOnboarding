import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Login from "../LoginScreen.js/LoginScreen";

function WelcomeScreen(props) {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/background.jpeg")}
    >
      <View style={styles.buttonsContainer}>
        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('RegisterScreen')}
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
