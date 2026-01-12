import React from "react";
import styles from "./style.module.scss";

const FlipCards = ({ data = {}, isMobile = false }) => {
  const {
    header = "",
    subHeader = "",
    bgColor = "",
    cardsData = [],
    iconBgColor = '',
  } = data;
  return (
    <div className={styles.flipCardsMain} style={{ backgroundColor: bgColor }}>
      <div className={styles.cardsWrapper}>
        <div className={styles.headerSection}>
          <h2 className={styles.heading}>{header}</h2>
          <div className={styles.sideSection}>
            <p>{subHeader}</p>
          </div>
        </div>
        <div className={styles.flipCardsContainer}>
          {cardsData.map((card) => (
            <div className={styles.card} key={card.id}>
              <div className={styles.cardInner}>
                <div className={styles.cardFront}>
                  <div
                    className={styles.iconBox}
                    style={{ backgroundColor: iconBgColor }}
                  >
                    <img src={card.icon} alt="icon" />
                  </div>
                  <p className={styles.label}>{card.label}</p>
                  {isMobile && <p>{card.description}</p>}
                </div>
                <div className={styles.cardBack}>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
