import React from "react";
import "./index.scss";
export const Day = () => {
  const day = ["s", "u", "n", "d", "a", "y"];
  return (
    <div className="day flex flex-col items-center justify-center">
      {day.map((item, index) => (
        <div className="character" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};
