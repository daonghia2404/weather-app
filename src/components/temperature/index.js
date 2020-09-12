import React from "react";
import "./index.scss";

export const Temperature = () => {
  return (
    <div className="temperature">
      <div className="number-dergee c-dergee">
        36
        <span>°</span>
        <span>C</span>
      </div>
      <div className="number-dergee f-dergee">
        22
        <span>°</span>
        <span>F</span>
      </div>
    </div>
  );
};
