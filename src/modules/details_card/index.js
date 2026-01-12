import { isEmpty } from "lodash";
import ConcurrentText from "../concurrent_text";
import styles from "./style.module.scss";

const DetailsCards = ({ data = {} }) => {
  const {
    detailsTiles = [],
    header = "",
    bgColor = "",
    iconBgColor = "",
    subHeader = "",
    columnsNumber = 3,
    border = "none",
    cardHeight = "",
    iconSize = "",
    descriptionSize = "",
  } = data;

  return (
    <div className={styles.quickViewCards} style={{ background: bgColor }}>
      <div className={styles.quickViewCardsSection}>
        <div className={styles.headerSection}>
          <p className={styles.heading}>{header}</p>
          <p className={styles.subHeader}>{subHeader}</p>
        </div>

        <div
          className={`${styles.cardsWrapper} ${
            columnsNumber === 4 ? styles.columns4 : styles.columns3
          }`}
        >
          {detailsTiles.map((tile, idx) => (
            <div
              className={`${styles.cardContainer} ${
                border !== "none" ? styles.withBorder : ""
              }`}
              style={{ border: border, height: cardHeight }}
              key={idx}
            >
              {!isEmpty(tile.icon) && (
                <div
                  className={styles.cardIcon}
                  style={{ backgroundColor: iconBgColor }}
                >
                  <img
                    src={tile.icon}
                    className={
                      iconSize === "full" ? styles.fullSizeImg : styles.cardImg
                    }
                  />
                </div>
              )}
              <p className={styles.cardTitle}>{tile.label}</p>
              <p
                className={styles.cardDescription}
                style={{
                  fontSize: descriptionSize,
                }}
              >
                {tile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DetailsCards;
