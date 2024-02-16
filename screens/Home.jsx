import { View, ScrollView, StyleSheet } from "react-native";

// Import components
import SearchBar from "../components/SearchBar";
import CurrentTemp from "../components/CurrentTemp";
import CurrentHourly from "../components/CurrentHourly";
import WeekContainer from "../components/WeekContainer";
import Navbar from "../components/Navbar";

export default function Home({
  setZipCode,
  location,
  isLoading,
  currentWeather,
  hourlyWeather,
}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar setZipCode={setZipCode} />
        <CurrentTemp
          location={location}
          isLoading={isLoading}
          currentWeather={currentWeather}
        />
        <CurrentHourly hourlyWeather={hourlyWeather} />
        <WeekContainer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6EF",
  },
});
