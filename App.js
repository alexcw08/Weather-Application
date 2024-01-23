import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// Import components
import CurrentTemp from "./components/CurrentTemp";
import CurrentHourly from "./components/CurrentHourly";
import WeekContainer from "./components/WeekContainer";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <View style={styles.container}>
      <CurrentTemp />
      <CurrentHourly />
      <WeekContainer />
      <Navbar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});
