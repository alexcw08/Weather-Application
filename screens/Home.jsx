import { ScrollView } from "react-native";

// Import components
import SearchBar from "../components/SearchBar";
import CurrentTemp from "../components/CurrentTemp";
import CurrentHourly from "../components/CurrentHourly";
import WeekContainer from "../components/WeekContainer";

export default function Home({
  setZipCode,
  location,
  isLoading,
  currentWeather,
}) {
  return (
    <ScrollView style={{ marginBottom: 65 }}>
      <SearchBar setZipCode={setZipCode} />
      <CurrentTemp
        location={location}
        isLoading={isLoading}
        currentWeather={currentWeather}
      />
      <CurrentHourly />
      <WeekContainer />
    </ScrollView>
  );
}
