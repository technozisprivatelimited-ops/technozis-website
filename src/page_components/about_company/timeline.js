import { timelineData } from "./aboutCompany.constants";
import styles from "./style.module.scss";

export const Timeline = ({ isDesktop = true }) => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineWrapper}>
        <h2 className={styles.timelineHeader}>Our milestones</h2>
        <div
          className={`${styles.timeline} ${!isDesktop && styles.leftAligned}`}
        >
          <div className={styles.line}></div>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`${styles.event} ${
                index % 2 === 0 && isDesktop ? styles.left : styles.right
              }`}
            >
              <div className={styles.content}>
                <h3>{item.year}</h3>
                <ul>
                  {item.events.map((event, idx) => (
                    <li key={idx}>
                      {event
                        .split(" ")
                        .map((word, i) =>
                          [
                            "March",
                            "May",
                            "June",
                            "August",
                            "October",
                            "November",
                            "February",
                          ].includes(word) ? (
                            <strong key={i}>{word} </strong>
                          ) : (
                            <span key={i}>{word} </span>
                          )
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
