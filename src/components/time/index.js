import React, { useState, useEffect } from "react";
import moment from "moment";
import classNames from "classnames";
import { formatDate, formatMonth } from "utils/utils-format";
import "./index.scss";

export const Time = ({ time }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  useEffect(() => {
    const time = moment();
    getDay(time);
    getMonth(time);
    getHour(time);
    getMinute(time);
  }, []);

  const getDay = (time) => setDay(formatDate(time.date()));
  const getMonth = (time) => setMonth(formatMonth(time.month()));
  const getHour = (time) => setHour(formatDate(time.hour()));
  const getMinute = (time) => setMinute(formatDate(time.minute()));

  return (
    <div className={classNames("time", { day: time }, { night: !time })}>
      <div className="date">
        {month}, {day}
      </div>
      <div className="time-detail text-center">
        <div className="time-item hour">{hour}</div>
        <div className="time-item minute">{minute}</div>
      </div>
    </div>
  );
};
