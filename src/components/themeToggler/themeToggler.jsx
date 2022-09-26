import React, { useContext } from "react";
import icons from "../../icons";
import styles from "./themeToggler.module.css";
import classNames from "classnames";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const ThemeToggler = ({ setThemeTogglerOpen, setDrawerOpen }) => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        styles.container,
        currentTheme === "dark" && styles.dark
      )}
    >
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
        <p>Settings apply to this browser only</p>
        <button>
          <img className={styles.checkIcon} src={icons.check} />
          <span>Use device theme</span>
        </button>
        <button
          onClick={() => {
            setDrawerOpen(false);
            setThemeTogglerOpen(false);
            setCurrentTheme("dark");
          }}
        >
          <img
            className={classNames(
              styles.checkIcon,
              currentTheme === "dark" && styles.checked
            )}
            src={icons.check}
          />
          <span>Dark theme</span>
        </button>
        <button
          onClick={() => {
            setCurrentTheme("light");
            setDrawerOpen(false);
            setThemeTogglerOpen(false);
          }}
        >
          <img
            className={classNames(
              styles.checkIcon,
              currentTheme === "light" && styles.checked
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
