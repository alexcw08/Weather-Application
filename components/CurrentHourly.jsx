import { View, Text, ScrollView, StyleSheet } from "react-native";
// import test data
import hourly from "../assets/sampleData.json";
// Import Components
import HourItem from "./HourItem";
export default function CurrentHourly() {
  let weatherData = hourly.hourly;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Today</Text>
      </View>

      <ScrollView horizontal={true} style={styles.hourlyContainer}>
        {weatherData.map((hour, index) => (
          <HourItem
            key={index}
            hour={hour.hour}
            condition={hour.condition}
            degrees={hour.temperature}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  headerContainer: {
    width: "100%",
  },
  header: {
    fontSize: 18,
    marginBottom: 12,
    paddingLeft: 14,
  },
  hourlyContainer: {
    flexDirection: "row",
    paddingBottom: 20,
  },
});
