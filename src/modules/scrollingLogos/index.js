import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

const ScrollingLogos = ({ scrollingLogos = [], headline = "" }) => {
  const scrollingRef = useRef(null);

  useEffect(() => {
    // Duplicate content for seamless scrolling
    const scrollingContent = scrollingRef.current;
    if (scrollingContent) {
      scrollingContent.innerHTML += scrollingContent.innerHTML; // Duplicate content
    }
  }, []);

  return (
    <div className={styles.scrollingWrapper}>
      <div className={styles.scrollingContainer}>
        <div className={styles.scrollingContent} ref={scrollingRef}>
          {scrollingLogos.map((logo, index) => (
            <div className={styles.logoWrapper} key={index}>
              <img src={logo} alt="Company logo" width={100} height={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogos;

// import { useState, useEffect } from "react";
// import styles from "./style.module.scss";

// const AutoScrollLogos = () => {
//   const [logos, setLogos] = useState([
//     { name: "OpenAI", logo: "https://openai.com/favicon.ico" },
//     { name: "Gemini", logo: "https://www.google.com/favicon.ico" },
//     { name: "Meta", logo: "https://www.facebook.com/favicon.ico" },
//     { name: "Anthropic", logo: "https://www.anthropic.com/favicon.ico" },
//     { name: "Snowflake", logo: "https://www.snowflake.com/favicon.ico" },
//     { name: "Character.ai", logo: "https://www.character.ai/favicon.ico" },
//     { name: "NVIDIA", logo: "https://www.nvidia.com/favicon.ico" },
//   ]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
//     }, 3000); // Adjust the interval for scrolling speed (in milliseconds)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.container}>
//       <div className={styles.scrollContainer}>
//         {logos.map((logo, index) => (
//           <div key={index} className={styles.logoContainer}>
//             <img src={logo.logo} alt={logo.name} className={styles.logo} />
//             <span className={styles.logoName}>{logo.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AutoScrollLogos;

// import React, { useEffect, useRef, useState } from "react";
// import styles from "./style.module.scss";

// const Logos = () => {
//   const [logoIndex, setLogoIndex] = useState(0);
//   const logoContainerRef = useRef(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const logos = logoContainerRef.current.children;
//       setLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className={styles.logoContainer} ref={logoContainerRef}>
//       <div
//         className={styles.logos}
//         style={{ transform: `translateX(-${logoIndex * 100}%)` }}
//       >
//         <div className={styles.logo}>
//           <img src="/images/openai-logo.png" alt="OpenAI" />
//         </div>
//         <div className={styles.logo}>
//           <img src="/images/gemini-logo.png" alt="Gemini" />
//         </div>
//         <div className={styles.logo}>
//           <img src="/images/meta-logo.png" alt="Meta" />
//         </div>
//         <div className={styles.logo}>
//           <img src="/images/anthropic-logo.png" alt="Anthropic" />
//         </div>
//         <div className={styles.logo}>
//           <img src="/images/snowflake-logo.png" alt="Snowflake" />
//         </div>
//         <div className={styles.logo}>
//           <img src="/images/character-ai-logo.png" alt="Character.ai" />
//         </div>
//         <div className={styles.logo}>
//           <img src="/images/nvidia-logo.png" alt="Nvidia" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Logos;
