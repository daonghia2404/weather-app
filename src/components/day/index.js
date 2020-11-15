import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./index.scss";
export const Day = ({ time, data }) => {
  useEffect(() => {}, []);
  const getDayOfWeek = () => {
    let day = -1;
    if (data.day) day = data.day();
    switch (day) {
      case 0:
        day = "sunday";
        break;
      case 1:
        day = "monday";
        break;
      case 2:
        day = "tuesday";
        break;
      case 3:
        day = "wednesday";
        break;
      case 4:
        day = "thursday";
        break;
      case 5:
        day = "friday";
        break;
      case 6:
        day = "saturday";
        break;
      default:
        day = "";
        break;
    }
    return day.split("");
  };

  return (
    <div
      className={classNames(
        "day-of-week flex flex-col items-center justify-center",
        { day: time },
        { night: !time }
      )}
    >
      {getDayOfWeek().map((item, index) => (
        <div className="character" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
