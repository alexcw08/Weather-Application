import { View, Text, StyleSheet } from "react-native";
// Import Components
import HourItem from "./HourItem";
export default function CurrentHourly() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Today</Text>
      </View>

      <View style={styles.hourlyContainer}>
        <HourItem hour={"09 AM"} degrees={"19"} />
        <HourItem hour={"10 AM"} degrees={"19"} />
        <HourItem hour={"11 AM"} degrees={"19"} />
        <HourItem hour={"12 PM"} degrees={"19"} />
        <HourItem hour={"01 PM"} degrees={"19"} />
        <HourItem hour={"02 PM"} degrees={"19"} />
      </View>
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
  },
});
