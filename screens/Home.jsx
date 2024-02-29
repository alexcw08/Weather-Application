import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";

// Import components
import SearchBar from "../components/SearchBar";
import CurrentTemp from "../components/CurrentTemp";
import CurrentHourly from "../components/CurrentHourly";
import WeekContainer from "../components/WeekContainer";

export default function Home({
  setZipCode,
  location,
  isLoading,
  currentWeather,
  hourlyWeather,
}) {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="blue"
          style={{ position: "absolute", left: "50%", top: "50%" }}
        />
      ) : null}
      <>
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
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6EF",
  },
});
