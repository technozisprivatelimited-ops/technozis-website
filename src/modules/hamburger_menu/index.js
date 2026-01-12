import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { headerData } from "../header/header.constants";
import { isEmpty } from "lodash";
import Router from "next/router";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownData, setDropdownData] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleExpansion = (data, index) => {
    if (isEmpty(data)) {
      setDropdownData([]);
      setActiveMenuItem(null);
    } else {
      setDropdownData(data);
      setActiveMenuItem(index);
    }
  };

  const handleRouting = (redirectionLink) => {
    if (!redirectionLink) return;
    Router.push(redirectionLink);
  };

  useEffect(() => {
    const closeMenuOnRouteChange = () => {
      setIsOpen(false); // Close the hamburger menu
      setDropdownData([]); // Reset any dropdown data
      setActiveMenuItem(null); // Reset active menu item
    };

    // Listen for route changes
    Router.events.on("routeChangeStart", closeMenuOnRouteChange);

    // Cleanup the event listener
    return () => {
      Router.events.off("routeChangeStart", closeMenuOnRouteChange);
    };
  }, []);

  return (
    <div className={styles.hamburgerContainer}>
      {/* Hamburger Icon */}
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        {[...Array(3)].map((_, idx) => (
          <div className={styles.bar} key={idx}></div>
        ))}
      </div>

      {/* Menu Overlay */}
      {isOpen && (
        <div className={`${styles.menuOverlay} ${styles.visible}`}>
          <ul className={styles.menuList}>
            {headerData.map((headItem, index) => (
              <li key={index}>
                <div
                  className={styles.menuItem}
                  onClick={() =>
                    !isEmpty(headItem.subSegment)
                      ? activeMenuItem === index
                        ? handleExpansion([], null)
                        : handleExpansion(headItem.subSegment, index)
                      : handleRouting(headItem.redirectionLink)
                  }
                >
                  <p>{headItem.headLabel}</p>
                  {!isEmpty(headItem.subSegment) && (
                    <>
                      {activeMenuItem === index ? (
                        <MdKeyboardArrowUp />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
                    </>
                  )}
                </div>

                {/* SubSegment Dropdown */}
                {activeMenuItem === index && !isEmpty(dropdownData) && (
                  <div className={styles.subSegment}>
                    {dropdownData.map((data, idx) => (
                      <div
                        className={styles.subSegmentItem}
                        key={idx}
                        onClick={() => handleRouting(data.redirectionLink)}
                      >
                        <p className={styles.title}>{data.title}</p>
                        <p className={styles.subTitle}>{data.subtitle}</p>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
