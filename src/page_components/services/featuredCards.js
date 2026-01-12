import styles from "./style.module.scss";

export default function FeaturedCards({ cardsData = {} }) {
  const cards = [
    {
      imgurl:
        "https://images.prismic.io/turing/ZmnLYJm069VX1sGP_image.png?auto=format%2Ccompress&fit=max&w=1080",
      type: "Video",
      title: "AGI Icons: Charting the future with Sam Altman",
      buttonLabel: "Watch",
    },
    {
      imgurl:
        "https://images.prismic.io/turing/ZmnLYJm069VX1sGP_image.png?auto=format%2Ccompress&fit=max&w=1080",
      type: "Article",
      title: "Understanding LLM Evaluation and Benchmarks: A Complete Guide",
      buttonLabel: "Read",
    },
    {
      imgurl:
        "https://images.prismic.io/turing/ZmnLYJm069VX1sGP_image.png?auto=format%2Ccompress&fit=max&w=1080",
      type: "Case Study",
      title:
        "Enhancing LLM Reasoning and Coding Capabilities through 50,000+ Tasks",
      buttonLabel: "Read",
    },
  ];

  return (
    <div>
      <main className={styles.featuredCards}>
        <div className={styles.cardGrid}>
          {cards.map((card, index) => {
            const {
              imgurl = "",
              type = "",  
              title = "",
              buttonLabel = "",
            } = card;
            return (
              <div className={styles.card} key={index}>
                <img src={imgurl} />
                <div className={styles.cardContent}>
                  <div className={styles.cardType}>{type}</div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <a href="#" className={styles.cardButton}>
                    {buttonLabel} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
