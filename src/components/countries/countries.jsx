import classNames from "classnames";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import allCountries from "../../data/allCountries";
import icons from "../../icons";
import styles from "./countries.module.css";

const Countries = ({
  setDrawerOpen,
  setCountriesOpen,
  setLocation,
  location,
}) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <button
          className={styles.backButton}
          onClick={() => {
            setDrawerOpen(true);
            setCountriesOpen(false);
          }}
        >
          <img src={icons.backArrow} />
        </button>
        <span>Choose your location</span>
      </div>

      <div className={styles.listContainer}>
        {allCountries.map((country, index) => (
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
            />
            <span>{country.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Countries;
