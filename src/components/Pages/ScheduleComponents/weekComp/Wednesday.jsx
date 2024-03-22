import React from "react";
import "../../../styles/scheduleStyle.css";
const Wednesday = () => {
  return (
    <div>
      <div className="scheduleCards-Container">
        <ul>
          <li className="text-left">
            <span>Class Name</span>
            <p>Swimming</p>
          </li>
          <li className="text-center">
            <span>Trainer</span>
            <p>Atlas Stone</p>
          </li>
          <li className="text-center">
            <span>Timing</span>
            <p>6pm - 7pm</p>
          </li>
          <li>
            <button className="btnDesign">Join</button>
          </li>
        </ul>
        <ul>
          <li className="text-left">
            <span>Class Name</span>
            <p>BodyWeight Excercise</p>
          </li>
          <li className="text-center">
            <span>Trainer</span>
            <p>Maximus Steele</p>
          </li>
          <li className="text-center">
            <span>Timing</span>
            <p>7pm - 8pm</p>
          </li>
          <li>
            <button className="btnDesign">Join</button>
          </li>
        </ul>
        <ul>
          <li className="text-left">
            <span>Class Name</span>
            <p>Circuit Training</p>
          </li>
          <li className="text-center">
            <span>Trainer</span>
            <p>Titan Thorne</p>
          </li>
          <li className="text-center">
            <span>Timing</span>
            <p>8pm - 9pm</p>
          </li>
          <li>
            <button className="btnDesign">Join</button>
          </li>
        </ul>

        <ul>
          <li className="text-left">
            <span>Class Name</span>
            <p>Meditation</p>
          </li>
          <li className="text-center">
            <span>Trainer</span>
            <p>Jessica Jones</p>
          </li>
          <li className="text-center">
            <span>Timing</span>
            <p>6am - 7am</p>
          </li>
          <li>
            <button className="btnDesign">Join</button>
          </li>
        </ul>
        <ul>
          <li className="text-left">
            <span>Class Name</span>
            <p>Running Session</p>
          </li>
          <li className="text-center">
            <span>Trainer</span>
            <p>Sarah Smith</p>
          </li>
          <li className="text-center">
            <span>Timing</span>
            <p>7am - 8am</p>
          </li>
          <li>
            <button className="btnDesign">Join</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Wednesday;
