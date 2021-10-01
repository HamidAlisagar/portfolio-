import React from "react";
import Styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={Styles.navbarSection}>
    
        <div className={`container ${Styles.containerStyle}`}>
        <div className={Styles.imgStyle}>
      
      <img src="./assets/dotted.png" alt="dotted rectangle"/>
    </div>
      <div className={Styles.navbarWrapper}>
        <div className={Styles.logo}>
        <Link
                    to="/HomePage"
                    onClick={() => {
                      let element = document.getElementById("HomePage");
                        element &&
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >  <img src="./assets/logo.png" alt="logo" /></Link>
        </div>
        <div>
          <nav>
            <ul className={Styles.listStyle}>
              <li>
              <Link
                    to="/About"
                    onClick={() => {
                      let element = document.getElementById("About");
                        element &&
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >About</Link>
              </li>
              <li>
              <Link
                    to="/PortFolio"
                    onClick={() => {
                      let element = document.getElementById("Portfolio");
                        element &&
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  > Portfolio</Link>
              </li>
              <li>
              <Link
                    to="/Contact"
                    onClick={() => {
                      let element = document.getElementById("Contact");
                        element &&
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                  >Contact</Link>
              </li>

              <li>
                <Link>
                  <button>Get Started</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
