// components/VerticalTimeline.jsx
import styles from "./style.module.scss";

const VerticalTimeline = ({ stepperContent = [], sectionHeight = "" }) => {
  return (
    <div className={styles.timeline}>
      {stepperContent.map((item, index) => (
        <div
          key={index}
          className={styles.timelineItem}
          style={{ minHeight: sectionHeight }}
        >
          <div className={styles.iconWrapper}>
            <img src={item.icon} />
          </div>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          {index < stepperContent.length - 1 && (
            <div className={styles.line}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
