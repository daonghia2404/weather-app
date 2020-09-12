import React from "react";
import "./assets/css/main.scss";
import "app.scss";
import { Day } from "components/day";
import { Temperature } from "components/temperature";
import { Time } from "components/time";
import { Background } from "components/background";
import { PreviewDay } from "components/preview-day";
import { Location } from "components/location";
import { Bird } from "components/bird";

const App = () => {
  return (
    <div className="app flex flex-col justify-between">
      <div className="app-header flex justify-between">
        <Temperature />
        <Time />
      </div>
      <Day />
      <Background />
      <Location />
      <Bird size="80" position="150" delay="2" speed="10" start={1} />
      <Bird size="50" position="120" delay="1" speed="15" start={5} />
      <div className="app-footer flex justify-center">
        <PreviewDay />
      </div>
    </div>
  );
};

export default App;
