import styles from "./styles/style.module.scss";
const Testimonial = () => {
  return (
    <div className={styles.testimonial__container}>
      <div className={styles.testimonial__content}>
        <p className={styles.testimonial__text}>
          “Technozis empowers organizations to accelerate their digital
          transformation by providing expert-driven solutions tailored to
          evolving business needs. &nbsp;
          <strong>
            Our premium professional services are trusted by Fortune 500
            companies worldwide, &nbsp;
          </strong>
          enabling them to seamlessly adapt, scale, and innovate without
          compromising on speed or quality.”
        </p>
        <div className={styles.footer}>
          <h2>
            We’re officially certified by Great Place to Work® and
            D-U-N-S®, reflecting our credibility and positive workplace
            culture.
          </h2>
          <div className={styles.certificates}>
            <div>
              <img src="/static/images/gptw-cert.png" alt="GPTW Certificate" />
            </div>
            <div className={styles.certificate2}>
              <img src="/static/images/duns.png" alt="DUNS Certificate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
