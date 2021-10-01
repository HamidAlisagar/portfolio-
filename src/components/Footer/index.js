import React from "react";
import Styles from "./Footer.module.css";
import {
  FaBehance,
  FaDribbble,
  FaPinterest,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={Styles.footerSection}>
      <div className="container">
        <div className={Styles.footerWrapper}>
          <div className={Styles.footerContent}>
            <h3>Portfolio</h3>
            <p>About | Portfolio | Contact | Testimonials</p>
            <p>NY / +1 123456 7890 / hello@graphics.studio.com</p>
            <ul className={Styles.socialStyle}>
              <li>
                <Link>
                  <FaBehance className={Styles.icons} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaDribbble className={Styles.icons} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaPinterest className={Styles.icons} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagram  className={Styles.icons} />
                </Link>
              </li>
              <li>
                <Link>
                  <FaLinkedinIn className={Styles.icons} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Styles.copyRight}>
        <p>Copyright © 2021 Iplex Pvt Ltd | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
