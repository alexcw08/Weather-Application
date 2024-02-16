export const formatDay = (unix) => {
  // take unix stamp and return formatted date
  const date = new Date(unix * 1000);
  let day = date.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day = dayNames[day];
  return day;
};

export const formatTime = (unix) => {
  // take unix stamp and return formatted time
  const date = new Date(unix * 1000);
  let meridiem = "";
  let hour = date.getHours();
  let minute = date.getMinutes();
  switch (true) {
    case hour == 0:
      meridiem = "AM";
      hour = 12;
      break;
    case hour < 12:
      meridiem = "AM";
      break;
    case hour > 12:
      meridiem = "PM";
      hour = hour % 12;
      break;
    case hour == 12:
      meridiem == "PM";
      break;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${hour}:${minute} ${meridiem}`;
};
