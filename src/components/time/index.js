import React from "react";
import classNames from "classnames";
import "./index.scss";

export const Time = ({ time }) => {
  return (
    <div className={classNames("time", { day: time }, { night: !time })}>
      <div className="date">Sep, 12</div>
      <div className="time-detail text-center">
        <div className="time-item hour">17</div>
        <div className="time-item minute">59</div>
      </div>
    </div>
  );
};
