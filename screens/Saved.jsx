import { View, Text, StyleSheet } from "react-native";
// Import components
import Navbar from "../components/Navbar";

export default function Saved() {
  return (
    <View style={styles.container}>
      <Text>Saved Locations Screen</Text>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6EF",
  },
});
