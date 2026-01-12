import Image from "next/image";
import styles from "./styles.module.scss";

export default function CenterImageSection({ data = {}, isMobile = false }) {
  const {
    data: points = [],
    image = {},
    title = "",
    backgroundColor = "",
  } = data;
  // Split the list into two halves
  const mid = Math.ceil(points.length / 2);
  const leftPoints = points.slice(0, mid);
  const rightPoints = points.slice(mid);
  

  return (
    <div
      className={styles.infoShowcaseContainer}
      style={{ background: backgroundColor }}
    >
      <p className={styles.heading}>{title}</p>
      <div className={styles.wrapper}>
        {isMobile ? (
          <>
            {/* Left Image Section */}
            <div className={styles.left}>
              <img src={image.mobile} alt={title} className={styles.image} />
            </div>

            {/* Right Scrollable Section */}
            <div className={styles.right}>
              <div className={styles.scrollList}>
                {points.map((item, index) => (
                  <div className={styles.item} key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            {/* Left Side */}
            <div className={styles.side}>
              {leftPoints.map((point, idx) => (
                <div key={idx} className={styles.point}>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
            {/* Center Image */}
            <div className={styles.center}>
              {image && (
                <img
                  src={image.desktop}
                  alt="center"
                  className={styles.image}
                />
              )}
            </div>
            {/* Right Side */}
            <div className={`${styles.side} ${styles.right}`}>
              {rightPoints.map((point, idx) => (
                <div key={idx} className={styles.point}>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
