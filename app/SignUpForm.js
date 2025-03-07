import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, ScrollView } from 'react-native';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    contactEmail: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mgveagoo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          location: formData.location,
          description: formData.description,
          email: formData.contactEmail,
        }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Thank you! Your taco truck information has been submitted.');
        setFormData({
          name: '',
          location: '',
          description: '',
          contactEmail: '',
        });
      } else {
        Alert.alert('Error', 'There was an error submitting the form.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to submit the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container2}>
        <Text style={styles.headerText}>
          Fill Out This Form To Include Your Taco Truck.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Truck Name to be Added"
          placeholderTextColor="#666"
          value={formData.name}
          onChangeText={(value) => handleChange('name', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Zip Code"
          placeholderTextColor="#666"
          value={formData.location}
          onChangeText={(value) => handleChange('location', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          placeholderTextColor="#666"
          value={formData.description}
          onChangeText={(value) => handleChange('description', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Email"
          placeholderTextColor="#666"
          value={formData.contactEmail}
          onChangeText={(value) => handleChange('contactEmail', value)}
          keyboardType="email-address"
        />
        <TouchableOpacity 
          style={styles.submitButton} 
          onPress={handleSubmit} 
          disabled={isSubmitting}
        >
          <Text style={styles.buttonText}>{isSubmitting ? 'Submitting...' : 'Submit'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container2: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    marginHorizontal: 20,
    marginTop: 40,  // Adjust this value to move the header higher
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});
