import React from "react";
import icons from "../../icons";
import styles from "./drawer.module.css";

const Drawer = ({
  setDrawerOpen,
  setCountriesOpen,
  setThemeTogglerOpen,
  location,
}) => {
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
      title: "Appearance: Light",
      onClick: () => {
        setThemeTogglerOpen(true);
        setDrawerOpen(false);
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
        setCountriesOpen(true);
        setDrawerOpen(false);
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
    <div className={styles.container}>
      <div className={styles.manage}>
        <img src={icons.profilePhoto} alt="profile photo" />
        <div>
          <h3>Bilal Goktas</h3>
          <p>Manage your Google Account</p>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.section}>
          {firstSection.map((item, index) => (
            <button key={index}>
              <img src={item.icon} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.section}>
          {secondSection.map((item, index) => (
            <button key={index}>
              <img src={item.icon} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.section}>
          {thirdSection.map((item, index) => (
            <button key={index} onClick={item.onClick}>
              <img src={item.icon} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.section}>
          {fourthSection.map((item, index) => (
            <button key={index}>
              <img src={item.icon} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
        <div className={styles.section}>
          {fifthSection.map((item, index) => (
            <button key={index}>
              <img src={item.icon} />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
      {/* <button onClick={()=>{setCountriesOpen(true); setDrawerOpen(false)}}>Location</button> */}
    </div>
  );
};

export default Drawer;
