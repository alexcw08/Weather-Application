import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
export default function Onboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Welcome 👋{"\n"}Enter a{" "}
        <Text style={styles.highlightedText}>Zip Code</Text> to begin
      </Text>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6EF",
    marginTop: "40%",
    marginBottom: "25%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: "15%",
  },
  highlightedText: {
    color: "#5C6099",
  },
});
