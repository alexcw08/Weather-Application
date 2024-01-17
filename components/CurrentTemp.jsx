import { View, Text, StyleSheet } from "react-native";

export default function CurrentTemp() {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>Boston</Text>
      <Text style={styles.temperature}>24°</Text>
      <View style={styles.conditionContainer}>
        <Text style={styles.condition}>Snowing</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
  },
  cityName: {
    fontSize: 26,
    padding: 5,
  },
  temperature: {
    fontSize: 32,
    marginBottom: 15,
    padding: 5,
  },
  conditionContainer: {
    borderWidth: 1,
    borderRadius: 15,
  },
  condition: {
    fontSize: 16,
    padding: 7,
  },
});
