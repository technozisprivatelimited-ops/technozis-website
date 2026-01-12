import React, { Fragment, useState, useRef, useEffect } from "react";
import Head from "next/head";
import { isEmpty } from "lodash";
import Router from "next/router";
import { TiArrowSortedDown } from "react-icons/ti";
import HamburgerMenu from "../hamburger_menu/index.js";
import { headerData } from "./header.constants.js";
import styles from "./style.module.scss";

const Header = ({ isMobile, isDesktop }) => {
  const [activeHead, setActiveHead] = useState(null);
  const [leftPosition, setLeftPosition] = useState(0);
  const headerRefs = useRef([]); // Array to store references for each header item
  const timeoutRef = useRef(null); // Ref to manage delayed dropdown close

  const handleDropDown = (show, index) => {
    if (show) {
      // Clear any existing timeout to avoid premature closing
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveHead(index);
    } else {
      // Set a timeout to close the dropdown after 0.5 seconds
      timeoutRef.current = setTimeout(() => {
        setActiveHead(null);
      }, 500);
    }
  };

  // Calculate the position when activeHead changes
  useEffect(() => {
    if (activeHead !== null && headerRefs.current[activeHead]) {
      const rect = headerRefs.current[activeHead].getBoundingClientRect();
      setLeftPosition(rect.left); // Update the left position of the active header
    }
  }, [activeHead]);

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveHead(null);
    };

    Router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);


  const handleTabClick = (redirectionLink) => {
    if (!redirectionLink) return;
    Router.push(redirectionLink);
  };

  return (
    <Fragment>
      <Head>
        <link rel="preload" as="image" />
      </Head>
      <header
        className={`${styles.mainHeader} ${isMobile ? styles.mobile : ""}`}
      >
        <div className={styles.mainHeaderContainer}>
          <div className={styles.logo}>
            <img
              src="/static/images/brand-logo.svg"
              onClick={() => Router.push("/")}
            />
          </div>
          <div className={styles.headerOptions}>
            {isDesktop ? (
              headerData.map((header, index) => (
                <div
                  key={index}
                  ref={(el) => (headerRefs.current[index] = el)} // Attach ref dynamically
                  className={`${styles.header} ${
                    isEmpty(header.subSegment) ? "" : styles.dropdown
                  }`}
                  onMouseEnter={() => handleDropDown(true, index)}
                  onMouseLeave={() => handleDropDown(false, index)}
                  onClick={() => handleTabClick(header.redirectionLink)}
                >
                  <p>{header.headLabel}</p>
                  {!isEmpty(header.subSegment) && (
                    <>
                      <TiArrowSortedDown />
                      {activeHead === index && (
                        <div
                          className={`${styles.dropdownMenu} ${
                            header.subSegment.length < 5 ? styles.short : ""
                          }`}
                          style={{
                            left:
                              header.subSegment.length > 5 ? 100 : leftPosition,
                          }}
                          onMouseEnter={() => handleDropDown(true, index)} // Prevent closing when cursor moves to dropdown
                          onMouseLeave={() => handleDropDown(false, index)} // Allow delayed closing
                        >
                          <div
                            className={`${styles.dropDownWrapper} ${
                              header.subSegment.length > 5
                                ? styles.doubleGrid
                                : ""
                            }`}
                          >
                            {header.subSegment.map((menuItem, subIndex) => (
                              <div
                                key={subIndex}
                                className={styles.menuItem}
                                onClick={() =>
                                  handleTabClick(menuItem.redirectionLink)
                                }
                              >
                                {!isEmpty(menuItem.icon) && (
                                  <div className={styles.iconWrapper}>
                                    <img src={menuItem.icon} alt="icon" />
                                  </div>
                                )}
                                <div>
                                  <h2 className={styles.title}>
                                    {menuItem.title}
                                  </h2>
                                  <p className={styles.subTitle}>
                                    {menuItem.subtitle}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))
            ) : (
              <HamburgerMenu />
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
