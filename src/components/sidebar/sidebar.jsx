import React, { useContext } from "react";
import styles from "./sidebar.module.css";
import classNames from "classnames";

import { AppContext } from "../../contexts/AppContextProvider";
import SidebarButton from "../sidebarButton/sidebarButton";

const Sidebar = ({ isBarsClicked, activeLink, setActiveLink }) => {
  const { currentTheme, sidebarLinksToDraw } = useContext(AppContext);

  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
    firstQuickLinks,
    secondQuickLinks,
    smallSidebarItems,
  } = sidebarLinksToDraw;

  return (
    <>
      {isBarsClicked ? (
        <div
          className={classNames(
            styles.largeContainer,
            currentTheme === "dark" && styles.dark
          )}
        >
          <div className={classNames(styles.section, styles.whiteIcon)}>
            {firstSection.map((item, index) => (
              <SidebarButton
                key={index}
                icon={item.icon}
                title={item.title}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            ))}
          </div>
          <div className={classNames(styles.section, styles.whiteIcon)}>
            {secondSection.map((item, index) => (
              <SidebarButton key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.subscriptions)}>
            <h3>subscriptions</h3>
            {thirdSection.map((item, index) => (
              <SidebarButton key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.whiteIcon)}>
            <h3>explore</h3>
            {fourthSection.map((item, index) => (
              <SidebarButton key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={styles.section}>
            <h3>more from youtube</h3>
            {fifthSection.map((item, index) => (
              <SidebarButton key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.whiteIcon)}>
            {sixthSection.map((item, index) => (
              <SidebarButton key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.bottomLinks)}>
            <div className={styles.first}>
              {firstQuickLinks.map((item, index) => (
                <a key={index} href="/">
                  {item}
                </a>
              ))}
            </div>
            <div className={styles.second}>
              {secondQuickLinks.map((item, index) => (
                <a key={index} href="/">
                  {item}
                </a>
              ))}
            </div>
            <div className={styles.third}>
              <p>© 2022 Google LLC YouTube, a Google company</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={classNames(
            styles.smallContainer,
            currentTheme === "dark" && styles.dark
          )}
        >
          {smallSidebarItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <img src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Sidebar;
