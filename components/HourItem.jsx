import { View, Text, StyleSheet } from "react-native";
import { formatTime } from "../utils/dateUtils";
import { getIconName } from "../utils/conditionUtils";
import { Feather } from "@expo/vector-icons";
export default function HourItem({ stamp, condition, degrees }) {
  // console.log(stamp, condition, degrees);
  const hour = formatTime(stamp);
  const iconName = getIconName(condition);

  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{hour}</Text>
      <Feather name={iconName} size={24} color={"#FFFFEB"} />
      <Text style={styles.degrees}>{Math.round(degrees)}°</Text>
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
