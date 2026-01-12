// components/Stepper.js
import { useState } from "react";
import styles from "./styles/style.module.scss";
import { verticalData } from "./landingPage.constants";
import { get, isEmpty } from "lodash";

const VerticalTabs = ({ theme = "", isMobile = false }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleRedirection = (redirectionLink) => {};

  const caseStudy = (caseStudy, redirectionLink) => {
    return isEmpty(caseStudy) ? null : (
      <div className={styles.caseStudyCard}>
        {/* <div className={styles.imageContainer}>
          <img src="/your-image.jpg" alt="Case Study Image" />
        </div> */}
        <div className={styles.content}>
          <div className={styles.label}>CASE STUDY</div>
          <h3 className={styles.title}>{caseStudy}</h3>
        </div>
        <button
          className={styles.readButton}
          onClick={() => handleRedirection(redirectionLink)}
        >
          Read
        </button>
      </div>
    );
  };

  return (
    <div className={styles.verticalTabsMain}>
      <div className={styles.verticalTabsHeader}>
        <h2 className={styles.heading}>
          Build & Deploy with our High Performance Engineering Teams
        </h2>
        <p className={styles.subHeading}>
          As a trusted service provider, Technozis is a leading player offering
          specialized tech practices across 100+ domains — from ServiceNow and
          data engineering to full-stack development — helping businesses solve
          complex implementation and delivery challenges with agility and
          precision.  
        </p>
      </div>
      <div className={styles.verticalTabsWrapper}>
        <div className={styles.stepperContainer}>
          <div className={styles.verticalLine}>
            {verticalData.map((step, index) => (
              <div
                key={index}
                className={`${styles.stepContainer} ${
                  activeStep === index ? styles.active : ""
                } ${styles[theme]}`}
                onClick={() => setActiveStep(index)}
              >
                <div className={styles.step}>
                  <div className={styles.label}>{step.label}</div>
                  {index === activeStep && (
                    <>
                      <div className={styles.description}>
                        {step.description}
                      </div>
                      {/* <button
                        className={`${styles.learnMore} ${styles[theme]}`}
                      >
                        Learn more
                      </button> */}

                      {isMobile && (
                        <>
                          <img src={step.imageUrl} alt="" />
                          {caseStudy(step.caseStudy, step.redirectionLink)}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {!isMobile && (
          <div className={styles.verticalTabRightSection}>
            <img src={get(verticalData[activeStep], "imageUrl")} alt="" />
            {caseStudy(
              get(verticalData[activeStep], "caseStudy"),
              get(verticalData[activeStep], "step.redirectionLink")
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalTabs;
