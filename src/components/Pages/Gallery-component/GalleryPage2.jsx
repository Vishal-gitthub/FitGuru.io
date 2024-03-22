import React from "react";
import "../../styles/galleryPage.css";
import headBanner from "../../images/aboutP-Img/headingBanner.jpg";
import { NavLink } from "react-router-dom";
import galleryImage1 from "../../images/gallleryImages/pexels-andrea-piacquadio-3776144.jpg";
import galleryImage2 from "../../images/gallleryImages/pexels-cottonbro-studio-4761351.jpg";
import galleryImage3 from "../../images/gallleryImages/pexels-jonathan-borba-3076514.jpg";
import galleryImage4 from "../../images/gallleryImages/pexels-ketut-subiyanto-4853680.jpg";
import galleryImage5 from "../../images/gallleryImages/pexels-cottonbro-studio-4324101.jpg";
import galleryImage6 from "../../images/gallleryImages/pexels-leon-ardho-1552249.jpg";
import galleryImage7 from "../../images/gallleryImages/pexels-dom-j-45056.jpg";
import galleryImage8 from "../../images/gallleryImages/pexels-pixabay-163351.jpg";
import galleryImage9 from "../../images/gallleryImages/pexels-rdne-stock-project-8612047.jpg";
import galleryImage10 from "../../images/gallleryImages/pexels-cottonbro-studio-4752844.jpg";
const GalleryPage2 = () => {
  return (
    <div>
      <div className="headerImg">
        <img src={headBanner} alt="" />
        <h1>Gallery</h1>
      </div>
      <div className="gallery-Container">
        <div className="gallery-images">
          <img src={galleryImage1} alt="" />
          <img src={galleryImage8} alt="" />
          <img src={galleryImage4} alt="" />
          <img src={galleryImage3} alt="" />
          <img src={galleryImage10} alt="" />
          <img src={galleryImage2} alt="" />
          <img src={galleryImage9} alt="" />
          <img src={galleryImage5} alt="" />
          <img src={galleryImage6} alt="" />
          <img src={galleryImage7} alt="" />
        </div>

        <div className="btnContainer">
          <NavLink to={"/gallery"}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                fill="currentColor"
                className="bi bi-chevron-double-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
                <path
                  fillRule="evenodd"
                  d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
            </button>
          </NavLink>
          <NavLink to={"/gal-Page2"}>
            <button>2</button>
          </NavLink>
          <NavLink to={"/gallery"}>
            <button>1</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage2;
