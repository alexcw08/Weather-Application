import { View, Text, ScrollView, StyleSheet } from "react-native";
// Import Components
import HourItem from "./HourItem";
export default function CurrentHourly({ hourlyWeather }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Today</Text>
      </View>

      <ScrollView horizontal={true} style={styles.hourlyContainer}>
        {Array.isArray(hourlyWeather) &&
          hourlyWeather.map((hour, index) => (
            <HourItem
              key={index}
              stamp={hour.dt}
              condition={hour.weather[0].main}
              degrees={hour.temp}
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
    marginBottom: 0,
    paddingLeft: 14,
  },
  hourlyContainer: {
    flexDirection: "row",
    paddingBottom: 4,
  },
});
