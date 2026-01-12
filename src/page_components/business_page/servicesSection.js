"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles/styles.module.scss";
import { noop } from "lodash";

export default function ServicesSection({
  services = [],
  isMobile = false,
  onScroll = noop,
}) {
  const [active, setActive] = useState(0);

  const scrollMap = {
    "Professional Services": 3, // scroll to index 3
    "Managed IT": 8, // scroll to index 8
    Digital: 13, // scroll to index 13
  };

  return (
    <div className={styles.servicesSection}>
      {services.map((card, i) => (
        <div
          key={i}
          className={`${styles.card} ${active === i ? styles.active : ""}`}
          style={{
            backgroundColor:
              active === i || isMobile ? card.bgColor : "transparent",
          }} 
          onMouseEnter={() => setActive(i)}
          onMouseLeave={() => setActive(0)}
        >
          <div className={styles.content}>
            <h2>{card.title}</h2>
            {active === i || isMobile ? (
              <>
                <p>{card.description}</p>
                {isMobile ? (
                  <span onClick={() => onScroll(scrollMap[card.title])}>
                    Know More <span>→</span>
                  </span>
                ) : (
                  <button
                    className={styles.activeBtn}
                    onClick={() => onScroll(scrollMap[card.title])}
                  >
                    Know More <span>→</span>
                  </button>
                )}
              </>
            ) : (
              <button className={styles.btn}>
                Know More <span>→</span>
              </button>
            )}
          </div>
          {(active === i || isMobile) && (
            <div className={styles.imageWrapper}>
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={300}
                height={350}
                className={styles.image}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
