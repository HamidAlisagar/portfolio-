import React from "react";
import Styles from "./Resume.module.css";
const Resume = () => {
  return (
    <div className={Styles.resumeSection} id="Portfolio">
      <div className="container">
        <div className={Styles.resumeWrapper}>
          <div className={Styles.resumeHeading}>
            <h2>My Capabilities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et t enim ad minim veniam,
              quis nostrud exercitation.
            </p>
          </div>

          <div className={Styles.skillSetWrapper}>
            <div className={Styles.skillItems}>
              <img src="./assets/skills.png" alt="skills" />
              <h2>Web Design</h2>
              <p>Get awesome design services from inkyy.com</p>
            </div>
            <div className={Styles.skillItems}>
              <img src="./assets/skills.png" alt="skills" />
              <h2>Web Design</h2>
              <p>Get awesome design services from inkyy.com</p>
            </div>
            <div className={Styles.skillItems}>
              <img src="./assets/skills.png" alt="skills" />
              <h2>Web Design</h2>
              <p>Get awesome design services from inkyy.com</p>
            </div>
            <div className={Styles.skillItems}>
              <img src="./assets/skills.png" alt="skills" />
              <h2>Web Design</h2>
              <p>Get awesome design services from inkyy.com</p>
            </div>
            <div className={Styles.skillItems}>
              <img src="./assets/skills.png" alt="skills" />
              <h2>Web Design</h2>
              <p>Get awesome design services from inkyy.com</p>
            </div>
            <div className={Styles.skillItems}>
              <img src="./assets/skills.png" alt="skills" />
              <h2>Web Design</h2>
              <p>Get awesome design services from inkyy.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
