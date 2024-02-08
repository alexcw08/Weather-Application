import { ZIP_KEY, WEATHER_KEY } from "@env";

export const fetchZip = async (zipCode) => {
  const geoURL = `https://api.geocod.io/v1.7/geocode?postal_code=${zipCode}&api_key=${ZIP_KEY}`;
  try {
    const res = await fetch(geoURL);
    const data = await res.json();
    // api responds with 200 OK even when no results for given zip
    if (data.results.length == 0) {
      throw new Error(`No results found`);
    } else {
      return data.results[0];
    }
  } catch (error) {
    throw new Error("Geocod API Error");
  }
};

export const fetchWeather = async (location) => {
  const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.long}&exclude=alerts,minutely&units=imperial&appid=${WEATHER_KEY}`;
  try {
    const api = await fetch(weatherURL);
    const data = await api.json();
    return data.hourly;
  } catch (error) {
    throw new Error("Weather API Error");
  }
};
