import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput placeholder="Search by Zip Code" />
        <FontAwesome5 name="search" size={18} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingLeft: 12,
  },
  inputBox: {
    width: "45%",
    backgroundColor: "#DEE2E6",
    flexDirection: "row",
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E9ECEF",
    justifyContent: "space-between",
  },
});
