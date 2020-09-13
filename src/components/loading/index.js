import React from "react";
import classNames from "classnames";
import "./index.scss";

export const Loading = ({ time, loading }) => {
  return (
    <div
      className={classNames(
        "loading flex items-center justify-center",
        { hide: loading },
        { day: time },
        { night: !time }
      )}
    >
      <div className="main flex flex-wrap justify-center">
        <div className="hot">
          <span className="sun"></span>
          <span className="sunx"></span>
        </div>

        <div className="cloudy">
          <span className="cloud"></span>
          <span className="cloudx"></span>
        </div>

        <div className="stormy">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <span className="snowe"></span>
          <span className="snowex"></span>
          <span className="stick"></span>
          <span className="stick2"></span>
        </div>

        <div className="breezy">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <span className="cloudr"></span>
        </div>

        <div className="night">
          <span className="moon"></span>
          <span className="spot1"></span>
          <span className="spot2"></span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
