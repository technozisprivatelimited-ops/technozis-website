import { featureCardDetails } from "./landingPage.contants";
import styles from "../styles/style.module.scss";

const FeatureCards = () => {
  return (
    <div className={styles.featureCards}>
      {featureCardDetails.map((card, index) => (
        <div className={styles.card} key={index}>
          <img src={card.icon} />
          <p>{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
