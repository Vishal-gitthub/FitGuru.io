import React from "react";
import "../styles/aboutStyle.css";
import headBanner from "../images/aboutP-Img/headingBanner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cImg1 from "../images/aboutP-Img/carousel-img-1.jpg";
import cImg2 from "../images/aboutP-Img/carousel-img-2.jpg";
import cImg3 from "../images/aboutP-Img/carousel-img-3.jpg";
import cImg4 from "../images/aboutP-Img/carousel-img-4.jpg";
import historyImage1 from "../images/aboutP-Img/alora-griffiths-H6ED86m2TMQ-unsplash.jpg";
import historyImage2 from "../images/aboutP-Img/hisImage1.jpg";
import historyImage3 from "../images/aboutP-Img/pexels-grzegorz-5209197.jpg";
import historyImage4 from "../images/aboutP-Img/pexels-william-choquette-1954524.jpg";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const images = [
    { id: 1, cImg1: cImg1 },
    {
      id: 2,
      cImg2: cImg2,
    },
    { id: 3, cImg3: cImg3 },
    { id: 4, cImg4: cImg4 },
  ];

  return (
    <div>
      <div className="headerImg">
        <img src={headBanner} alt="" />
        <h1>About Us</h1>
      </div>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((d) => (
            <div className="carContainer" key={d.id}>
              <div>
                <img src={d.cImg1} alt="" className="carousel-image" />
              </div>
              <div>
                <img src={d.cImg2} alt="" className="carousel-image" />
              </div>
              <div>
                <img src={d.cImg3} alt="" className="carousel-image" />
              </div>
              <div>
                <img src={d.cImg4} alt="" className="carousel-image" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="aboutCard">
        <div className="history">
          <svg
            width="100px"
            height="100px"
            viewBox="0 0 48.00 48.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff1a1a"
            stroke="#ff1a1a"
            strokeWidth="0.768"
            transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.288"
            />
            <g id="SVGRepo_iconCarrier">
              <g
                id="Group_37"
                data-name="Group 37"
                transform="translate(-627.096 -464)"
              >
                <circle
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx={5}
                  cy={5}
                  r={5}
                  transform="translate(643.191 480)"
                  fill="#e60000"
                />

                <g id="Group_36" data-name="Group 36">
                  <path
                    id="Path_45"
                    data-name="Path 45"
                    d="M629.1,485a19.037,19.037,0,0,1,38.045-1h-3.568l4.618,9.236L672.81,484h-3.669a21.035,21.035,0,0,0-42.045,1A21.323,21.323,0,0,0,648,506v-2A19.252,19.252,0,0,1,629.1,485Z"
                    fill="#ffffff"
                  />
                  <path
                    id="Path_46"
                    data-name="Path 46"
                    d="M661.191,485h-2A11.048,11.048,0,1,1,647,474.051v2.567L654.236,473,647,469.382v2.67A13,13,0,1,0,661.191,485Z"
                    fill="#ffffff"
                  />
                  <path
                    id="Path_47"
                    data-name="Path 47"
                    d="M663.191,500a6,6,0,1,0,6,6A6.007,6.007,0,0,0,663.191,500Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,663.191,510Z"
                    fill="#ffffff"
                  />
                  <circle
                    id="Ellipse_7"
                    data-name="Ellipse 7"
                    cx={2}
                    cy={2}
                    r={2}
                    transform="translate(661.191 504)"
                    fill="#ffffff"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h1>Our History</h1>
          <p>
            We are proud to have served the community for over 20 years, helping
            individuals achieve their fitness goals and lead healthier lives.
          </p>
        </div>
        <div className="hisImg">
          <img src={historyImage1} alt="demo IMAGE" />
        </div>
      </div>
      <div className="aboutCard">
        <div className="hisImg">
          <img src={historyImage2} alt="demo IMAGE" />
        </div>
        <div className="history">
          <svg
            width="100px"
            height="100px"
            viewBox="0 0 48.00 48.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff1a1a"
            stroke="#ff1a1a"
            strokeWidth="0.768"
            transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.288"
            />
            <g id="SVGRepo_iconCarrier">
              <g
                id="Group_37"
                data-name="Group 37"
                transform="translate(-627.096 -464)"
              >
                <circle
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx={5}
                  cy={5}
                  r={5}
                  transform="translate(643.191 480)"
                  fill="#e60000"
                />

                <g id="Group_36" data-name="Group 36">
                  <path
                    id="Path_45"
                    data-name="Path 45"
                    d="M629.1,485a19.037,19.037,0,0,1,38.045-1h-3.568l4.618,9.236L672.81,484h-3.669a21.035,21.035,0,0,0-42.045,1A21.323,21.323,0,0,0,648,506v-2A19.252,19.252,0,0,1,629.1,485Z"
                    fill="#ffffff"
                  />
                  <path
                    id="Path_46"
                    data-name="Path 46"
                    d="M661.191,485h-2A11.048,11.048,0,1,1,647,474.051v2.567L654.236,473,647,469.382v2.67A13,13,0,1,0,661.191,485Z"
                    fill="#ffffff"
                  />
                  <path
                    id="Path_47"
                    data-name="Path 47"
                    d="M663.191,500a6,6,0,1,0,6,6A6.007,6.007,0,0,0,663.191,500Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,663.191,510Z"
                    fill="#ffffff"
                  />
                  <circle
                    id="Ellipse_7"
                    data-name="Ellipse 7"
                    cx={2}
                    cy={2}
                    r={2}
                    transform="translate(661.191 504)"
                    fill="#ffffff"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h1>Our History</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            rem optio architecto temporibus soluta quos deserunt! Quaerat,
            porro! Ex, libero.
          </p>
        </div>
      </div>
      <div className="aboutCard">
        <div className="history">
          <svg
            width="100px"
            height="100px"
            viewBox="0 0 48.00 48.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff1a1a"
            stroke="#ff1a1a"
            strokeWidth="0.768"
            transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.288"
            />
            <g id="SVGRepo_iconCarrier">
              <g
                id="Group_37"
                data-name="Group 37"
                transform="translate(-627.096 -464)"
              >
                <circle
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx={5}
                  cy={5}
                  r={5}
                  transform="translate(643.191 480)"
                  fill="#e60000"
                />

                <g id="Group_36" data-name="Group 36">
                  <path
                    id="Path_45"
                    data-name="Path 45"
                    d="M629.1,485a19.037,19.037,0,0,1,38.045-1h-3.568l4.618,9.236L672.81,484h-3.669a21.035,21.035,0,0,0-42.045,1A21.323,21.323,0,0,0,648,506v-2A19.252,19.252,0,0,1,629.1,485Z"
                    fill="#ffffff"
                  />
                  <path
                    id="Path_46"
                    data-name="Path 46"
                    d="M661.191,485h-2A11.048,11.048,0,1,1,647,474.051v2.567L654.236,473,647,469.382v2.67A13,13,0,1,0,661.191,485Z"
                    fill="#ffffff"
                  />
                  <path
                    id="Path_47"
                    data-name="Path 47"
                    d="M663.191,500a6,6,0,1,0,6,6A6.007,6.007,0,0,0,663.191,500Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,663.191,510Z"
                    fill="#ffffff"
                  />
                  <circle
                    id="Ellipse_7"
                    data-name="Ellipse 7"
                    cx={2}
                    cy={2}
                    r={2}
                    transform="translate(661.191 504)"
                    fill="#ffffff"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h1>Our History</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            rem optio architecto temporibus soluta quos deserunt! Quaerat,
            porro! Ex, libero.
          </p>
        </div>
        <div className="hisImg">
          <img src={historyImage3} alt="demo IMAGE" />
        </div>
      </div>
      <div className="aboutCard">
        <div className="hisImg">
          <img src={historyImage4} alt="demo IMAGE" />
        </div>
        <div className="history">
          <svg
            width="100px"
            height="100px"
            viewBox="0 0 48.00 48.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff1a1a"
            stroke="#ff1a1a"
            strokeWidth="0.768"
            transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.288"
            />
            <g id="SVGRepo_iconCarrier">
              <g
                id="Group_37"
                data-name="Group 37"
                transform="translate(-627.096 -464)"
              >
                <circle
                  id="Ellipse_6"
                  data-name="Ellipse 6"
                  cx={5}
                  cy={5}
                  r={5}
                  transform="translate(643.191 480)"
                  fill="#e60000"
                />

                <g id="Group_36" data-name="Group 36">
                  <path
                    id="Path_45"
                    data-name="Path 45"
                    d="M629.1,485a19.037,19.037,0,0,1,38.045-1h-3.568l4.618,9.236L672.81,484h-3.669a21.035,21.035,0,0,0-42.045,1A21.323,21.323,0,0,0,648,506v-2A19.252,19.252,0,0,1,629.1,485Z"
                    fill="#ffffff"
                  />
                  <path
                    id="Path_46"
                    data-name="Path 46"
                    d="M661.191,485h-2A11.048,11.048,0,1,1,647,474.051v2.567L654.236,473,647,469.382v2.67A13,13,0,1,0,661.191,485Z"
                    fill="#ffffff"
                  />
                  <path
                    id="Path_47"
                    data-name="Path 47"
                    d="M663.191,500a6,6,0,1,0,6,6A6.007,6.007,0,0,0,663.191,500Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,663.191,510Z"
                    fill="#ffffff"
                  />
                  <circle
                    id="Ellipse_7"
                    data-name="Ellipse 7"
                    cx={2}
                    cy={2}
                    r={2}
                    transform="translate(661.191 504)"
                    fill="#ffffff"
                  />
                </g>
              </g>
            </g>
          </svg>
          <h1>Our History</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            rem optio architecto temporibus soluta quos deserunt! Quaerat,
            porro! Ex, libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
