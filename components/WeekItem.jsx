import { View, Text, StyleSheet } from "react-native";
// icons for weather condition
import { Feather } from "@expo/vector-icons";
export default function WeekItem({ day, condition, high, low }) {
  let iconName;

  switch (condition) {
    case "sunny":
      iconName = "sun";
      break;
    case "cloudy":
      iconName = "cloud";
      break;
    case "rain":
      iconName = "cloud-rain";
      break;
    case "fog":
      iconName = "cloud";
      break;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>
      <View style={styles.tempsContainer}>
        <Text style={styles.hTemp}>H {high}°</Text>
        <Text style={styles.lTemp}>L {low}°</Text>
      </View>
      <Feather name={iconName} size={32} color="#FFFFEB" style={{}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginVertical: 4,
    fontSize: 18,
    backgroundColor: "#5B5F97",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  day: {
    width: "30%",
    fontSize: 18,
    color: "#FFFFEB",
  },
  tempsContainer: {
    flexDirection: "row",
  },

  hTemp: {
    fontSize: 18,
    color: "#FFFFEB",
    paddingRight: 12,
  },
  lTemp: {
    fontSize: 18,
    color: "#FFFFEB",
  },
});
