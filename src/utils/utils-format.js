export const kelvinToCelsius = (value) => {
  return value - 273.15;
};

export const kelvinToFahrenheit = (value) => {
  return ((value - 273.15) * 9) / 5 + 32;
};

export const upperCaseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatMonth = (value) => {
  switch (value) {
    case 0:
      return "JAN";
    case 1:
      return "FEB";
    case 2:
      return "MAR";
    case 3:
      return "APR";
    case 4:
      return "MAY";
    case 5:
      return "JAN";
    case 6:
      return "JUL";
    case 7:
      return "AUG";
    case 8:
      return "SEP";
    case 9:
      return "OCT";
    case 10:
      return "NOV";
    case 11:
      return "DEC";
  }
};

export const formatDate = (value) => {
  return value < 10 ? `0${value}` : value;
};
