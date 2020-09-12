import React, { useState, useEffect } from "react";
import "./index.scss";

import Bird1 from "assets/images/day/bird-1.png";
import Bird2 from "assets/images/day/bird-2.png";
import Bird3 from "assets/images/day/bird-3.png";
import Bird4 from "assets/images/day/bird-4.png";
import Bird5 from "assets/images/day/bird-5.png";
import Bird6 from "assets/images/day/bird-6.png";
import Bird7 from "assets/images/day/bird-7.png";
import Bird8 from "assets/images/day/bird-8.png";
export const Bird = ({ size, position, delay, speed, start }) => {
  const [bird, setBird] = useState("");
  const frames = [
    Bird1,
    Bird2,
    Bird3,
    Bird4,
    Bird5,
    Bird6,
    Bird7,
    Bird8,
    Bird7,
    Bird6,
    Bird5,
    Bird4,
    Bird3,
    Bird2,
  ];
  let frame = start;

  useEffect(() => {
    animationBird();
  }, []);

  const animationBird = () => {
    setInterval(() => {
      frame = (frame + 1) % frames.length;
      setBird(frames[frame]);
    }, 100);
  };
  return (
    <div
      className="bird"
      style={{
        top: position + "px",
        width: size + "px",
        animationDelay: delay + "s",
        animationDuration: speed + "s",
      }}
    >
      <img src={bird} />
    </div>
  );
};
