import React from "react";
import "./index.scss";
import classNames from "classnames";

import IconDayCloudLightning from "assets/icons/day/icon-cloud-lightning.png";
import IconDayCloudRain from "assets/icons/day/icon-cloud-rain.png";
import IconDayCloudRains from "assets/icons/day/icon-cloud-rains.png";
import IconDayCloudSnows from "assets/icons/day/icon-cloud-snows.png";
import IconDayCloud from "assets/icons/day/icon-cloud.png";
import IconDayClouds from "assets/icons/day/icon-clouds.png";
import IconDayLightning from "assets/icons/day/icon-lightning.png";
import IconDaySnow from "assets/icons/day/icon-snow.png";
import IconDaySunCloudLightning from "assets/icons/day/icon-sun-cloud-lightning.png";
import IconDaySunCloudRains from "assets/icons/day/icon-sun-cloud-rain.png";
import IconDaySunCloudRain from "assets/icons/day/icon-sun-cloud-rains.png";
import IconDaySunCloud from "assets/icons/day/icon-sun-cloud.png";
import IconDaySun from "assets/icons/day/icon-sun.png";

import IconNightCloudLightning from "assets/icons/night/icon-cloud-lightning.png";
import IconNightCloudRain from "assets/icons/night/icon-cloud-rain.png";
import IconNightCloudRains from "assets/icons/night/icon-cloud-rains.png";
import IconNightCloudSnows from "assets/icons/night/icon-cloud-snows.png";
import IconNightCloud from "assets/icons/night/icon-cloud.png";
import IconNightClouds from "assets/icons/night/icon-clouds.png";
import IconNightLightning from "assets/icons/night/icon-lightning.png";
import IconNightSnow from "assets/icons/night/icon-snow.png";
import IconNightSunCloudLightning from "assets/icons/night/icon-sun-cloud-lightning.png";
import IconNightSunCloudRains from "assets/icons/night/icon-sun-cloud-rain.png";
import IconNightSunCloudRain from "assets/icons/night/icon-sun-cloud-rains.png";
import IconNightSunCloud from "assets/icons/night/icon-sun-cloud.png";
import IconNightSun from "assets/icons/night/icon-sun.png";

export const PreviewDay = ({ time }) => {
  const previewDays = [
    {
      day: "Monday",
      status: time ? IconDayCloudLightning : IconNightCloudLightning,
    },
    { day: "TuesDay", status: time ? IconDaySnow : IconNightSnow },
    { day: "Wednesday", status: time ? IconDaySun : IconNightSun },
    {
      day: "Thursday",
      status: time ? IconDaySunCloudRain : IconNightSunCloudRain,
    },
    { day: "Friday", status: time ? IconDayCloud : IconNightCloud },
    { day: "Saturday", status: time ? IconDayClouds : IconNightClouds },
    {
      day: "Sunday",
      status: time ? IconDaySunCloudRains : IconNightSunCloudRains,
    },
  ];
  return (
    <div
      className={classNames(
        "preview-days flex items-center justify-between",
        { day: time },
        { night: !time }
      )}
    >
      {previewDays.map((item, index) => (
        <div
          className="preview-day flex flex-col justify-center items-center"
          key={index}
        >
          <img src={item.status} />
          {item.day}
          <span>69°C</span>
        </div>
      ))}
    </div>
  );
};
