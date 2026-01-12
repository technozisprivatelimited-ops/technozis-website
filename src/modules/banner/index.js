import Button from "../button";
import styles from "./style.module.scss";

const BannerSection = ({ data = {} }) => {
  const {
    title = "",
    description = "",
    buttonText = "",
    buttonLink = "",
    backgroundImage = "",
  } = data;

  return (
    <div
      className={styles.bannerSection}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.bannerContent}>
        <div className={styles.textContainer}>
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{description}</p>
          {buttonText && <Button href={buttonLink} text={buttonText} />}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
