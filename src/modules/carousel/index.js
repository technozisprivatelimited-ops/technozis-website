import { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { isEmpty } from "lodash";

const Carousel = ({ isMobile = false, cards = [] }) => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null); // To store the auto-slide interval
  const [currentIndex, setCurrentIndex] = useState(cards.length); // Start at the first clone
  const [hoveredCard, setHoveredCard] = useState(null);

  const clonedCards = [...cards, ...cards, ...cards]; // Create the endless loop
  const slideDuration = 3000; // Time in milliseconds for auto-slide

  useEffect(() => {
    const startAutoSlide = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          slideToNext();
        }, slideDuration);
      }
    };

    const stopAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    if (hoveredCard === null) {
      startAutoSlide(); // Resume auto-slide when no card is hovered
    } else {
      stopAutoSlide(); // Stop auto-slide when a card is hovered
    }

    return () => stopAutoSlide(); // Cleanup on unmount
  }, [hoveredCard]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const totalCards = cards.length;

    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        setCurrentIndex(totalCards);
        carousel.style.transition = "none"; // Disable animation
        carousel.scrollTo({
          left: totalCards * carousel.firstChild.offsetWidth,
        });
      } else if (currentIndex === clonedCards.length - 1) {
        setCurrentIndex(totalCards - 1);
        carousel.style.transition = "none";
        carousel.scrollTo({
          left: (totalCards - 1) * carousel.firstChild.offsetWidth,
        });
      }
    };

    const carouselNode = carousel;
    carouselNode.addEventListener("transitionend", handleTransitionEnd);

    return () =>
      carouselNode.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex]);

  const updateCarouselScroll = (index) => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.firstChild.offsetWidth;
    const scrollLeft = index * cardWidth;
    carousel.style.transition = "transform 0.5s ease-in-out"; // Smooth scrolling
    carousel.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  const slideToNext = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    updateCarouselScroll(nextIndex);
  };

  const slideToPrev = () => {
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    updateCarouselScroll(prevIndex);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.heading}>
        <h2>Explore Our Impact Across Platforms</h2>
        {!isMobile && (
          <div className={styles.controls}>
            <button onClick={slideToPrev}>&lt;</button>
            <button onClick={slideToNext}>&gt;</button>
          </div>
        )}
      </div>
      <div className={styles.carousel} ref={carouselRef}>
        {clonedCards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index === currentIndex ? styles.active : ""
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.cardWrapper}>
              <div className={styles.imageWrapper}>
                <img src={card.image} alt={card.title} />
              </div>
              <div className={styles.content}>
                <p className={styles.type}>{card.type}</p>
                <h3 className={styles.title}>{card.title}</h3>
                {(isMobile || hoveredCard === index) && (
                  <p className={styles.description}>{card.description}</p>
                )}
              </div>
            </div>
            {!isEmpty(card.link) && (
              <div className={styles.link} href={card.link}>
                Read more &rarr;
              </div>
            )}
          </div>
        ))}
      </div>
      {isMobile && (
        <div className={styles.controls}>
          <button onClick={slideToPrev}>&lt;</button>
          <button onClick={slideToNext}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
