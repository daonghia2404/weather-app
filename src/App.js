import React, { useState, useEffect } from "react";
import "./assets/css/main.scss";
import "app.scss";

import moment from "moment";
import classNames from "classnames";
import { apiWeather } from "api/weather-api";

import { Day } from "components/day";
import { Temperature } from "components/temperature";
import { Time } from "components/time";
import { Background } from "components/background";
import { PreviewDay } from "components/preview-day";
import { Location } from "components/location";
import { Bird } from "components/bird";

const App = () => {
  const [weather, setWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState({});
  const [date, setDate] = useState({});
  const [isDay, setIsDay] = useState(false);
  const birds = [
    { size: 70, position: "35%", delay: 2, speed: 10, start: 1 },
    { size: 40, position: "43%", delay: 1, speed: 15, start: 3 },
    { size: 55, position: "27%", delay: 2, speed: 8, start: 5 },
  ];

  useEffect(() => {
    getWeather();
    getDate();
    getDailyWeather();
  }, []);

  const getWeather = async () => {
    const res = await apiWeather.getByCity(1581129);
    setWeather(res);
  };

  const getDailyWeather = async () => {
    const res = await apiWeather.getDailyWeather(1581129);
    setDailyWeather(res.daily);
  };

  const getDate = () => {
    const time = moment();
    const hour = time.hour();
    if (hour >= 18 || hour <= 6) setIsDay(false);
    else setIsDay(true);
    setDate(time);
  };
  return (
    <div className={classNames("app-main", { day: isDay }, { night: !isDay })}>
      <div className="app flex flex-col justify-between">
        <div className="app-header flex justify-between">
          <Temperature time={isDay} data={weather.main} />
          <Time time={isDay} data={date} />
        </div>

        <Day time={isDay} data={date} />

        <Background time={isDay} />

        <Location time={isDay} data={weather} />

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
          <PreviewDay time={isDay} data={dailyWeather} />
        </div>
      </div>
    </div>
  );
};

export default App;
