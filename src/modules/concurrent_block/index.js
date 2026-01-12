import React from "react";
import styles from "./style.module.scss";

const ConcurrentContent = ({ concurrentContent = {} }) => {
  const {
    imgAlignment = "",
    title = "",
    subTitle = "",
    imgUrl = "",
    descriptionHtml = "",
    bgColor = "",
  } = concurrentContent;

  return (
    <div
      className={styles.concurrentContent}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`${styles.contentWrapper} ${
          imgAlignment === "left" ? styles.leftAligned : styles.rightAligned
        }`}
      >
        {imgAlignment === "left" && (
          <img src={imgUrl} alt={title} className={styles.image} />
        )}
        <div
          className={`${styles.textContent} ${
            imgAlignment === "left" ? styles.leftAligned : styles.rightAligned
          }`}
        >
          {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
            className={styles.description}
          ></div>
        </div>
        {imgAlignment === "right" && (
          <img src={imgUrl} alt={title} className={styles.image} />
        )}
      </div>
    </div>
  );
};

export default ConcurrentContent;
