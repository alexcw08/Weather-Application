import { View, Text, StyleSheet } from "react-native";
import week from "../assets/sampleData.json";
import WeekItem from "./WeekItem";
export default function WeekContainer() {
  let weatherData = week.week;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>This Week</Text>
      </View>
      {weatherData.map((day, index) => (
        <WeekItem
          day={day.day}
          condition={day.weather.condition}
          high={day.weather.highTemperature}
          low={day.weather.lowTemperature}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginVertical: 12,
    width: "100%",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
  },
  header: {
    fontSize: 18,
    marginBottom: 12,
    paddingLeft: 14,
  },
});
