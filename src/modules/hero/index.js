import Button from "@/modules/button";
import styles from "./style.module.scss";
import ScrollingLogos from "../scrollingLogos";
import { isEmpty, noop } from "lodash";

const Hero = ({ data: heroData = {}, isMobile = false }) => {
  const {
    main = "",
    partners = {},
    alignment = "",
    handleButtonClick = noop,
  } = heroData;
  const {
    title = "",
    description = "",
    subTitle = "",
    buttonContext = {},
    bgMainImg = "",
    bgColor = "",
    textAlign = "",
    descriptionFont = {},
    titleSize = "",
    bannerHeight = "100vh",
  } = main;
  const { headline = "", scroll = true, logos = [] } = partners;

  // const { isMobile } = useMedia();
  const deviceType = isMobile ? "mobile" : "desktop";

  return (
    <>
      <div
        className={`${styles.mainHeroContainer} ${styles.fullHeight} ${styles[alignment]}`}
        style={{
          backgroundImage: `url('${bgMainImg[deviceType]}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: bgColor,
          height: bannerHeight,
        }}
      >
        <div
          className={`${styles.mainPageWrapper} ${styles[alignment]}`}
          style={{ textAlign: textAlign }}
        >
          <div className={styles.mainPageTopContent}>
            {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
            <div className={styles.heroTitle} style={{ fontSize: titleSize }}>
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
            </div>
            <div
              className={styles.heroSubTitle}
              style={{ fontSize: descriptionFont.size }}
            >
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            {buttonContext?.label && (
              <Button
                text={buttonContext.label}
                bgColor={buttonContext.bgColor}
                color={buttonContext.color}
                width={buttonContext.width || (isMobile ? "full" : "")}
                borderRadius={buttonContext.borderRadius || "40px"}
                handleButtonClick={handleButtonClick}
              />
            )}
          </div>
        </div>

        {/* Sticky bottom logo row */}
        {!isEmpty(logos) && scroll && (
          <div className={styles.stickyLogosWrapper}>
            <ScrollingLogos scrollingLogos={logos} />
          </div>
        )}
      </div>

      {!isEmpty(logos) && !scroll && (
        <div className={styles.partnersSegment}>
          <div className={styles.partnersWrapper}>
            <p className={styles.partnersTitle}>{headline}</p>
            <div className={styles.partnerLogos}>
              {logos.map((logo, idx) => (
                <div key={idx}>
                  <img src={logo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
