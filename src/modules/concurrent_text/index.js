import styles from "./style.module.scss";

const ConcurrentText = ({ data = {} }) => {
  const {
    title = "",
    description = "",
    background = "",
    buttonText = "",
    padding = "",
    redirectionLink = "",
    applyBgToParent = true,
  } = data;

  console.log(data);

  return (
    <div
      className={`${styles.concurrentText} ${
        !applyBgToParent ? styles.childBg : ""
      }`}
      style={applyBgToParent ? { background, padding } : { padding }}
    >
      <div
        className={`${styles.content} ${!applyBgToParent ? styles.withBg : ""}`}
        style={!applyBgToParent ? { background } : {}}
      >
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.rightContainer}>
          <p className={styles.description}>{description}</p>
          {buttonText && (
            <a href={redirectionLink} target="_blank">
              <button className={styles.button}>{buttonText}</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConcurrentText;
