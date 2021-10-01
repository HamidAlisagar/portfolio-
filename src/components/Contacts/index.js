import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Contacts.module.css";
const Contacts = () => {
  return (
    <div className={Styles.contactSection} id="Contact">
      <div className="container">
        <div className={Styles.contactWrapper}>
          <div className={Styles.contactInfo}>
            <h2>Let’s Make Something Great Together</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et t enim ad minim veniam,
              quis nostrud exercitation.
            </p>
          </div>
          <div>
            <form className={Styles.formStyle}>
              <div className={Styles.formInnerWrapper}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className={Styles.formInnerWrapper}>
                <input type="number" placeholder="Phone#" />
                <select>
                  <option value="volvo">Budget</option>
                  <option value="saab">100$</option>
                  <option value="fiat">500$</option>
                  <option value="audi">1000$</option>
                </select>
              </div>
              <div>
                <textarea type="text" rows="20" placeholder="message" />
              </div>
            </form>
          </div>
          <div className={Styles.formBtnStyle}>
            <Link className={Styles.formBtn}>
              <button>Hire Me</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
