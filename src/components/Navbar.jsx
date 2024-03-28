import React, { useEffect, useState } from "react";
import ".//styles/navbarStyle.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/webPageLogo.svg";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hiddenHandler = () => {
    setIsNavOpen(false);
    
  };

  return (
    <>
      <nav className={`navContainer ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="linkContainer">
          <ul className="ulList">
            <li>
              <NavLink
                to="/"
                exact="true"
                className={({ isActive }) =>
                  `home links ${isActive ? "red" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact="true"
                to={"/about"}
                className={({ isActive }) =>
                  `home links ${isActive ? "red" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/gallery"}
                exact="true"
                className={({ isActive }) =>
                  `${isActive ? "red" : ""} home links`
                }
              >
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/schedule/monday"}
                exact="true"
                className={({ isActive }) =>
                  `${isActive ? "red" : ""} home links`
                }
              >
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                exact="true"
                className={({ isActive }) =>
                  `${isActive ? "red" : ""} home links`
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/pricing"}
                exact="true"
                className={({ isActive }) =>
                  `${isActive ? "red" : ""} pricing links`
                }
              >
                Pricing
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/classes"}
                exact="true"
                className={({ isActive }) =>
                  `${isActive ? "red" : ""} classes links`
                }
              >
                Classes
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/contact"}
                exact="true"
                className={({ isActive }) =>
                  `${isActive ? "red" : ""} contact links`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="container">
          <NavLink to={"/login"} className="links">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </NavLink>

          <button
            className="menu-toggle-btn"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fillRule="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
          <nav className={`menubar ${isNavOpen ? "open" : ""}`}>
            <ul className="sideMenuList">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="menubarClose"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  fill="white"
                  className="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
              </button>

              <NavLink
                to={"/"}
                className="home links fs-20"
                onClick={hiddenHandler}
              >
                <li>Home</li>
              </NavLink>

              <NavLink
                to={"/about"}
                className="home links  fs-20"
                onClick={hiddenHandler}
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to={"/gallery"}
                className="gallery links  fs-20"
                onClick={hiddenHandler}
              >
                <li>Gallery</li>
              </NavLink>

              <NavLink
                to={"/schedule"}
                className="schedule links  fs-20"
                onClick={hiddenHandler}
              >
                <li>Schedule</li>
              </NavLink>
              <NavLink
                to={"/blog"}
                className="blog links  fs-20"
                onClick={hiddenHandler}
              >
                <li>Blog</li>
              </NavLink>
              <NavLink
                to={"/pricing"}
                className="pricing links  fs-20"
                onClick={hiddenHandler}
              >
                <li>Pricing</li>
              </NavLink>

              <NavLink
                to={"/classes"}
                className="classes links  fs-20"
                onClick={hiddenHandler}
              >
                <li>Classes</li>
              </NavLink>

              <NavLink
                to={"/contact"}
                className="contact links  fs-20"
                onClick={hiddenHandler}
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
