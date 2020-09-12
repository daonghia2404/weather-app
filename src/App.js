import React from "react";
import "./assets/css/main.scss";
import "app.scss";
import classNames from "classnames";
import { Day } from "components/day";
import { Temperature } from "components/temperature";
import { Time } from "components/time";
import { Background } from "components/background";
import { PreviewDay } from "components/preview-day";
import { Location } from "components/location";
import { Bird } from "components/bird";

const App = () => {
  const isDay = true;
  const birds = [
    { size: 70, position: 150, delay: 2, speed: 10, start: 1 },
    { size: 40, position: 120, delay: 1, speed: 15, start: 3 },
    { size: 55, position: 135, delay: 2, speed: 8, start: 5 },
  ];
  return (
    <div className={classNames("app-main", { day: isDay }, { night: !isDay })}>
      <div className="app flex flex-col justify-between">
        <div className="app-header flex justify-between">
          <Temperature time={isDay} />
          <Time time={isDay} />
        </div>

        <Day time={isDay} />

        <Background time={isDay} />

        <Location time={isDay} />

        {birds.map((item, index) => (
          <Bird
            key={index}
            size={item.size}
            position={item.position}
            delay={item.delay}
            speed={item.speed}
            start={item.start}
          />
        ))}

        <div className="app-footer flex justify-center">
          <PreviewDay time={isDay} />
        </div>
      </div>
    </div>
  );
};

export default App;
