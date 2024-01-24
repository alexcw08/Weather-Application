import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SearchBar({ setZipCode }) {
  // state for user entered zip code
  const [userInput, setUserInput] = useState("");
  const handleSearch = () => {
    // check for a valid zip code - regex to check all are digits
    if (userInput.length == 5 && /^\d+$/.test(userInput)) {
      setZipCode(userInput);
      setUserInput("");
    } else if (userInput.length != 0) {
      Alert.alert("Invalid ZIP Code", "Please enter a 5 digit ZIP Code.");
      setZipCode();
      setUserInput("");
    } else {
      Alert.alert("Invalid ZIP Code", "Please enter a 5 digit ZIP Code.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          placeholder="Search by Zip Code"
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
          onSubmitEditing={handleSearch}
          style={{ width: "80%" }}
          maxLength={5}
        />
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome5 name="search" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "yellow",
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
