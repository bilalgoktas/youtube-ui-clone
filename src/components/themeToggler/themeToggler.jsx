import React from "react";
import icons from "../../icons";
import styles from "./themeToggler.module.css";
import classNames from "classnames";

const ThemeToggler = ({
  setThemeTogglerOpen,
  setDrawerOpen,
  setDarkTheme,
  darkTheme,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <button
          className={styles.backButton}
          onClick={() => {
            setDrawerOpen(true);
            setThemeTogglerOpen(false);
          }}
        >
          <img src={icons.backArrow} />
        </button>
        <span>Appearance</span>
      </div>
      <div className={styles.listContainer}>
        <button>
          <img className={styles.checkIcon} src={icons.check} />
          <span>Use device theme</span>
        </button>
        <button
          onClick={() => {
            setDarkTheme(true);
            setDrawerOpen(false);
            setThemeTogglerOpen(false);
          }}
        >
          <img
            className={classNames(
              styles.checkIcon,
              darkTheme && styles.checked
            )}
            src={icons.check}
          />
          <span>Dark theme</span>
        </button>
        <button
          onClick={() => {
            setDarkTheme(false);
            setDrawerOpen(false);
            setThemeTogglerOpen(false);
          }}
        >
          <img
            className={classNames(
              styles.checkIcon,
              !darkTheme && styles.checked
            )}
            src={icons.check}
          />
          <span>Light theme</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
