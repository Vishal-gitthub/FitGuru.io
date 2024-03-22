import React from "react";
import sleepingImg from "../../../images/schedulePageImages/sleepingTemplate.jpg";

const Sunday = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        REST DAY
      </h1>
      <img
        style={{
          position: "relative",
          left: "50%",
          transform: "translate(-50%)",
          width: "80vw",
          height: "40vh",
          objectFit: "cover",
        }}
        src={sleepingImg}
        alt=""
      />
    </div>
  );
};

export default Sunday;
