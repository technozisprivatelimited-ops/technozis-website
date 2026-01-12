import { useContext, useEffect, useRef } from "react";
import VerticalTabs from "./verticalTabs";
import Hero from "../../modules/hero";
import styles from "./styles/style.module.scss";
import Testimonial from "./testimonial";
import StatsMedia from "./statsMedia";
import ThemeContext from "@/modules/theme_provider";
import CaseStudiesCarousel from "@/modules/carousel";
import FeaturedSection from "@/modules/featured_section";
import BannerSection from "@/modules/banner";
import useMedia from "@/hooks/useMedia";
import { bannerSectionData, mainTopHeroData } from "./landingPage.constants";
import VedioMediaSegment from "./videoMediaSegment";
import { carouselCards } from "./landingPage.constants";

const LandingPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isMobile, isDesktop } = useMedia();
  const sectionRefs = useRef([]);
  const mainRef = useRef(null);

  // Updated sections with added IDs and themes
  const sections = [
    { id: "mainPage", theme: "dark" },
    { id: "testimonial", theme: "dark" },
    { id: "statsMedia", theme: "light" },
    { id: "vericalTabs", theme: "dark" },
    { id: "videoSection", theme: "light" }, // VideoSection - light theme
    { id: "carousel", theme: "dark" },
    { id: "featuredSection", theme: "light" }, // FeaturedSection - light theme
    { id: "bannerSection", theme: "dark" }, // BannerSection - dark theme
  ];

  useEffect(() => {
    const handleThemeChange = (newTheme) => {
      if (theme !== newTheme) {
        document.body.classList.add("theme-transitioning");

        // Allow transition to apply
        setTimeout(() => {
          toggleTheme(newTheme);
        }, 100); // slight delay to allow transition to be detected

        // Remove transition class after theme change
        setTimeout(() => {
          document.body.classList.remove("theme-transitioning");
        }, 100); // match CSS transition duration
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
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
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [theme, toggleTheme]);

  return (
    <div
      className={`${styles.landing_page_container} ${styles[theme]}`}
      ref={mainRef}
    >
      <div
        id="mainPage"
        ref={(el) => (sectionRefs.current[0] = el)}
        className={styles.main_page_wrapper}
      >
        <Hero
          data={mainTopHeroData}
          isMobile={isMobile}
          isDesktop={isDesktop}
        />
      </div>
      <div className={`${styles.landing_page_main} ${styles[theme]}`}>
        <div className={`${styles.landing_page_wrapper} ${styles[theme]}`}>
          <div
            id="testimonial"
            ref={(el) => (sectionRefs.current[1] = el)}
            className={styles.testimonial_wrapper}
          >
            <Testimonial />
          </div>
          <div
            id="statsMedia"
            ref={(el) => (sectionRefs.current[2] = el)}
            className={styles.stats_media_container}
          >
            <StatsMedia theme={theme} isDesktop={isDesktop} />
          </div>
          <div
            id="vericalTabs"
            ref={(el) => (sectionRefs.current[3] = el)}
            className={styles.vertical_tabs_wrapper}
          >
            <VerticalTabs
              theme={theme}
              isMobile={isMobile}
              isDesktop={isDesktop}
            />
          </div>

          <div
            id="videoSection"
            ref={(el) => (sectionRefs.current[4] = el)}
            className={`${styles.video_section_wrapper} ${styles.light}`}
          >
            <VedioMediaSegment />
          </div>
        </div>

        <div
          id="carousel"
          ref={(el) => (sectionRefs.current[5] = el)}
          className={styles.carousel_wrapper}
        >
          <CaseStudiesCarousel isMobile={isMobile} cards={carouselCards} />
        </div>
        <div className={styles.landing_page_wrapper}>
          <div
            id="featuredSection"
            ref={(el) => (sectionRefs.current[6] = el)}
            className={`${styles.featured_section_wrapper} ${styles[theme]}`}
          >
            <FeaturedSection />
          </div>
        </div>

        <div
          id="bannerSection"
          ref={(el) => (sectionRefs.current[7] = el)}
          className={`${styles.banner_section_wrapper} ${styles.dark}`}
        >
          <BannerSection data={bannerSectionData} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
