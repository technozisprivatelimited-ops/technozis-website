import Router from "next/router";
import {
  footerData,
  footerLinks,
  privacyPolicyHtml,
  termsAndConditions,
} from "./footer.constants";
import styles from "./style.module.scss";
import Link from "next/link";

const Footer = () => {
  const handleClick = (link) => {
    Router.push(link);
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <img
            src="/static/images/brand-logo.svg"
            className={styles.brandLogo}
          />
          <p className={styles.brandPromotion}>
            We help businesses build, deploy, and operate offering premium
            professional services on various tech stacks.
          </p>
          <div className={styles.footerLinks}>
            {footerLinks.map((item, index) => (
              <div className={styles.iconWithTooltip} key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className={styles.iconsBox}>
                    <img src={item.icon} alt="icon" />
                  </div>
                </a>
                <span className={styles.tooltip}>{item.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.contactInfo}>
            <p className={styles.locations}>India | Dubai | Australia | USA</p>
            <p className={styles.address}>
              DCG2-0210, DLF Corporate Green, Sector 74A, Gurugram, Haryana,
              122004
            </p>
            <p className={styles.email}>careers@technozis.com</p>
          </div>
        </div>
        {footerData.map((content, index) => (
          <div className={styles.contentWrapper} key={index}>
            <p className={styles.title}>{content.title}</p>
            {content.listItems.map((item, itemIdx) => (
              <div
                className={styles.listItem}
                key={itemIdx}
                onClick={() => handleClick(item.link)}
              >
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div id="duns-container" style={{ marginTop: "1rem" }}>
        <iframe
          src="https://profiles.dunsregistered.com/TpTpmsSeal.aspx?Domain=www.technozis.com&Directory="
          id="TpTpmsSealIFrm"
          width="115px"
          height="100px"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
      </div>
      <hr />
      <div className={styles.bottomSection}>
        <p className={styles.copyrightSection}>
          Copyright © 2025 Technozis. | All Rights Reserved |
        </p>
        <Link
          href={{
            pathname: "/static",
            query: {
              htmlContent: termsAndConditions,
              title: "Terms and Conditions",
            }, // Pass terms and conditions as a query parameter
          }}
          className={styles.terms}
        >
          Terms & Conditions |
        </Link>
        <Link
          href={{
            pathname: "/static",
            query: {
              htmlContent: privacyPolicyHtml,
              title: "Privacy Policy",
            },
          }}
          className={styles.terms}
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
