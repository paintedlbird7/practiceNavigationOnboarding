import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import { tacoTruckData } from './(tabs)/data'; // Correct import path

const tacoTruckData = [
  {
    facility_id: "FA0256184",
    facility_name: "CMFO - PALETERIA 3 HERMANOS #1",
    program_description:
      "A popular food cart offering a variety of traditional Mexican paletas and refreshing cold treats in the heart of the city.",
    zip: "95126",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.32255761,
    longitude: -121.9106322,
  },
  {
    facility_id: "FA0304382",
    facility_name: "PALETERIA CHIVE",
    program_description:
      "Famous for its handmade paletas and Mexican street snacks, this food cart provides fresh flavors daily.",
    zip: "95126",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.32255761,
    longitude: -121.9106322,
  },
  {
    facility_id: "FA0259911",
    facility_name: "CMFO - PALETERIA EL RINCON #10",
    program_description:
      "A family-owned cart specializing in a wide range of paletas and ice creams, bringing a taste of Mexico.",
    zip: "95126",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.32255761,
    longitude: -121.9106322,
  },
  {
    facility_id: "FA0299894",
    facility_name: "PALETERIA AMIGO",
    program_description:
      "Known for unique paleta flavors and classic Mexican desserts, a local favorite for refreshing treats.",
    zip: "95126",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.32255761,
    longitude: -121.9106322,
  },
  {
    facility_id: "FA0287662",
    facility_name: "PALETERIA DON OLE #1",
    program_description:
      "A go-to spot for delicious paletas and cold snacks, serving authentic flavors and vibrant options.",
    zip: "95126",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.32255761,
    longitude: -121.9106322,
  },
  {
    facility_id: "FA0270205",
    facility_name: "PALETERIA JORGE #1",
    program_description:
      "This cart offers traditional Mexican paletas and frozen desserts, loved by locals for its friendly service.",
    zip: "95126",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.32255761,
    longitude: -121.9106322,
  },
  {
    facility_id: "FA0260697",
    facility_name: "PALETERIA SAN JOSE #1",
    program_description:
      "Serving a mix of authentic paletas and ice creams, a must-visit for cooling off on hot days.",
    zip: "95126",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.32255761,
    longitude: -121.9106322,
  },
  {
    facility_id: "FA0277796",
    facility_name: "PALETERIA EL RINCON 79648T1",
    program_description:
      "A vibrant cart featuring Mexican paletas and unique frozen treats, adding a burst of flavor to the neighborhood.",
    zip: "95116",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.34362367,
    longitude: -121.8641312,
  },
  {
    facility_id: "FA0294277",
    facility_name: "PALETERIA RAMIREZ",
    program_description:
      "Offers a wide range of paletas and refreshing snacks, perfect for a quick break from the heat.",
    zip: "95116",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.34362367,
    longitude: -121.8641312,
  },
  {
    facility_id: "FA0303553",
    facility_name: "VANESSA'S HOT DOG 8U59761",
    program_description:
      "A local favorite for classic hot dogs with a Mexican twist, known for fresh toppings and tasty combos.",
    zip: "95112",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.36096676,
    longitude: -121.8992403,
  },
  {
    facility_id: "FA0306914",
    facility_name: "CHURROS LAND",
    program_description:
      "This cart serves up hot, crispy churros with a variety of sweet fillings and dipping sauces.",
    zip: "95113",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.36839039,
    longitude: -121.8790957,
  },
  {
    facility_id: "FA0266375",
    facility_name: "CHURROS EL GUERO 4NX1751",
    program_description:
      "Known for authentic churros with a soft, fluffy center and crispy exterior, a must-try for churro fans.",
    zip: "95112",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.37476424,
    longitude: -121.9091645,
  },
  {
    facility_id: "FA0307208",
    facility_name: "OLIMPOS CHURROS # 2 4EP5650",
    program_description:
      "Delicious churros with a range of filling options, perfect for a quick and sweet snack on the go.",
    zip: "95112",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.32127868,
    longitude: -121.8623648,
  },
  {
    facility_id: "FA0306914",
    facility_name: "CHURROS LAND",
    program_description:
      "Specializing in crispy churros with unique filling options, this cart is popular for its tasty desserts.",
    zip: "95113",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.36839039,
    longitude: -121.8790957,
  },

  {
    facility_id: "1",
    FACILITY_NAME: "Tacos Los Tres Reyes",
    PROGRAM_DESCRIPTION: "Popular for authentic Mexican street tacos.",
    ZIP: "95122",
    image: require("../app/assets/images/taco1.jpg"),
    latitude: 37.34908,
    longitude: -121.829437,
  },
  {
    facility_id: "2",
    FACILITY_NAME: "La Oaxaquense Food Truck",
    PROGRAM_DESCRIPTION:
      "Known for their delicious carne asada and al pastor tacos.",
    ZIP: "95116",
    image: require("../app/assets/images/taco2.jpg"),
    latitude: 37.378892,
    longitude: 121.867202,
  },
  {
    facility_id: "3",
    FACILITY_NAME: "Orale Taco Truck",
    PROGRAM_DESCRIPTION: "Famous for crispy tacos and fresh ingredients.",
    ZIP: "95116",
    image: require("../app/assets/images/taco3.jpg"),
    latitude: 37.389258,
    longitude: -121.844543,
  },
  {
    facility_id: "4",
    FACILITY_NAME: "El Señor De Los Tacos Food Truck",
    PROGRAM_DESCRIPTION: "Serving amazing birria tacos and quesadillas.",
    ZIP: "95127",
    image: require("../app/assets/images/taco4.jpg"),
    latitude: 37.357079,
    longitude: -121.825904,
  },
  {
    facility_id: "5",
    FACILITY_NAME: "Tacos Chencho",
    PROGRAM_DESCRIPTION: "Great for fish tacos and unique flavors.",
    ZIP: "95127",
    image: require("../app/assets/images/taco5.jpg"),
    latitude: 37.362264,
    longitude: -121.819381,
  },
  {
    facility_id: "6",
    FACILITY_NAME: "Tacos Huandacareo Food Truck",
    PROGRAM_DESCRIPTION: "A local favorite with authentic flavors.",
    ZIP: "95127",
    image: require("../app/assets/images/taco6.jpg"),
    latitude: 37.359126,
    longitude: -121.827793,
  },
  {
    facility_id: "7",
    FACILITY_NAME: "Tacos Montero Food Truck",
    PROGRAM_DESCRIPTION: "Known for their giant tacos and amazing sauces.",
    ZIP: "95122",
    image: require("../app/assets/images/taco7.jpg"),
    latitude: 37.339885,
    longitude: -121.853027,
  },
  {
    facility_id: "8",
    FACILITY_NAME: "Hugos Tacos Food Truck",
    PROGRAM_DESCRIPTION: "Specializes in tacos de lengua and tripa.",
    ZIP: "95122",
    image: require("../app/assets/images/taco8.jpg"),
    latitude: 37.321594,
    longitude: -121.883,
  },
  {
    facility_id: "9",
    FACILITY_NAME: "Taqueria Paracuaro",
    PROGRAM_DESCRIPTION:
      "A family-owned taqueria known for authentic Michoacán-style tacos and fresh salsas.",
    ZIP: "95113",
    image: require("../app/assets/images/taco9.jpg"),
    latitude: 37.356432493707636,
    longitude: -121.88825403550148,
  },
  {
    facility_id: "10",
    FACILITY_NAME: "Tortilleria La Familiar",
    PROGRAM_DESCRIPTION:
      "Offers fresh, handmade tortillas and traditional Mexican dishes.",
    ZIP: "95127",
    image: require("../app/assets/images/taco10.jpg"),
    latitude: 37.359174,
    longitude: -121.821133,
  },
  {
    facility_id: "11",
    FACILITY_NAME: "Tacos Mi Reynita",
    PROGRAM_DESCRIPTION:
      "Famous for authentic Tijuana-style street tacos with fresh salsas.",
    ZIP: "94603",
    image: require("../app/assets/images/taco11.jpg"),
    latitude: 37.738624,
    longitude: -122.166524,
  },
  {
    facility_id: "12",
    FACILITY_NAME: "Tacos Santiaguito",
    PROGRAM_DESCRIPTION:
      "Known for its rich, slow-cooked meats and flavorful toppings.",
    ZIP: "95129",
    image: require("../app/assets/images/taco12.jpg"),
    latitude: 37.322381,
    longitude: -121.970633,
  },
  {
    facility_id: "13",
    FACILITY_NAME: "Tacos El Plebe",
    PROGRAM_DESCRIPTION:
      "Specializes in street tacos with a variety of fillings including carne asada and al pastor.",
    ZIP: "95112",
    image: require("../app/assets/images/taco13.jpg"),
    latitude: 37.327337,
    longitude: -121.820249,
  },
  {
    facility_id: "14",
    FACILITY_NAME: "Rosario's Tacos",
    PROGRAM_DESCRIPTION:
      "Authentic Mexican tacos with homemade tortillas and fresh ingredients.",
    ZIP: "95110",
    image: require("../app/assets/images/taco14.jpg"),
    latitude: 37.321136,
    longitude: -121.884015,
  },
  {
    facility_id: "15",
    FACILITY_NAME: "Mariscos y Tacos Los Compas",
    PROGRAM_DESCRIPTION: "Seafood tacos and delicious salsas.",
    ZIP: "95122",
    image: require("../app/assets/images/taco15.jpg"),
    latitude: 37.341984,
    longitude: -121.842094,
  },
  {
    facility_id: "16",
    FACILITY_NAME: "Spartan Taco",
    PROGRAM_DESCRIPTION:
      "A popular spot for students with a wide range of tacos.",
    ZIP: "95112",
    image: require("../app/assets/images/taco16.jpg"),
    latitude: 37.338529,
    longitude: -121.850009,
  },
  {
    facility_id: "17",
    FACILITY_NAME: "Tustacos Taqueria",
    PROGRAM_DESCRIPTION: "Known for its variety of tacos and quick service.",
    ZIP: "95008",
    image: require("../app/assets/images/taco17.jpg"),
    latitude: 37.28799,
    longitude: -121.97499,
  },
  {
    facility_id: "18",
    FACILITY_NAME: "Taco De Oro Taco Truck",
    PROGRAM_DESCRIPTION: "Well-loved for golden tacos and delicious fillings.",
    ZIP: "94089",
    image: require("../app/assets/images/taco18.jpg"),
    latitude: 37.406231,
    longitude: -121.996075,
  },
  {
    facility_id: "19",
    FACILITY_NAME: "Famosa Taqueria",
    PROGRAM_DESCRIPTION: "A family-run taqueria with authentic flavors.",
    ZIP: "95112",
    image: require("../app/assets/images/taco19.jpg"),
    latitude: 37.32302,
    longitude: -121.872353,
  },
  {
    facility_id: "20",
    FACILITY_NAME: "Taco Genesis",
    PROGRAM_DESCRIPTION: "Great for late-night tacos with spicy sauces.",
    ZIP: "95127",
    image: require("../app/assets/images/taco20.jpg"),
    latitude: 37.353422,
    longitude: -121.822666,
  },
  {
    facility_id: "21",
    FACILITY_NAME: "Tacos La Poderosa",
    PROGRAM_DESCRIPTION: "Great for late-night tacos with spicy sauces.",
    ZIP: "95127",
    image: require("../app/assets/images/taco21.jpg"),
    latitude: 37.35272,
    longitude: -121.88134,
  },
  {
    facility_id: "FA0230702",
    FACILITY_NAME: "Tacos Al Pastor",
    PROGRAM_DESCRIPTION:
      "Offering full food preparation with a focus on tacos al pastor.",
    ZIP: "95112",
    image: require("../app/assets/images/FINAL-chicken-street-tacos-1-6.jpg"),
    latitude: 37.28979392566415,
    longitude: -121.84725744655906,
  },
  {
    facility_id: "FA0206777",
    FACILITY_NAME: "La Chaparra",
    PROGRAM_DESCRIPTION:
      "Providing full food preparation, offering a variety of traditional Mexican foods.",
    ZIP: "95112",
    image: require("../app/assets/images/tacos-7759107_1280.jpg"),
    latitude: 37.37183587143934,
    longitude: -121.90498427553995,
  },
  {
    facility_id: "FA0240521",
    FACILITY_NAME: "Tacos Los 3 Hermanos",
    PROGRAM_DESCRIPTION:
      "Specializing in full food preparation of Mexican cuisine.",
    ZIP: "95110",
    image: require("../app/assets/images/download (6).jpeg"),
    latitude: 37.32029286320422,
    longitude: -121.88204360657782,
  },
  {
    facility_id: "FA0250170",
    FACILITY_NAME: "Dulce Victoria American and Mexican Food",
    PROGRAM_DESCRIPTION:
      "Offering full food preparation of both American and Mexican dishes.",
    ZIP: "95112",
    image: require("../app/assets/images/images (51).jpeg"),
    latitude: 37.36916930527029,
    longitude: -121.89669491790453,
  },
  {
    facility_id: "FA0250247",
    FACILITY_NAME: "MC FOOD INC.",
    PROGRAM_DESCRIPTION:
      "Serving a variety of delicious tacos with fresh ingredients.",
    ZIP: "95127",
    image: require("../app/assets/images/download (5).jpeg"),
    latitude: 37.36930758491914,
    longitude: -121.83176009091908,
  },
  {
    facility_id: "FA0250748",
    FACILITY_NAME: "CALIFORNIA DRIVEN",
    PROGRAM_DESCRIPTION: "Known for their flavorful Mexican grill specialties.",
    ZIP: "95112",
    image: require("../app/assets/images/images (53).jpeg"),
    latitude: 37.35844085754493,
    longitude: -121.89057064674095,
  },
  {
    facility_id: "FA0251878",
    FACILITY_NAME: "SABOR MEXICO",
    PROGRAM_DESCRIPTION: "Popular for their authentic street tacos and salsas.",
    ZIP: "95112",
    image: require("../app/assets/images/images (1).jpeg"),
    latitude: 37.37158867895564,
    longitude: -121.90487696208325,
  },
  {
    facility_id: "FA0256183",
    FACILITY_NAME: "SABOR CASERO INTERNACIONAL",
    PROGRAM_DESCRIPTION:
      "Serving a variety of delicious tacos with fresh ingredients.",
    ZIP: "95112",
    image: require("../app/assets/images/images (2).jpeg"),
    latitude: 37.369186358566935,
    longitude: -121.89674856208327,
  },
  {
    facility_id: "FA0257608",
    FACILITY_NAME: "FELIPE EL KORA",
    PROGRAM_DESCRIPTION:
      "Serving a variety of delicious tacos with fresh ingredients.",
    ZIP: "95116",
    image: require("../app/assets/images/images (3).jpeg"),
    latitude: 37.353974810195524,
    longitude: -121.85443471975579,
  },
  {
    facility_id: "FA0260275",
    FACILITY_NAME: "ROSARIOS TACOS",
    PROGRAM_DESCRIPTION: "Known for their flavorful Mexican grill specialties.",
    ZIP: "95110",
    image: require("../app/assets/images/images (8).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0260459",
    FACILITY_NAME: "LA JACARANDA OAXAQUENA",
    PROGRAM_DESCRIPTION: "Popular for their authentic street tacos and salsas.",
    ZIP: "95112",
    image: require("../app/assets/images/images (9).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0261182",
    FACILITY_NAME: "EL PAISA ARAUJOS TAQUERIA",
    PROGRAM_DESCRIPTION:
      "Serving a variety of delicious tacos with fresh ingredients.",
    ZIP: "95111",
    image: require("../app/assets/images/images (10).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0262597",
    FACILITY_NAME: "GUTIERREZ AUTENTICA COMIDA MEXICANA",
    PROGRAM_DESCRIPTION: "Known for their flavorful Mexican grill specialties.",
    ZIP: "95112",
    image: require("../app/assets/images/images (11).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0274726",
    FACILITY_NAME: "TACOS SOLECITA",
    PROGRAM_DESCRIPTION: "Popular for their authentic street tacos and salsas.",
    ZIP: "95112",
    image: require("../app/assets/images/images (12).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0274884",
    FACILITY_NAME: "MENDEZ TAQUERIA",
    PROGRAM_DESCRIPTION:
      "Serving a variety of delicious tacos with fresh ingredients.",
    ZIP: "95112",
    image: require("../app/assets/images/images (13).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0274993",
    FACILITY_NAME: "CUNAO'S FOOD TRUCK",
    PROGRAM_DESCRIPTION: "Known for their flavorful Mexican grill specialties.",
    ZIP: "95035",
    image: require("../app/assets/images/images (14).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0276126",
    FACILITY_NAME: "EL TACOLOCO",
    PROGRAM_DESCRIPTION: "Popular for their authentic street tacos and salsas.",
    ZIP: "95112",
    image: require("../app/assets/images/images (15).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0276130",
    FACILITY_NAME: "LA ESTRELLITA TAQUERIA",
    PROGRAM_DESCRIPTION:
      "Serving a variety of delicious tacos with fresh ingredients.",
    ZIP: "95112",
    image: require("../app/assets/images/images (16).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0276258",
    FACILITY_NAME: "TACOS LA FAMILIA",
    PROGRAM_DESCRIPTION: "Known for their flavorful Mexican grill specialties.",
    ZIP: "95054",
    image: require("../app/assets/images/images (17).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0276750",
    FACILITY_NAME: "LA AZTECA TAQUERIA",
    PROGRAM_DESCRIPTION: "Popular for their authentic street tacos and salsas.",
    ZIP: "95050",
    image: require("../app/assets/images/images (18).jpeg"),
    latitude: 37.3382,
    longitude: -121.8863,
  },
  {
    facility_id: "FA0276834",
    FACILITY_NAME: "TLAXIACO'S PIZZA",
    PROGRAM_DESCRIPTION:
      "Serving a variety of delicious tacos with fresh ingredients.",
    ZIP: "95112",
    image: require("../app/assets/images/images (20).jpeg"),
    latitude: 37.36101792740333,
    longitude: -121.89919733324808,
  },
  {
    facility_id: "FA0276902",
    FACILITY_NAME: "EL CAMINANTE AKA SPARTAN TACO TRUCK",
    PROGRAM_DESCRIPTION: "Known for their flavorful Mexican grill specialties.",
    ZIP: "95123",
    image: require("../app/assets/images/images (21).jpeg"),
    latitude: 37.249664158223226,
    longitude: -121.86918364674713,
  },
  {
    facility_id: "FA0277474",
    FACILITY_NAME: "BIRRIA TACOS Y ANTOJITOS ESTILO JALISCO",
    PROGRAM_DESCRIPTION: "Popular for their authentic street tacos and salsas.",
    ZIP: "95122",
    image: require("../app/assets/images/images (20).jpeg"),
    latitude: 37.344606778939024,
    longitude: -121.83842301975633,
  },
  {
    facility_id: "FA0277483",
    FACILITY_NAME: "ANTOJITOS PANZAS VERDES",
    PROGRAM_DESCRIPTION:
      "Serving a variety of delicious tacos with fresh ingredients.",
    ZIP: "95112",
    image: require("../app/assets/images/images (21).jpeg"),
    latitude: 37.360941179183264,
    longitude: -121.8991758755766,
  },

  {
    facility_id: "FA0258947",
    FACILITY_NAME: "LAS GRULLAS MEXICAN GRILL",
    PROGRAM_DESCRIPTION: "Known for their flavorful Mexican grill specialties.",
    ZIP: "95002",
    image: require("../app/assets/images/images (4).jpeg"),
    latitude: 37.42623545617837,
    longitude: -(-121.97393311975154),
  },
  {
    facility_id: "FA0259010",
    FACILITY_NAME: "TACOS LA ESTRELLA",
    PROGRAM_DESCRIPTION: "Popular for their authentic street tacos and salsas.",
    ZIP: "95116",
    image: require("../app/assets/images/images (5).jpeg"),
    latitude: 37.35249645742024,
    longitude: -121.86850166208431,
  },

  {
    facility_id: "FA0277942",
    FACILITY_NAME: "CHULA PUEBLA",
    PROGRAM_DESCRIPTION: "Serving delicious Puebla-style tacos.",
    ZIP: "95112",
    image: require("../app/assets/images/images (23).jpeg"),
    latitude: 37.371639837184134,
    longitude: -121.90489841975477,
  },

  {
    facility_id: "FA0210443",
    FACILITY_NAME: "NENA'S TACOS",
    PROGRAM_DESCRIPTION: "Providing fresh, full food preparation on-site.",
    ZIP: "95112",
    image: require("../app/assets/images/images (47).jpeg"),
    latitude: 37.361196934321235,
    longitude: -121.8992510025295,
  },
];
console.log(tacoTruckData.length);

const TruckMap = () => {
  // console.log(tacoTruckData); // Debugging line to verify if the data is loaded

  // Check if tacoTruckData exists and is not empty
  if (!tacoTruckData || tacoTruckData.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No taco trucks available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.3349,
          longitude: -121.8907,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {tacoTruckData.map((truck) => (
          <Marker
            key={truck.facility_id}
            coordinate={{
              latitude: truck.latitude,
              longitude: truck.longitude,
            }}
            title={truck.FACILITY_NAME}
            description={truck.PROGRAM_DESCRIPTION}
          >
            <View style={styles.markerContainer}>
              <Image source={truck.image} style={styles.truckImage} />
              <Text style={styles.truckName}>{truck.FACILITY_NAME}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerContainer: {
    alignItems: "center",
    padding: 5,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  truckImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  truckName: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TruckMap;
