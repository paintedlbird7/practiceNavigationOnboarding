// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: '5%',
    width: "90%",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginLeft: 18,
    marginTop: 10,  // Increase this value as needed
    borderBottomColor: '#FFA500',
    borderBottomWidth: 2,
    marginTop: -20,  // Decrease or set to 0 for higher placement
  },
  searchBar: {
    height: 40,
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  resultsList: {
    width: "100%",
  },
  resultItem: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#fff',

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

     // Shadow for Android
     elevation: 5,
    },

    resultText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    resultLocation: {
      fontSize: 14,
      color: '#888',
      marginTop: 4,
    },
    resultDescription: {
      fontSize: 14,
      color: '#666',
      marginTop: 4,
    },
    ratingText: {
      fontSize: 14,
      color: '#ff9500',
      marginTop: 4,
    },
    noResultsText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
      color: '#888',
    },
    resultsList: {
      paddingHorizontal: 10,
    },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalLocation: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: "#444",
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '90%',
    height: 200, 
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
    marginLeft: 68,
    marginRight: 68,

  },
  ratingContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  ratingStar: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,  // Make sure the alert appears above other elements
  },
  alertBox: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  alertText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // Container for the form
  formContainer: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#FF7F00', // Consistent with SearchButton color
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  // Search Bar Styles (for consistency)
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginLeft: 18,
    marginTop: 10,
    borderBottomColor: '#FFA500',
    borderBottomWidth: 2,
  },
  searchBar: {
    height: 40,
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    height: 40,
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  // scrollView: {
  //   flex: 1,
  //   padding: 10,  // Adjust the padding as needed
  // },
});

export default styles;
