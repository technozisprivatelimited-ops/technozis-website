// components/Stepper.js
import { useState } from "react";
import styles from "./styles/style.module.scss";

const steps = [
  {
    title: "Train the highest-quality LLMs",
    description:
      "Accelerate your LLM's reasoning and coding capabilities with expert model training. Generate high-quality, proprietary human data for SFT, RLHF, and DPO.",
    buttonText: "Learn more",
  },
  {
    title: "Evaluate your model performance",
    description: "",
    buttonText: "",
  },
  {
    title: "Improve your model factuality",
    description: "",
    buttonText: "",
  },
];

const VerticalContent = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={styles.stepper}>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`${styles.step} ${
              index === activeStep ? styles.active : ""
            }`}
            onClick={() => setActiveStep(index)}
          >
            <span className={styles.title}>{step.title}</span>
            <span className={styles.line}></span>
          </div>
        ))}
      </div>

      <div className={styles.description}>
        {steps[activeStep].description && (
          <>
            <h2>{steps[activeStep].title}</h2>
            <p>{steps[activeStep].description}</p>
            {steps[activeStep].buttonText && (
              <button>{steps[activeStep].buttonText}</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VerticalContent;
