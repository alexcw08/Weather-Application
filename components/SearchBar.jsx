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
          placeholderTextColor="#3D4166"
          value={userInput}
          onChangeText={(text) => setUserInput(text)}
          onSubmitEditing={handleSearch}
          style={{ width: "80%", padding: 12 }}
          maxLength={5}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            backgroundColor: "#5C6099",
            height: "100%",
            width: "20%",
            // borderRadius: 10,
            borderTopEndRadius: 10,
            borderBottomEndRadius: 10,
            padding: 12,
          }}
        >
          <FontAwesome5 name="search" size={18} color="white" />
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
  },
  inputBox: {
    width: "50%",
    backgroundColor: "#BFC1D9",
    flexDirection: "row",
    // padding: 12,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#E9ECEF",
    justifyContent: "space-between",
  },
});
