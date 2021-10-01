import React, { useState } from "react";
import Card from "../Card/Card";
import Styles from "./Portfolio.module.css";
import apri from "./images/apri.png";
import bane from "./images/bane.png";
import v1 from "./images/v1.png";
import nalie from "./images/nalie.png";
import abad from "./images/abad.png";
const Portfolio = () => {
  const allcards = [
    { image: apri },
    { image: bane },
    { image: v1 },
    { image: abad },
    { image: bane },
    { image: nalie },
  ];
  const reactCards = [{ image: nalie }, { image: nalie }];
  const phpCards = [{ image: nalie }, { image: abad }, { image: bane }];
  const nodeCards = [{ image: bane }, { image: v1 }, { image: apri }];
  const [cardData, setCardData] = useState(allcards);

  const handleTab = (data) => {
    setCardData(data);
  };

  return (
    <div className={Styles.portfolioSection}>
      <div className="container">
        <div className={Styles.titleStyle}>
          <h2>Portfolio</h2>
          
        </div>
        <div className={Styles.tabsWrapperButton}>
          <button
            className={Styles.tablinks}
            onClick={() => handleTab(allcards)}
          >
            All
          </button>
          <button
            className={Styles.tablinks}
            onClick={() => handleTab(reactCards)}
          >
            React
          </button>
          <button
            className={Styles.tablinks}
            onClick={() => handleTab(phpCards)}
          >
            Php
          </button>
          <button
            className={Styles.tablinks}
            onClick={() => handleTab(nodeCards)}
          >
            Node
          </button>
        </div>
        <div className={Styles.tabsWrapper}>
          {cardData.map((item) => {
            return <Card eachCard={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
