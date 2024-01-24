import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { ZIP_KEY } from "@env";
// Import components

import CurrentTemp from "./components/CurrentTemp";
import CurrentHourly from "./components/CurrentHourly";
import WeekContainer from "./components/WeekContainer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
export default function App() {
  const [zipCode, setZipCode] = useState();
  const geoURL = `https://api.geocod.io/v1.7/geocode?postal_code=${zipCode}&api_key=${ZIP_KEY}`;
  const fetchZip = async () => {
    const api = await fetch(geoURL);
    const data = await api.json();
    console.log(data);
  };
  // fetch Coordinates from zip code when zip code changes
  useEffect(() => {
    fetchZip();
  }, zipCode);
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar setZipCode={setZipCode} />
      <CurrentTemp />
      <CurrentHourly />
      <WeekContainer />
      <Navbar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    // alignItems: "center",
    // justifyContent: "space-evenly",
  },
});
