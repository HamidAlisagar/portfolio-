import React from "react";
import Styles from "./About.module.css";
import { Link } from "react-router-dom";
export default function About(){
  return (
    <div className={Styles.aboutSection} id={"About"}>
      <div className="container">
        <div className={Styles.aboutWrapper}>
           
          <div className={Styles.aboutContent}>
            <h2>About Me</h2>
            <p className={Styles.aboutInfo}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <Link className={Styles.btnStyle}><button>Download CV</button></Link>
          </div>
          <div className={Styles.aboutImg}>
            <img src="./assets/Layer 0.png" alt="About" />
          </div>
        </div>
      </div>
    </div>
  );
};


