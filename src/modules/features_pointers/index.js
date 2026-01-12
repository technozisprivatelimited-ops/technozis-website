import styles from "./style.module.scss";

export default function FeaturePointers({ data = {} }) {
  const { header = "", points = [], bgColor = "" } = data;
  return (
    <div
      className={styles.featurePointersMain}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.featurePointersContainer}>
        <p className={styles.heading}>{header}</p>
        <div className={styles.featurePointersWrapper}>
          {points.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <img src={feature.icon} alt="" className={styles.icon} />
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
