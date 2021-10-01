import React from "react";
import Styles from "./Testimonials.module.css";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className={Styles.testimonialSection}>
      <div className="container">
        <div className={Styles.testimonialWrapper}>
          <div className={Styles.testimonialHeading}>
            <h2> What My Client Says</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et t enim ad minim veniam,
              quis nostrud exercitation.
            </p>
          </div>
          <div className={Styles.clientsWrapper}>
            <div className={Styles.imgWrapper}>
              <Link  className={Styles.img4} >
           
                <img src="/assets/1.png" alt="" />
              </Link>
              <Link className={Styles.img3}>
               
                <img src="/assets/1.png" alt="" />
              </Link>
              <Link className={Styles.img1}>
              
                <img src="/assets/3.png" alt="" />
              </Link>
              <Link  className={Styles.img2}>
             
                <img src="/assets/3.png" alt="" />
              </Link>
              <Link className={Styles.img5}>
           
                <img src="/assets/22.png" alt="" />
              </Link>
              <Link className={Styles.img6}>
               
                <img src="/assets/22.png" alt="" />
              </Link>
            </div>
            <div className={Styles.clientsRewiews}>
              <p className={Styles.para}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt is the most explicabo.
              </p>
        
              <p className={Styles.para2}>
              - Sara Smith
              </p>
              <p className={Styles.para3}>CEO ABC Company</p>
             
           </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
