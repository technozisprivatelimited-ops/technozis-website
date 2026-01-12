// File: /components/ThemeSwitcher.js
import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleThemeChange = (newTheme) => {
      if (theme !== newTheme) {
        toggleTheme(newTheme);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by intersection ratio to prioritize the most visible section
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const topSectionId = visibleSections[0].target.id;
          const currentSection = sections.find((s) => s.id === topSectionId);
          if (currentSection) {
            handleThemeChange(currentSection.theme);
          }
        }
      },
      { threshold: 0.4 } // Trigger theme change when 40% of a section is visible
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [theme, toggleTheme]);

  return (
    <div>
      {sections.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`scrollable-section ${section.theme}`}
        >
          <h1>
            This is {section.theme} theme section {index + 1}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
