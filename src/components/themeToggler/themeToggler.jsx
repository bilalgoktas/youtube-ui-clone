import React from "react";
import icons from "../../icons";
import styles from "./themeToggler.module.css";

const ThemeToggler = ({ setThemeTogglerOpen, setDrawerOpen, setDarkTheme }) => {
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
        <span>Theme</span>
      </div>
      <div className={styles.listContainer}>
        <button
          onClick={() => {
            setDarkTheme(true);
            setDrawerOpen(false);
            setThemeTogglerOpen(false);
          }}
        >
          Dark theme
        </button>
        <button
          onClick={() => {
            setDarkTheme(false);
            setDrawerOpen(false);
            setThemeTogglerOpen(false);
          }}
        >
          Light theme
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
