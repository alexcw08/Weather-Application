import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function CurrentTemp({ location, isLoading }) {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="small" color="blue" />
      ) : (
        <Text style={styles.cityName}>
          {location.city}, {location.state}
        </Text>
      )}
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
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: "#5B5F97",
  },
  condition: {
    fontSize: 18,
    padding: 12,
    color: "#FFFFEB",
  },
});
