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
      <Feather name={iconName} size={24} color={"#FFFFEB"} />
      <Text style={styles.degrees}>{degrees}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5B5F97",
    alignItems: "center",
    marginHorizontal: 6,
    padding: 14,
    borderRadius: 6,
    marginVertical: 12,
  },
  hour: {
    marginBottom: 10,
    fontSize: 16,
    color: "#FFFFEB",
  },
  degrees: {
    paddingTop: 12,
    fontSize: 18,
    color: "#FFFFEB",
  },
});
