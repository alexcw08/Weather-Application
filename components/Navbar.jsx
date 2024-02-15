import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function Navbar() {
  return (
    <View style={styles.navContainer}>
      <View style={styles.itemContainer}>
        <Feather name="home" size={24} color="#454873" />
        <Text style={styles.iconText}>Home</Text>
      </View>
      <View style={styles.itemContainer}>
        <Feather name="heart" size={24} color="#454873" />
        <Text style={styles.iconText}>Saved</Text>
      </View>
      <View style={styles.itemContainer}>
        <Feather name="settings" size={24} color="#454873" />
        <Text style={styles.iconText}>Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    bottom: 0,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    borderTopWidth: 0.2,
    backgroundColor: "#E6E6EF",
  },
  itemContainer: {
    paddingTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    paddingTop: 4,
    color: "#2E304D",
  },
});
