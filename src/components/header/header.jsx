import React, { useState } from "react";
import styles from "./header.module.css";
import profilePhoto from "../../assets/img/profile-photo.jpeg";
import icons from "../../icons.js";
import classNames from "classnames";
import Drawer from "../drawer/drawer";
import Countries from "../countries/countries";

const Header = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [location, setLocation] = useState({ name: "Netherlands", code: "NL" });

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <button className={styles.barsIcon}>
          <img
            onClick={() => props.setIsBarsClicked(!props.isBarsClicked)}
            src={icons.bars}
            alt=""
          />
        </button>
        <a href="" className={styles.logoIcon}>
          <img src={icons.logo} alt="" />
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
              alt=""
            />
            <div
              className={classNames(
                styles.inputContainer,
                isFocused && styles.focus
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

        <img className={styles.micIcon} src={icons.mic} alt="" />
      </div>
      <div className={styles.rightContainer}>
        <button className={styles.icons}>
          {" "}
          <img
            className={styles.createCameraIcon}
            src={icons.createCamera}
            alt=""
          />
        </button>
        <button className={styles.icons}>
          <img className={styles.bellIcon} src={icons.bell} alt="" />
        </button>
        <button
          className={styles.photo}
          onClick={() => {
            if (!countriesOpen) setDrawerOpen(!drawerOpen);
            setCountriesOpen(false);
          }}
        >
          <img className={styles.profilePhoto} src={profilePhoto} alt="" />
        </button>
      </div>
      {drawerOpen && (
        <Drawer
          setDrawerOpen={setDrawerOpen}
          setCountriesOpen={setCountriesOpen}
          location={location}
        />
      )}
      {countriesOpen && (
        <Countries
          setDrawerOpen={setDrawerOpen}
          setCountriesOpen={setCountriesOpen}
          setLocation={setLocation}
          location={location}
        />
      )}
    </div>
  );
};

export default Header;
