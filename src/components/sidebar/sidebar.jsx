import React, { Fragment, useContext } from "react";
import styles from "./sidebar.module.css";
import classNames from "classnames";

import { ThemeContext } from "../../contexts/ThemeContextProvider";
import {
  firstSection,
  secondSection,
  thirdSection,
  fourthSection,
  fifthSection,
  sixthSection,
  firstQuickLinks,
  secondQuickLinks,
  smallSidebarItems,
} from "../../data/sidebarLinks";

const Button = ({ icon, title }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <button
      className={classNames(styles.btn, currentTheme === "dark" && styles.dark)}
    >
      {" "}
      <img src={icon} alt={title} /> <span>{title}</span>
    </button>
  );
};

const Sidebar = ({ isBarsClicked }) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <Fragment>
      {isBarsClicked ? (
        <div
          className={classNames(
            styles.largeContainer,
            currentTheme === "dark" && styles.dark
          )}
        >
          <div className={classNames(styles.section, styles.whiteIcon)}>
            {firstSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.whiteIcon)}>
            {secondSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.subscriptions)}>
            <h3>subscriptions</h3>
            {thirdSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.whiteIcon)}>
            <h3>explore</h3>
            {fourthSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={styles.section}>
            <h3>more from youtube</h3>
            {fifthSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.whiteIcon)}>
            {sixthSection.map((item, index) => (
              <Button key={index} icon={item.icon} title={item.title} />
            ))}
          </div>
          <div className={classNames(styles.section, styles.bottomLinks)}>
            <div className={styles.first}>
              {firstQuickLinks.map((item, index) => (
                <a key={index} href="#">
                  {item}
                </a>
              ))}
            </div>
            <div className={styles.second}>
              {secondQuickLinks.map((item, index) => (
                <a key={index} href="#">
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
    </Fragment>
  );
};

export default Sidebar;
