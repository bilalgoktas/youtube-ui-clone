import React, { useContext } from "react";
import icons from "../../data/icons";
import styles from "./themeToggler.module.css";
import classNames from "classnames";
import { AppContext } from "../../contexts/AppContextProvider";
import { DrawerContext } from "../../contexts/DrawerContextProvider";

const ThemeToggler = () => {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { setIsThemeTogglerOpen, setIsDrawerOpen } = useContext(DrawerContext);

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
            setIsDrawerOpen(true);
            setIsThemeTogglerOpen(false);
          }}
        >
          <img src={icons.backArrow} alt="back" />
        </button>
        <span>Appearance</span>
      </div>
      <div className={styles.listContainer}>
        <p>Settings apply to this browser only</p>
        <button>
          <img
            className={styles.checkIcon}
            src={icons.check}
            alt="selected theme"
          />
          <span>Use device theme</span>
        </button>
        <button
          onClick={() => {
            setIsDrawerOpen(false);
            setIsThemeTogglerOpen(false);
            setCurrentTheme("dark");
          }}
        >
          <img
            className={classNames(
              styles.checkIcon,
              currentTheme === "dark" && styles.checked
            )}
            src={icons.check}
            alt="selected theme"
          />
          <span>Dark theme</span>
        </button>
        <button
          onClick={() => {
            setCurrentTheme("light");
            setIsDrawerOpen(false);
            setIsThemeTogglerOpen(false);
          }}
        >
          <img
            className={classNames(
              styles.checkIcon,
              currentTheme === "light" && styles.checked
            )}
            src={icons.check}
            alt="selected theme"
          />
          <span>Light theme</span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
