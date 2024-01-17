import { View, Text, StyleSheet } from "react-native";

export default function WeekItem({ day, condition, high, low }) {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>
      <Text>{condition}</Text>
      <Text>{high}</Text>
      <Text>{low}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    flexDirection: "row",
  },
  day: {},

  hour: {},
  degrees: {},
});
