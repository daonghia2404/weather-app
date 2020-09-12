import React from "react";
import classNames from "classnames";
import "./index.scss";
export const Day = ({ time }) => {
  const day = ["s", "u", "n", "d", "a", "y"];
  return (
    <div
      className={classNames(
        "day-of-week flex flex-col items-center justify-center",
        { day: time },
        { night: !time }
      )}
    >
      {day.map((item, index) => (
        <div className="character" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
