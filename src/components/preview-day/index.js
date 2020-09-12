import React from "react";
import "./index.scss";

import IconCloudLightning from "assets/icons/icon-cloud-lightning.png";
import IconCloudRain from "assets/icons/icon-cloud-rain.png";
import IconCloudRains from "assets/icons/icon-cloud-rains.png";
import IconCloudSnows from "assets/icons/icon-cloud-snows.png";
import IconCloud from "assets/icons/icon-cloud.png";
import IconClouds from "assets/icons/icon-clouds.png";
import IconLightning from "assets/icons/icon-lightning.png";
import IconSnow from "assets/icons/icon-snow.png";
import IconSunCloudLightning from "assets/icons/icon-sun-cloud-lightning.png";
import IconSunCloudRains from "assets/icons/icon-sun-cloud-rain.png";
import IconSunCloudRain from "assets/icons/icon-sun-cloud-rains.png";
import IconSunCloud from "assets/icons/icon-sun-cloud.png";
import IconSun from "assets/icons/icon-sun.png";

export const PreviewDay = () => {
  const previewDays = [
    { day: "Monday", status: IconCloud },
    { day: "TuesDay", status: IconCloudRains },
    { day: "Wednesday", status: IconCloudSnows },
    { day: "Thursday", status: IconSun },
    { day: "Friday", status: IconSunCloud },
    { day: "Saturday", status: IconSunCloudRain },
    { day: "Sunday", status: IconSunCloudRains },
  ];
  return (
    <div className="preview-days flex items-center justify-between">
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
