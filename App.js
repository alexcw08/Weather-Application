import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Alert } from "react-native";
import { useState, useEffect } from "react";
import { fetchZip, fetchWeather } from "./services/api";

import Onboard from "./screens/Onboard";
import Home from "./screens/Home";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [zipCode, setZipCode] = useState("01902");
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [location, setLocation] = useState({
    city: "Boston",
    state: "MA",
    lat: "42.36",
    long: "71.05",
    zipCode: "02108",
  });

  const handleNewZip = async () => {
    try {
      setIsLoading(true);
      // fetchzip throws error if no results are returned
      const zipData = await fetchZip(zipCode);
      setLocation({
        city: zipData.address_components.city,
        state: zipData.address_components.state,
        lat: zipData.location.lat,
        long: zipData.location.lng,
        zipCode: zipCode,
      });
    } catch (error) {
      Alert.alert("Error", `No results found for Zip Code ${zipCode}`);
    }
    setIsLoading(false);
  };

  const handleNewLocation = async () => {
    try {
      // call weather api - get back array of size 48, only need 13
      let weatherResults = await fetchWeather(location);
      weatherResults.slice(0, 13);
      setCurrentWeather(weatherResults[0]);
    } catch (error) {
      Alert.alert("Fetch Error", `Weather API Error`);
    }
  };

  // fetch Coordinates from zip code when zip code changes
  useEffect(() => {
    handleNewZip();
  }, [zipCode]);

  // fetch Weather when a new location is set
  useEffect(() => {
    handleNewLocation();
  }, [location]);

  return (
    <SafeAreaView style={styles.container}>
      {zipCode ? (
        <Home
          setZipCode={setZipCode}
          location={location}
          isLoading={isLoading}
          currentWeather={currentWeather}
        />
      ) : (
        <Onboard setZipCode={setZipCode} />
      )}
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
