import React from "react";
import headBanner from "../images/aboutP-Img/headingBanner.jpg";
import "../styles/blogStyle.css";
import BackYoga from "../images/blogPageImages/backYoga.jpg";
import strengthTraining from "../images/blogPageImages/strengthTraining.jpg";
import CrossFit from "../images/blogPageImages/crossFit.jpg";
import KidsGuide from "../images/blogPageImages/kidsFitnessGuide.jpg";
import gymChllenge from "../images/blogPageImages/GymChallenge.jpg";
import innovativeExcer from "../images/blogPageImages/innovExcercise.jpg";
import unlockPotential from "../images/blogPageImages/unlockPotential.jpg";
import logo from "../../assets/webPageLogo.svg";
import Weather from "./Blog-component/Weather";

const Blog = () => {
  return (
    <div>
      <div className="headerImg">
        <img src={headBanner} alt="" />
        <h1>BLOG</h1>
      </div>
      <div className="blogP-Container">
        <div className="left-container">
          <div className="CardContainer">
            <img src={BackYoga} alt="Yoga Image" />
            <div className="date-author-info">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <polygon points="32 40 16 32 32 24 48 32 32 40" />
                  <polygon points="32 24 16 16 32 8 48 16 32 24" />
                  <polygon points="32 56 16 48 32 40 48 48 32 56" />
                </g>
              </svg>
              By <span> &nbsp; Admin </span> | March 13,2024 | Yoga
            </div>
            <h1>Yoga for back pain relief</h1>
            <p>
              Yoga for back pain relief improves flexibility, strengthens core
              muscles, and promotes proper posture. It increases blood
              circulation, reduces stress, targets specific areas, enhances body
              awareness, supports spinal health, and is customizable. It
              complements other therapies for holistic relief.
            </p>
            <button className="btnDesign" style={{ color: "white" }}>
              Join Now
            </button>
          </div>
          <div className="CardContainer">
            <img src={strengthTraining} alt="Strength Training Image" />
            <div className="date-author-info">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <polygon points="32 40 16 32 32 24 48 32 32 40" />
                  <polygon points="32 24 16 16 32 8 48 16 32 24" />
                  <polygon points="32 56 16 48 32 40 48 48 32 56" />
                </g>
              </svg>
              By <span> &nbsp; Admin </span> | April 17,2024 | Strength-Training
            </div>
            <h1>Benefits of Strength-Training</h1>
            <p>
              Strength training improves muscle strength, endurance, and bone
              density, enhances metabolism for weight management, boosts mood
              and energy levels, reduces risk of injury, and promotes functional
              independence in daily activities, fostering overall health and
              well-being.
            </p>
            <button className="btnDesign" style={{ color: "white" }}>
              Join Now
            </button>
          </div>
          <div className="CardContainer">
            <img src={CrossFit} alt="" />
            <div className="date-author-info">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <polygon points="32 40 16 32 32 24 48 32 32 40" />
                  <polygon points="32 24 16 16 32 8 48 16 32 24" />
                  <polygon points="32 56 16 48 32 40 48 48 32 56" />
                </g>
              </svg>
              By <span> &nbsp; Admin </span> | March 13,2024 | CrossFit's
            </div>
            <h1>CrossFit's Fitness Revolution</h1>
            <p>
              CrossFit revolutionized fitness in 2022, offering scalable
              workouts for all. Its inclusive community, focus on functional
              movements, and emphasis on technique ensure holistic benefits:
              strength, agility, and camaraderie.
            </p>
            <button className="btnDesign" style={{ color: "white" }}>
              Join Now
            </button>
          </div>
          <div className="CardContainer">
            <img src={KidsGuide} alt="" />
            <div className="date-author-info">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <polygon points="32 40 16 32 32 24 48 32 32 40" />
                  <polygon points="32 24 16 16 32 8 48 16 32 24" />
                  <polygon points="32 56 16 48 32 40 48 48 32 56" />
                </g>
              </svg>
              By <span> &nbsp; Admin </span> | March 13,2024 | Kids' Fitness
              Guide
            </div>
            <h1>How to Get Fit Your Kids Moving Throughout The Summer</h1>
            <p>
              Keep kids active in summer with fun outdoor activities like
              biking, swimming, and sports. Limit screen time, encourage daily
              play, and involve them in family workouts or outdoor games to
              promote fitness and healthy habits.
            </p>
            <button className="btnDesign" style={{ color: "white" }}>
              Join Now
            </button>
          </div>
          <div className="CardContainer">
            <img src={gymChllenge} alt="" />
            <div className="date-author-info">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <polygon points="32 40 16 32 32 24 48 32 32 40" />
                  <polygon points="32 24 16 16 32 8 48 16 32 24" />
                  <polygon points="32 56 16 48 32 40 48 48 32 56" />
                </g>
              </svg>
              By <span> &nbsp; Admin </span> | March 13,2024 | Gym Challenge
            </div>
            <h1>Join Our Gym's Exciting Challenge!</h1>
            <p>
              Join our gym's exhilarating challenge to ignite your fitness
              journey. Elevate your strength, endurance, and motivation with
              dynamic workouts and supportive community. Unleash your potential
              and achieve your goals with us!
            </p>
            <button className="btnDesign" style={{ color: "white" }}>
              Join Now
            </button>
          </div>
          <div className="CardContainer">
            <img src={innovativeExcer} alt="" />
            <div className="date-author-info">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <polygon points="32 40 16 32 32 24 48 32 32 40" />
                  <polygon points="32 24 16 16 32 8 48 16 32 24" />
                  <polygon points="32 56 16 48 32 40 48 48 32 56" />
                </g>
              </svg>
              By <span> &nbsp; Admin </span> | March 13,2024 | Innovative
              Exercises
            </div>
            <h1>Introducing Innovative Exercises</h1>
            <p>
              Discover cutting-edge workouts at our gym! Introducing innovative
              exercises to elevate your fitness journey. From dynamic circuit
              training to functional movement routines, achieve your goals with
              our groundbreaking programs.
            </p>
            <button className="btnDesign" style={{ color: "white" }}>
              Join Now
            </button>
          </div>
          <div className="CardContainer">
            <img src={unlockPotential} alt="" />
            <div className="date-author-info">
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                stroke="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <polygon points="32 40 16 32 32 24 48 32 32 40" />
                  <polygon points="32 24 16 16 32 8 48 16 32 24" />
                  <polygon points="32 56 16 48 32 40 48 48 32 56" />
                </g>
              </svg>
              By <span> &nbsp; Admin </span> | March 13,2024 | Unlock Your
              Potential
            </div>
            <h1>Unlock Your Potential with Our Gym Workouts</h1>
            <p>
              Experience the transformational benefits of our gym workouts:
              increase strength, enhance endurance, improve flexibility, and
              boost overall well-being. Unlock your potential and reach your
              fitness goals with our tailored training programs.
            </p>
            <button className="btnDesign" style={{ color: "white" }}>
              Join Now
            </button>
          </div>
        </div>
        <div className="right-container">
          <div className="searchBox">
            <input type="search" name="search" />
            <svg
              width="34px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.24000000000000005"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="#ffffff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
          </div>
          <Weather/>
          <div className="rightSideCards">
            <h1>Recent Posts</h1>
            <p className="line80px"></p>
            <div className="ryt-Cards">
              <div>
                <img src={BackYoga} alt="" />
              </div>
              <div className="card1Txt">
                <span>April 12 | 2023</span>
                <p>Yoga for back pain relief</p>
              </div>
            </div>
            <div className="ryt-Cards">
              <div>
                <img src={strengthTraining} alt="" />
              </div>
              <div className="card1Txt">
                <span>April 13 | 2024</span>
                <p>Benefits of Strength-Training</p>
              </div>
            </div>
            <div className="ryt-Cards">
              <div>
                <img src={CrossFit} alt="" />
              </div>
              <div className="card1Txt">
                <span>April 18 | 2023</span>
                <p>CrossFit's Fitness Revolution</p>
              </div>
            </div>
            <div className="ryt-Cards">
              <div>
                <img src={KidsGuide} alt="" />
              </div>
              <div className="card1Txt">
                <span>March 12 | 2023</span>
                <p>How to Get Fit Your Kids Moving Throughout The Summer</p>
              </div>
            </div>
            <div className="ryt-Cards">
              <div>
                <img src={gymChllenge} alt="" />
              </div>
              <div className="card1Txt">
                <span>April 12 | 2023</span>
                <p>Introducing Innovative Exercises!</p>
              </div>
            </div>
            <div className="ryt-Cards">
              <div>
                <img src={unlockPotential} alt="" />
              </div>
              <div className="card1Txt">
                <span>April 12 | 2023</span>
                <p>Unlock Your Potential with Our Gym Workouts</p>
              </div>
            </div>
          </div>
          <div className="tagsContainer">
            <h1>Popular Tags</h1>
            <p className="line80px"></p>
            <div className="tagsContent">
              <span>#Crossfit</span>
              <span>#Aerobics</span>
              <span>#WeightTraining</span>
              <span>#Workout</span>
              <span>#Running</span>
              <span>#Meditation</span>
              <span>#Gym</span>
              <span>#Training</span>
              <span>#Yoga</span>
            </div>
          </div>
          <div className="discountBannerCont">
            <div className="discountBanner">
              <div className="discount">
                <img src={logo} alt="" />
              </div>
              <div className="dis-price">
                <h1>41%</h1> <br />
                <p>Flat Discount</p>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Blog;
