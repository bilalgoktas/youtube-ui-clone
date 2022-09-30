import classNames from "classnames";
import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContextProvider";
import icons from "../../data/icons";
import styles from "./countries.module.css";

const Countries = ({
  setDrawerOpen,
  setCountriesOpen,
  setLocation,
  location,
}) => {
  const { currentTheme, countriesToDraw } = useContext(AppContext);
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
            setCountriesOpen(false);
          }}
        >
          <img src={icons.backArrow} alt="back" />
        </button>
        <span>Choose your location</span>
      </div>

      <div className={styles.listContainer}>
        {countriesToDraw.map((country, index) => (
          <button
            key={index}
            onClick={() => {
              setLocation(country);
              setDrawerOpen(false);
              setCountriesOpen(false);
            }}
          >
            <img
              className={classNames(
                styles.checkIcon,
                country.name === location.name && styles.checked
              )}
              src={icons.check}
              alt="selected country"
            />
            <span>{country.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Countries;
