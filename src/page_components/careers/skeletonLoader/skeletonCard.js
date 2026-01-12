import styles from "./styles.module.scss";

const SkeletonCard = () => {
  return (
    <div className={styles.wrapper}>
      {[...Array(2)].map((_, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.title}></div>
          <div className={styles.description}></div>
          <div className={styles.description}></div>

          <div className={styles.dots}>
            {[...Array(3)].map((_, dotIndex) => (
              <span key={dotIndex}></span>
            ))}
          </div>

          <div className={styles.buttons}>
            <div className={`${styles.button} ${styles.primary}`}></div>
            <div className={`${styles.button} ${styles.secondary}`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
