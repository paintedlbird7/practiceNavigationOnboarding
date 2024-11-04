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
        <TextInput
          style={styles.input}
          placeholder="Truck Name to be Added"
          value={formData.name}
          onChangeText={(value) => handleChange('name', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Location (Zip Code)"
          value={formData.location}
          onChangeText={(value) => handleChange('location', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={formData.description}
          onChangeText={(value) => handleChange('description', value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Email"
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

// Define styles here
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container2: {
    padding: 20,
    backgroundColor: '#fff',
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
});
