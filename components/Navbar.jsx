import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function Navbar() {
  return (
    <View style={styles.navContainer}>
      <View style={styles.itemContainer}>
        <Feather name="home" size={24} color="black" />
        <Text>Home</Text>
      </View>
      <View style={styles.itemContainer}>
        <Feather name="heart" size={24} color="black" />
        <Text>Saved</Text>
      </View>
      <View style={styles.itemContainer}>
        <Feather name="settings" size={24} color="black" />
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
    paddingBottom: 30,
    flexDirection: "row",
    backgroundColor: "pink",
    justifyContent: "space-evenly",
    width: "100%",
    borderTopWidth: 0.2,
  },
  itemContainer: {
    paddingTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    paddingTop: 4,
  },
});
