import React from "react";
import styles from "./style.module.scss";

const cards = [
  {
    title: "AI implementation advisor",
    description:
      "Craft a successful AI strategy that reveals valuable use cases and implements technology to optimize your AI investment.",
    image: null,
  },
  {
    title: "AI transformation accelerator",
    description:
      "Fast-track your AI adoption in just 30 days—combine strategy and POC models for immediate, impactful business solutions.",
    image: "/images/ai_transformation.jpg",
  },
  {
    title: "Data engineering",
    description:
      "Harness your data's true power by shaping your data assets for precision training and AI model excellence.",
    image: null,
  },
  {
    title: "ML operations",
    description:
      "Automate and streamline your ML lifecycle for increased efficiency and scale, ensuring your focus remains on innovation.",
    image: null,
  },
  {
    title: "ML model development",
    description:
      "Develop, train, and deploy impactful ML models, driving lasting value for your business.",
    image: null,
  },
  {
    title: "AI talent as a service (TaaS)",
    description:
      "Tap into our network of vetted technical professionals for developers, data scientists, and more on demand.",
    image: null,
  },
];

const MultiCard = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className={styles.cardImage}
              />
            )}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiCard;
