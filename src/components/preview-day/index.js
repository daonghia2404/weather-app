import React, { useState, useEffect } from "react";
import "./index.scss";
import classNames from "classnames";
import {
  unixToTime,
  kelvinToCelsius,
  kelvinToFahrenheit,
  formatStatusWeather,
} from "utils/utils-format";

export const PreviewDay = ({ time, data }) => {
  const [previewDays, setPreviewDays] = useState([]);

  const getPreviewDate = (data) => {
    const previewDays = [];
    data.map((item, index) => {
      previewDays.push({
        day: unixToTime(item.dt).date,
        month: unixToTime(item.dt).month,
        temp: item.temp.day,
        status: item.weather[0].id,
      });
    });
    setPreviewDays(previewDays);
  };

  useEffect(() => {
    if (data.length) getPreviewDate(data);
  }, [data]);

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
          <img src={formatStatusWeather(item.status, time)} />
          {item.day} {item.month}
          <span>{kelvinToCelsius(item.temp).toFixed(2)}°C</span>
        </div>
      ))}
    </div>
  );
};
