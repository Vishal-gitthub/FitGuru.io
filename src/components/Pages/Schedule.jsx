import React from "react";
import headBanner from "../images/aboutP-Img/headingBanner.jpg";
import "../styles/scheduleStyle.css";
import WeekDays from "./ScheduleComponents/WeekDays";
import { Outlet } from "react-router-dom";
const schedule = () => {
  return (
    <div>
      <div className="headerImg">
        <img src={headBanner} alt="" />
        <h1>SCHEDULE</h1>
      </div>
      <WeekDays />
      
    </div>
  );
};

export default schedule;
