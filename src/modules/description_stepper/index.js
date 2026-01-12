import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import VerticalTimeline from "./verticalStepper";

export default function DescriptionStepper({ data }) {
  const leftDivRef = useRef();
  const mainContainerRef = useRef();
  const [activeHeading, setActiveHeading] = useState(
    data?.heading || "Initial Heading"
  );
  const [isAtTop, setIsAtTov] = useState(false);
  const [scrolledUpThreshold, setScrolledUpThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mainContainerRef.current) {
        const rect = mainContainerRef.current.getBoundingClientRect();
        setIsAtTov(rect.top <= 70);

        const divHeight = rect.height;
        const visibleHeight = Math.max(
          0,
          Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top)
        );

        // Calculate the percentage of the div that's visible
        const visiblePercentage = (visibleHeight / divHeight) * 100;

        // Check if at least 60% of the div is visible
        setScrolledUpThreshold(visiblePercentage >= 60);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.descriptionStepperContainer} ref={mainContainerRef}>
      <div className={styles.descriptionStepper}>
        <div ref={leftDivRef} className={styles.leftSection}>
          <div className={styles.containerHeading}>
            <h2>{activeHeading}</h2>
            <p>{data.subHeading}</p>
          </div>
        </div>
        <div className={styles.rightSection}>
          <VerticalTimeline
            stepperContent={data.steps || []}
            sectionHeight={data.sectionHeight}
          />
        </div>
      </div>
    </div>
  );
}
