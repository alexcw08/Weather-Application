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
        <Text style={styles.hTemp}>{high}°</Text>
        <Text style={styles.lTemp}>{low}°</Text>
      </View>
      <Feather
        name={iconName}
        size={24}
        color="black"
        style={{ marginBottom: 10 }}
      />
      {/* <Text style={styles.condition}>{condition}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 4,
    fontSize: 18,
  },
  day: { width: "30%", fontSize: 16 },
  tempsContainer: {
    flexDirection: "row",
  },
  condition: { width: 50, marginRight: 10 },
  hTemp: { fontSize: 16 },
  lTemp: { fontSize: 16 },
});
