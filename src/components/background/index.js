import React from "react";
import "./index.scss";
import Sun from "assets/images/sun.png";
import Moon from "assets/images/moon.png";
import CloudWhite from "assets/images/cloud-white.png";
import CloudBlack from "assets/images/cloud-black.png";

export const Background = () => {
  return (
    <div className="background">
      <div className="sunset">
        <img src={Sun} />
      </div>
      <div className="cloud">
        <img src={CloudWhite} />
      </div>
      <div className="shadows flex flex-col justify-center items-center">
        <div className="shadow-item"></div>
        <div className="shadow-item"></div>
        <div className="shadow-item"></div>
        <div className="shadow-item"></div>
        <div className="shadow-item"></div>
        <div className="shadow-item"></div>
      </div>
    </div>
  );
};
