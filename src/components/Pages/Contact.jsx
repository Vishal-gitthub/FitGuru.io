import React, { useState } from "react";
import headerImg from "../images/aboutP-Img/headingBanner.jpg";
import "../styles/contactStyle.css";
const Contact = () => {
  return (
    <div>
      <div className="headerImg">
        <img src={headerImg} alt="" />
        <h1>Classes</h1>
      </div>
      <div className="contactPageContainer">
        <div className="contactPageContent">
          <div className="leftSideContent">
            <h1>We are here for help you! To Shape Your Body.</h1>
            <p>
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
          </div>
          <div className="rightSideContent">
            <div className="card">
              <div>
                <h1>Leave Us Your Info</h1>
                <p className="formLine"></p>
              </div>
              <form>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    className="fullName"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    id="email"
                    autoComplete="email"
                    className="email"
                    placeholder="Enter Email"
                  />
                </div>
              </form>
              <select
                name="SelectYourClass"
                className="SelectYourClass"
                id="selectClass"
              >
                <option value="SelectClass" className="classOption" disabled>
                  Select Class
                </option>
                <option value="bodyBuilding" className="classOption">
                  Body Building
                </option>
                <option value="boxing" className="classOption">
                  Boxing
                </option>
                <option value="running" className="classOption">
                  Running
                </option>
                <option value="Yoga" className="classOption">
                  Yoga
                </option>
                <option value="Cycling" className="classOption">
                  Cycling
                </option>
                <option value="Meditation" className="classOption">
                  Meditation
                </option>
                <option value="workout" className="classOption">
                  Workout
                </option>
                <option value="zumba" className="classOption">
                  zumba
                </option>
              </select>
              <button className="btnDesign">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mapArea">
        <iframe
          title="Google Map"
          loading="lazy"
          height={400}
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.344998719433!2d-122.40820908468172!3d37.78269687975599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a0c9d34f5%3A0xf8d996d0b1dcfe9f!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1646799047967!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
