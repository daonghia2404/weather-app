import React from "react";
import classNames from "classnames";
import "./index.scss";

export const Location = ({ time }) => {
  return (
    <div className={classNames("locations", { day: time }, { night: !time })}>
      <div className="location">Hanoi,</div>
      <div className="description">Cloudly</div>
    </div>
  );
};
