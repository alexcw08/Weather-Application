export const getIconName = (condition) => {
  switch (condition) {
    case "Clear":
      iconName = "sun";
      break;
    case "Clouds":
      iconName = "cloud";
      break;
    case "Rain":
      iconName = "cloud-rain";
      break;
    case "Fog":
      iconName = "cloud";
      break;
    case "Snow":
      iconName = "cloud-snow";
      break;
  }
  return iconName;
};
