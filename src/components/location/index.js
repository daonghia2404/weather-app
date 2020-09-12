import React from "react";
import { upperCaseFirstLetter } from "utils/utils-format";
import classNames from "classnames";
import "./index.scss";

export const Location = ({ time, data }) => {
  return (
    <div className={classNames("locations", { day: time }, { night: !time })}>
      <div className="location">{data && data.name},</div>
      <div className="description">
        {data &&
          data.weather &&
          upperCaseFirstLetter(data.weather[0].description)}
      </div>
    </div>
  );
};
