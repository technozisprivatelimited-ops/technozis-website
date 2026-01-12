// const FeaturedResourcesCards = () => {
//  return (
//     <div className={styles.resourcesCardsContainer}>
//         <div className={styles.cardsWrapper}>
//             <img src='' />
//             <div className={styles.contentSection}>
//                 <p className={styles.type}></p>
//                 <p className={styles.title}></p>
//                 <p className={styles.link}></p>
//             </div>
//         </div>
//     </div>
//  )
// }

// export default FeaturedResourcesCards

import React from "react";
import styles from "./style.module.scss";

const FeaturedResources = () => {
  const cardData = [
    {
      type: "Article",
      title: "8 ways AI can supercharge your application development",
      image: "https://images.prismic.io/turing/Zpn1SB5LeNNTxSn6_Hero_Image-4-.png?auto=format%2Ccompress&fit=max&w=1080", 
    },
    {
      type: "Blog",
      title: "Navigating AI transformation challenges: A complete overview",
      image: "https://images.prismic.io/turing/Zpn1SB5LeNNTxSn6_Hero_Image-4-.png?auto=format%2Ccompress&fit=max&w=1080", 
    },
    {
      type: "Blog",
      title: "5 Key considerations for building an AI implementation strategy",
      image: "https://images.prismic.io/turing/Zpn1SB5LeNNTxSn6_Hero_Image-4-.png?auto=format%2Ccompress&fit=max&w=1080", 
    },
  ];

  return (
    <div className={styles.featuredResoucesContainer}>

      {cardData.map((card, index) => (
        <div className={styles.card} key={index}>
          <img src={card.image} alt={card.title} className={styles.image} />
          <div className={styles.content}>
            <span className={styles.type}>{card.type}</span>
            <h3 className={styles.title}>{card.title}</h3>
            <a href="#" className={styles.link}>
              Read <span>→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedResources;
