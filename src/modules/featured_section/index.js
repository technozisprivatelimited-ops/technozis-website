import styles from "./style.module.scss";

const FeaturedSection = ({ isMobile = true }) => {

  return (
    <div className={styles.featuredContainer}>
      <div className={`${styles.featuredContent} ${styles.highlightSection}`}>
        <h1 className={styles.featuredTitle}>
          Empowering Enterprises with ServiceNow Excellence
        </h1>
        <p className={styles.featuredDescription}>
          At Technozis, we specialize in delivering end-to-end ServiceNow
          solutions that streamline operations, drive digital transformation,
          and boost business efficiency. With a deep bench of certified
          ServiceNow professionals, we help organizations leverage the full
          power of the platform across ITSM, ITOM, HRSD, SecOps, and more.
          Whether you’re looking to implement ServiceNow from the ground up,
          optimize an existing setup, or augment your team with top-tier talent,
          Technozis is your trusted partner.
        </p>
        {/* <button className={styles.featuredButton}>Download</button> */}
      </div>

      {/* Image Section */}
      {!isMobile && displayImage()}
    </div>
  );
};

export default FeaturedSection;
