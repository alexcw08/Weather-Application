import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useState } from "react";
// Import components

import CurrentTemp from "./components/CurrentTemp";
import CurrentHourly from "./components/CurrentHourly";
import WeekContainer from "./components/WeekContainer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
export default function App() {
  const [zipCode, setZipCode] = useState();
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
