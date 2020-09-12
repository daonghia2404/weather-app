import React from "react";
import classNames from "classnames";
import { kelvinToCelsius, kelvinToFahrenheit } from "utils/utils-format";
import "./index.scss";

export const Temperature = ({ time, data }) => {
  return (
    <div className={classNames("temperature", { day: time }, { night: !time })}>
      <div className="number-dergee c-dergee">
        {data && kelvinToCelsius(data.temp)}
        <span>°</span>
        <span>C</span>
      </div>
      <div className="number-dergee f-dergee">
        {data && kelvinToFahrenheit(data.temp)}
        <span>°</span>
        <span>F</span>
      </div>
    </div>
  );
};
