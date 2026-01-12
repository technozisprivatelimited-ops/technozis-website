import { useEffect, useState } from "react";
import styles from "./styles/style.module.scss";

export default function StatsMedia({ theme, isDesktop = false }) {
  const [logosImages, setLogosImages] = useState([
    {
      bgImg: "/static/images/focus-area-1.png",
      label: "ESM",
      description:
        "Empowering businesses with expert ServiceNow solutions through our Elite Service Management (ESM) team.",
    },
    {
      bgImg: "/static/images/focus-area-2.png",
      label: "Oracle Suite",
      description:
        "Streamlining enterprise operations with end-to-end solutions from our Oracle Suite expertise.",
    },
    {
      bgImg: "/static/images/focus-area-3.png",
      label: "Microsoft",
      description:
        "Optimizing enterprise performance with integrated solutions from the Oracle E-Business Suite.",
    },
    {
      bgImg: "/static/images/focus-area-4.png",
      label: "Cloud and Infra",
      description:
        "Scalable, secure, and efficient Cloud & Infrastructure solutions to power your digital transformation.",
    },
  ]);

  return (
    <>
      <div className={styles.statsMediaContainer}>
        <div className={styles.headingSection}>
          <h1>
            Our Community of <br />
            Tech Practitioners
          </h1>
          <p>
            In a time of rapid digital transformation, Technozis stands out with
            the perfect blend of domain expertise, real-world project delivery,
            and access to top-tier engineering talent. Whether it’s building
            robust enterprise systems, scaling development teams, or driving
            innovation across ServiceNow, data engineering, and full-stack
            development — Technozisdelivers with speed, precision, and
            reliability.
          </p>
        </div>
        <div className={styles.mediaSection}>
          <div>
            <img
              src="/static/images/community-section.png"
              alt="Woman with headset"
              className={styles.mediaImage}
            />
          </div>
          <div className={styles.statsWrapper}>
            <div className={styles.stat}>
              <h2>10+</h2>
              <p>industries innovated</p>
            </div>
            <div className={styles.stat}>
              <h2>50k+</h2>
              <p>community members</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <div className={styles.text}>
          <h2>Area of practice</h2>
        </div>
        <div className={styles.logos}>
          {logosImages.map((logo, index) => (
            <div
              className={`${styles.logo} ${styles[theme]}`}
              key={index}
              style={
                {
                  // backgroundImage: `url(${logo.bgImg})`,
                  // backgroundSize: "cover",
                  // backgroundRepeat: "no-repeat",
                }
              } // Set background image here
            >
              {/* <img src={logo.bgImg} /> */}
              <div className={styles.label}>{logo.label}</div>{" "}
              {isDesktop && (
                <div className={styles.description}>{logo.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
