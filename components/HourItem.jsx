import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function HourItem({ hour, degrees }) {
  return (
    <View style={styles.container}>
      <Text style={styles.hour}>{hour}</Text>
      <Feather
        name="sun"
        size={24}
        color="black"
        style={{ marginBottom: 10 }}
      />
      <Text style={styles.degrees}>{degrees}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  hour: {
    marginBottom: 10,
    fontSize: 14,
  },
  degrees: {
    fontSize: 18,
  },
});
