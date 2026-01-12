import styles from "./style.module.scss";

const CardsGrid = ({
  data: cardsData = [
    {
      title: "Global Exposure",
      description:
        "Work with global clients across industries and geographies.",
      icon: "globe", // assumes .globe is defined in style.module.scss
      size: "medium",
    },
    {
      title: "Continuous Learning",
      description: "Access mentorship, certifications, and hands-on training.",
      icon: "book", // replace with appropriate class from styles
      size: "medium",
    },
    {
      title: "Meaningful Projects",
      description:
        "Deliver impactful work that drives business transformation.",
      icon: "project", // replace with appropriate class from styles
      size: "medium",
    },
    {
      title: "Career Progression",
      description: "Structured growth paths tailored to your ambitions.",
      icon: "arrowUp", // replace with appropriate class from styles
      size: "medium",
    },
    {
      title: "Life at Technozis",
      description: "Supportive culture, hybrid work, and exciting rewards.",
      image: "/static/images/life-technozis.jpg", // if image is provided, icon won't be used
      size: "large",
    },
  ],
}) => {
  return (
    <div className={styles.grid}>
      {cardsData.map((card, index) => {
        const { title, description, image, icon, size } = card;
        return (
          <div className={`${styles.card} ${styles[size]}`} key={index}>
            {image ? (
              <img src={image} alt={title} className={styles.image} />
            ) : (
              <div className={`${styles.icon} ${styles[icon]}`} />
            )}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardsGrid;
