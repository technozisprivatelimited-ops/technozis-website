import React from "react";
import Image from "next/image";
import styles from "./styles/style.module.scss";
import { pathSteps } from "./careers.constants";
import Button from "@/modules/button";
import { noop } from "lodash";

const PathSection = ({ handleButtonClick = noop }) => {
  return (
    <div className={styles.pathWrapper}>
      {pathSteps.map((step, index) => (
        <div key={index} className={styles.stepContainer}>
          <div className={styles.leftSection}>
            <div className={styles.iconCircle}>
              <span>{step.id}</span>
            </div>
            <div className={styles.textContent}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
          <div className={styles.rightSection}>
            <Image
              src={step.image}
              alt={`${step.title} Illustration`}
              width={460}
              height={300}
              className={styles.stepImage}
            />
          </div>
        </div>
      ))}
      <Button
        className={styles.viewJobs}
        text="View Opportunitites"
        borderRadius="40px"
        bgColor="#2388FF"
        color="#fff"
        handleButtonClick={handleButtonClick}
      ></Button>
    </div>
  );
};

export default PathSection;
