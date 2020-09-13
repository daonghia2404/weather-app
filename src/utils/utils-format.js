import IconDayCloudLightning from "assets/icons/day/icon-cloud-lightning.png";
import IconDayCloudRain from "assets/icons/day/icon-cloud-rain.png";
import IconDayCloudSnows from "assets/icons/day/icon-cloud-snows.png";
import IconDayCloud from "assets/icons/day/icon-cloud.png";
import IconDayClouds from "assets/icons/day/icon-clouds.png";
import IconDaySnow from "assets/icons/day/icon-snow.png";
import IconDaySunCloudRain from "assets/icons/day/icon-sun-cloud-rains.png";
import IconDaySunCloud from "assets/icons/day/icon-sun-cloud.png";
import IconDaySun from "assets/icons/day/icon-sun.png";
import IconDayAlmostphere from "assets/icons/day/icon-almosphere.png";

import IconNightCloudLightning from "assets/icons/night/icon-cloud-lightning.png";
import IconNightCloudRain from "assets/icons/night/icon-cloud-rain.png";
import IconNightCloudSnows from "assets/icons/night/icon-cloud-snows.png";
import IconNightCloud from "assets/icons/night/icon-cloud.png";
import IconNightClouds from "assets/icons/night/icon-clouds.png";
import IconNightSnow from "assets/icons/night/icon-snow.png";
import IconNightSunCloudRain from "assets/icons/night/icon-sun-cloud-rains.png";
import IconNightSunCloud from "assets/icons/night/icon-sun-cloud.png";
import IconNightSun from "assets/icons/night/icon-sun.png";
import IconNightAlmostphere from "assets/icons/night/icon-almosphere.png";

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
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JAN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return months[value];
};

export const formatDate = (value) => {
  return value < 10 ? `0${value}` : value;
};

export const unixToTime = (value) => {
  const a = new Date(value * 1000);
  const year = a.getFullYear();
  const month = formatMonth(a.getMonth());
  const date = formatDate(a.getDate());
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  return {
    year,
    month,
    date,
    hour,
    min,
    sec,
  };
};

export const formatStatusWeather = (id, time) => {
  if (id < 233 && id > 199)
    return time ? IconDayCloudLightning : IconNightCloudLightning;
  if (id < 322 && id > 299) return time ? IconDayCloudRain : IconNightCloudRain;
  if (id < 511 && id > 499)
    return time ? IconDaySunCloudRain : IconNightSunCloudRain;
  if (id === 511) return time ? IconDayCloudSnows : IconNightCloudSnows;
  if (id < 532 && id > 519) return time ? IconDayCloudRain : IconNightCloudRain;
  if (id < 623 && id > 599) return time ? IconDaySnow : IconNightSnow;
  if (id < 782 && id > 700)
    return time ? IconDayAlmostphere : IconNightAlmostphere;
  if (id === 800) return time ? IconDaySun : IconNightSun;
  if (id === 801) return time ? IconDaySunCloud : IconNightSunCloud;
  if (id === 802) return time ? IconDayCloud : IconNightCloud;
  if (id === 803 || id === 804) return time ? IconDayClouds : IconNightClouds;
};
