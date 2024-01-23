import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function HourItem({ hour, condition, degrees }) {
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
      <Text style={styles.hour}>{hour}</Text>
      <Feather name={iconName} size={24} />
      <Text style={styles.degrees}>{degrees}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 6,
    padding: 14,
  },
  hour: {
    marginBottom: 10,
    fontSize: 14,
  },
  degrees: {
    fontSize: 18,
  },
});
