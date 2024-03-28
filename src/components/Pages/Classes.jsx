import React from "react";
import "../styles/classesStyle.css";
import headerImg from "../images/aboutP-Img/headingBanner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Classes = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const images = [
    { id: 1, img1: "https://source.unsplash.com/550x350/?yoga" },
    { id: 2, img2: "https://source.unsplash.com/550x350/?Aerobics" },
    { id: 3, img3: "https://source.unsplash.com/550x350/?meditation" },
    { id: 4, img4: "https://source.unsplash.com/550x350/?running" },
    { id: 5, img5: "https://source.unsplash.com/550x350/?karate" },
    { id: 6, img6: "https://source.unsplash.com/550x350/?zumba" },
    { id: 7, img7: "https://source.unsplash.com/550x350/?workout" },
  ];
  return (
    <div>
      <div className="headerImg">
        <img src={headerImg} alt="" />
        <h1>CLASSES</h1>
      </div>
      <div className="SliderContainer">
        <Slider {...settings}>
          {images.map((a) => (
            <div className="carouselContainer" key={a.id}>
              <div>
                <img src={a.img1} alt="" />
              </div>
              <div>
                <img src={a.img2} alt="" />
              </div>
              <div>
                <img src={a.img3} alt="" />
              </div>
              <div>
                <img src={a.img4} alt="" />
              </div>
              <div>
                <img src={a.img5} alt="" />
              </div>
              <div>
                <img src={a.img6} alt="" />
              </div>
              <div>
                <img src={a.img7} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="classesContainer">
        <div className="classCard">
          <div className="class1">
            <div className="class1Heading">
              <h1>Workout</h1>
              <p></p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <span>Wed: 6:00 AM</span>
              </div>
            </div>
          </div>
          <div className="class2">
            <div className="class1Heading">
              <h1>WeightLifting</h1>
              <p></p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <span>Wed: 7:00 AM</span>
              </div>
            </div>
          </div>
          <div className="class3">
            <div className="class1Heading">
              <h1>DeadLift</h1>
              <p></p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <span>Wed: 8:00 AM</span>
              </div>
            </div>
          </div>
          <div className="class4">
            <div className="class1Heading">
              <h1>Martial Arts</h1>
              <p></p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <span>Wed: 4:00 PM</span>
              </div>
            </div>
          </div>
          <div className="class5">
            <div className="class1Heading">
              <h1>Squats</h1>
              <p></p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <span>Wed: 5:00 PM</span>
              </div>
            </div>
          </div>
          <div className="class6">
            <div className="class1Heading">
              <h1>Karate</h1>
              <p></p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>
                <span>Wed: 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
