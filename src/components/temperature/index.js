import React from "react";
import classNames from "classnames";
import "./index.scss";

export const Temperature = ({ time }) => {
  return (
    <div className={classNames("temperature", { day: time }, { night: !time })}>
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
