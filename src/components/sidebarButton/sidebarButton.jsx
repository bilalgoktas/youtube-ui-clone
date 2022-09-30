import React, { useContext } from "react";
import styles from "./sidebarButton.module.css";
import classNames from "classnames";
import { AppContext } from "../../contexts/AppContextProvider";

const SidebarButton = ({ icon, title, activeLink }) => {
  const { currentTheme } = useContext(AppContext);

  return (
    <button
      className={classNames(
        styles.btn,
        currentTheme === "dark" && styles.dark,
        activeLink === title && styles.active
      )}
    >
      <img src={icon} alt={title} /> <span>{title}</span>
    </button>
  );
};

export default SidebarButton;
