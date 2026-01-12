import styles from "./styles/styles.module.scss";

const OfferingCards = ({ data = {} }) => {
  const { title = "", cards = [] } = data;
  return (
    <section className={styles.offeringsWrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Our Core Offerings</h2>
        <div className={styles.flexbox}>
          {cards.map((s, i) => (
            <div className={styles.card} key={i}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
              <ul className={styles.list}>
                {s.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingCards;
