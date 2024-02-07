import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Alert, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { ZIP_KEY, WEATHER_KEY } from "@env";
// Import components
import CurrentTemp from "./components/CurrentTemp";
import CurrentHourly from "./components/CurrentHourly";
import WeekContainer from "./components/WeekContainer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Onboard from "./screens/Onboard";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [zipCode, setZipCode] = useState();
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [location, setLocation] = useState({
    city: "Boston",
    state: "MA",
    lat: "42.36",
    long: "71.05",
    zipCode: "02108",
  });
  const geoURL = `https://api.geocod.io/v1.7/geocode?postal_code=${zipCode}&api_key=${ZIP_KEY}`;
  const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.long}&exclude=alerts,minutely&units=imperial&appid=${WEATHER_KEY}`;

  console.log(currentWeather);
  const handleNewZip = async () => {
    // check if zipCode is not null
    if (zipCode != null) {
      // fetch coordinates for the zip code
      setIsLoading(true);
      const zipData = await fetchZip();
      // zip code was valid and we got results
      if (zipData != undefined) {
        setLocation({
          city: zipData.address_components.city,
          state: zipData.address_components.state,
          lat: zipData.location.lat,
          long: zipData.location.lng,
          zipCode: zipCode,
        });
      }
      setIsLoading(false);
    }
  };

  const handleNewLocation = async () => {
    // call weather api - get back array of size 48, only need 13
    let weatherResults = await fetchWeather();
    weatherResults.slice(0, 13);
    setCurrentWeather(weatherResults[0]);
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
      Alert.alert("Fetch Error", `Geocod API Error: ${error}`);
    }
  };

  const fetchWeather = async () => {
    try {
      const api = await fetch(weatherURL);
      const data = await api.json();
      return data.hourly;
      // console.log(JSON.stringify(data.hourly, null, 0));
    } catch (error) {
      Alert.alert("Fetch Error", `Weather API Error: ${error}`);
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
      <ScrollView style={{ marginBottom: 65 }}>
        <SearchBar setZipCode={setZipCode} />
        <CurrentTemp
          location={location}
          isLoading={isLoading}
          currentWeather={currentWeather}
        />
        <CurrentHourly />
        <WeekContainer />
      </ScrollView>
      <Navbar />
      <StatusBar style="auto" />
      {/* <Onboard /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6EF",
  },
});
