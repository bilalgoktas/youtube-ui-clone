import classNames from "classnames";
import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContextProvider";
import { DrawerContext } from "../../contexts/DrawerContextProvider";
import icons from "../../data/icons";
import styles from "./drawer.module.css";

const Drawer = ({ location }) => {
  const { currentTheme } = useContext(AppContext);
  const { setIsDrawerOpen, setIsCountriesOpen, setIsThemeTogglerOpen } =
    useContext(DrawerContext);

  const firstSection = [
    { icon: icons.yourChannel, title: "Your channel" },
    { icon: icons.youtubeStudio, title: "YouTube Studio" },
    { icon: icons.switchAccount, title: "Switch account" },
    { icon: icons.signout, title: "Sign out" },
  ];

  const secondSection = [
    { icon: icons.dollar, title: "Purchases and memberships" },
    { icon: icons.yourData, title: "Your data in YouTube" },
  ];

  const thirdSection = [
    {
      icon: icons.moon,
      title: `Appearance: ${
        currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)
      }`,
      onClick: () => {
        setIsThemeTogglerOpen(true);
        setIsDrawerOpen(false);
      },
    },
    { icon: icons.language, title: "Language: English", onClick: () => {} },
    {
      icon: icons.restricted,
      title: "Restricted Mode: Off",
      onClick: () => {},
    },
    {
      icon: icons.globe,
      title: `Location: ${location.name}`,
      onClick: () => {
        setIsCountriesOpen(true);
        setIsDrawerOpen(false);
      },
    },
    { icon: icons.keyboard, title: "Keyboard shortcuts", onClick: () => {} },
  ];

  const fourthSection = [{ icon: icons.settings, title: "Settings" }];

  const fifthSection = [
    { icon: icons.help, title: "Help" },
    { icon: icons.feedback, title: "Send feedback" },
  ];

  return (
    <div
      className={classNames(
        styles.container,
        currentTheme === "dark" && styles.dark
      )}
    >
      <div className={styles.manage}>
        <img src={icons.profilePhoto} alt="profile" />
        <div>
          <h3>Bilal Goktas</h3>
          <p>Manage your Google Account</p>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.section}>
          {firstSection.map((item, index) => (
            <button key={index}>
              <img src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.section}>
          {secondSection.map((item, index) => (
            <button key={index}>
              <img src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.section}>
          {thirdSection.map((item, index) => (
            <button key={index} onClick={item.onClick}>
              <img src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.section}>
          {fourthSection.map((item, index) => (
            <button key={index}>
              <img src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.section}>
          {fifthSection.map((item, index) => (
            <button key={index}>
              <img src={item.icon} alt={item.title} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
