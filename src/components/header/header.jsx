import React, { useContext, useState } from "react";
import styles from "./header.module.css";
import icons from "../../data/icons";
import classNames from "classnames";
import Drawer from "../drawer/drawer";
import Countries from "../countries/countries";
import ThemeToggler from "../themeToggler/themeToggler";
import { AppContext } from "../../contexts/AppContextProvider";
import { DrawerContext } from "../../contexts/DrawerContextProvider";
import BackDrop from "../backDrop/backDrop";

const Header = ({ setIsBarsClicked, isBarsClicked }) => {
  const { currentTheme } = useContext(AppContext);
  const {
    isDrawerOpen,
    isCountriesOpen,
    isThemeTogglerOpen,
    setIsDrawerOpen,
    setIsCountriesOpen,
    setIsThemeTogglerOpen,
  } = useContext(DrawerContext);

  const [isFocused, setIsFocused] = useState(false);
  const [location, setLocation] = useState({ name: "Netherlands", code: "NL" });

  const handleDrawer = () => {
    isCountriesOpen | isThemeTogglerOpen | isDrawerOpen
      ? setIsDrawerOpen(false)
      : setIsDrawerOpen(true);

    setIsCountriesOpen(false);
    setIsThemeTogglerOpen(false);
  };

  return (
    <div
      className={classNames(
        styles.container,
        currentTheme === "dark" && styles.dark
      )}
    >
      <div className={styles.leftContainer}>
        <button className={styles.barsIcon}>
          <img
            onClick={() => setIsBarsClicked(!isBarsClicked)}
            src={icons.bars}
            alt="menu bars icon"
          />
        </button>
        <a href="/" className={styles.logoIcon}>
          {currentTheme === "dark" ? (
            <img src={icons.logoDarkTheme} alt="youtube logo" />
          ) : (
            <img src={icons.logo} alt="youtube logo" />
          )}
          <span className={styles.countryCode}>{location.code}</span>
        </a>
      </div>
      <div className={styles.centerContainer}>
        <form>
          <div
            className={classNames(
              styles.searchContainer,
              isFocused && styles.focus
            )}
          >
            <img
              className={classNames(
                styles.searchIconLeft,
                isFocused && styles.show
              )}
              src={icons.search}
              alt="search icon"
            />
            <div
              className={classNames(
                styles.inputContainer,
                isFocused && styles.focus,
                currentTheme === "dark" && styles.dark
              )}
            >
              <input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <button className={styles.searchBtn}>
            <img className={styles.searchIconRight} src={icons.search} alt="" />
          </button>
        </form>
        <div className={styles.micIcon}>
          <img src={icons.mic} alt="voice texting" />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <button className={styles.icons}>
          {" "}
          <img
            className={styles.createCameraIcon}
            src={icons.createCamera}
            alt="create video"
          />
        </button>
        <button className={styles.icons}>
          <img
            className={styles.bellIcon}
            src={icons.bell}
            alt="notifications"
          />
        </button>
        <button className={styles.photo} onClick={handleDrawer}>
          <img
            className={styles.profilePhoto}
            src={icons.profilePhoto}
            alt=""
          />
        </button>
      </div>

      {isDrawerOpen && <Drawer location={location} />}
      {isCountriesOpen && (
        <Countries setLocation={setLocation} location={location} />
      )}
      {isThemeTogglerOpen && <ThemeToggler />}
      {isDrawerOpen | isCountriesOpen | isThemeTogglerOpen ? (
        <BackDrop handleDrawer={handleDrawer} />
      ) : null}
    </div>
  );
};

export default Header;
