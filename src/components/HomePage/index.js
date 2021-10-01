import React from "react";
import { Link } from "react-router-dom";
import { FaBehance ,FaDribbble,FaPinterest,FaLinkedinIn,FaInstagram} from "react-icons/fa";
import Styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={Styles.homeSection} id="HomePage">
      <div className="container">
        <div className={Styles.homeWrapper}>
          <div className={Styles.homeContent}>
            <h6>Hello I am</h6>
            <h1>Mark Reccardo</h1>

            <p>
              A young <span>UI/UX</span> designer with crazy for mobile & web
              design.
            </p>
            <p className={Styles.findme}>Find Me on</p>
            <div className={Styles.homeImage}>
              <img src="/assets/ecllipse.png" alt="hero" />
            </div>
            <ul className={Styles.socialStyle}>
              <li>
                <Link><FaBehance className={Styles.icons}/></Link>
              </li>
              <li>
                <Link><FaDribbble  className={Styles.icons}/></Link>
              </li>
              <li>
                <Link><FaPinterest  className={Styles.icons}/></Link>
              </li>
              <li>
                  <Link><FaInstagram  className={Styles.icons}/></Link> </li>
              <li>
                <Link><FaLinkedinIn  className={Styles.icons}/></Link>
              </li>
              
            </ul>
            <div className={Styles.homeBtnStyle}>
              <Link className={Styles.hireMe}>
                <button>Hire Me</button>
              </Link>
              <Link className={Styles.portfolioBtn}>
                <button>Portfolio</button>
              </Link>
            </div>
          </div>
          <div className={Styles.imgWrapper}>
            <img src="/assets/home.png" alt="HeroImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
