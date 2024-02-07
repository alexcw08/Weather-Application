import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Alert, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { ZIP_KEY } from "@env";
// Import components
import CurrentTemp from "./components/CurrentTemp";
import CurrentHourly from "./components/CurrentHourly";
import WeekContainer from "./components/WeekContainer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [zipCode, setZipCode] = useState();
  const [location, setLocation] = useState({
    city: "Boston",
    state: "MA",
    lat: "",
    long: "",
    zipCode: "",
  });
  const geoURL = `https://api.geocod.io/v1.7/geocode?postal_code=${zipCode}&api_key=${ZIP_KEY}`;

  const handleNewZip = async () => {
    // check if zipCode is not null
    if (zipCode != null) {
      // fetch coordinates for the zip code
      setIsLoading(true);
      const data = await fetchZip();
      if (data != undefined) {
        // update location state
        setLocation({
          city: data.address_components.city,
          state: data.address_components.state,
          lat: data.location.lat,
          long: data.location.lng,
          zipCode: zipCode,
        });
      }
      setIsLoading(false);
    }
  };

  const fetchZip = async () => {
    try {
      const res = await fetch(geoURL);
      const data = await res.json();
      // api responds with 200 OK even when no results for given zip
      if (data.results.length == 0) {
        Alert.alert("Error", `No results found for ZIP Code ${zipCode}`);
      } else {
        // console.log("returning:", data.results[0]);
        return data.results[0];
      }
    } catch (error) {
      Alert.alert("Fetch Error", `API Fetch Error: ${error}`);
    }
  };

  // fetch Coordinates from zip code when zip code changes
  useEffect(() => {
    handleNewZip();
  }, [zipCode]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginBottom: 65 }}>
        <SearchBar setZipCode={setZipCode} />
        <CurrentTemp location={location} isLoading={isLoading} />
        <CurrentHourly />
        <WeekContainer />
      </ScrollView>
      <Navbar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6EF",
  },
});
