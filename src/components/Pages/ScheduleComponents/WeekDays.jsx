import React from "react";
import "../../styles/scheduleStyle.css";
import { NavLink, Outlet } from "react-router-dom";
const WeekDays = () => {
  return (
    <div>
      <div className="weekContainer">
        <NavLink
          to="/schedule/monday"
          exact="true"
          className={({ isActive }) => `${isActive ? "bgRed" : " "} weekBtn`}
        >
          Monday
        </NavLink>
        <NavLink
          to="/schedule/tuesday"
          exact="true"
          className={({ isActive }) => `${isActive ? "bgRed" : " "} weekBtn`}
        >
          Tuesday
        </NavLink>
        <NavLink
          to="/schedule/wednesday"
          exact="true"
          className={({ isActive }) => `${isActive ? "bgRed" : " "} weekBtn`}
        >
          Wednesday
        </NavLink>
        <NavLink
          to="/schedule/thursday"
          exact="true"
          className={({ isActive }) => `${isActive ? "bgRed" : " "} weekBtn`}
        >
          Thursday
        </NavLink>
        <NavLink
          to="/schedule/friday"
          exact="true"
          className={({ isActive }) => `${isActive ? "bgRed" : " "} weekBtn`}
        >
          Friday
        </NavLink>
        <NavLink
          to="/schedule/saturday"
          exact="true"
          className={({ isActive }) => `${isActive ? "bgRed" : " "} weekBtn`}
        >
          Saturday
        </NavLink>
        <NavLink
          to="/schedule/sunday"
          exact="true"
          className={({ isActive }) => `${isActive ? "bgRed" : " "} weekBtn`}
        >
          <div>Sunday</div>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default WeekDays;
