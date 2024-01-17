import { View, StyleSheet } from "react-native";
import week from "../assets/sampleData.json";
import WeekItem from "./WeekItem";
export default function WeekContainer() {
  weatherData = week.week;
  return (
    <View style={styles.container}>
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
    width: "90%",
    // backgroundColor: "yellow",
  },
});
