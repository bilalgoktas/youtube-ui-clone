import React, { useContext } from "react";
import styles from "./categoryButton.module.css";
import classNames from "classnames";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

const CategoryButton = ({ index, length, name }) => {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        className={classNames(
          styles.btn,
          currentTheme === "dark" && styles.dark
        )}
        style={Object.assign(
          index === 0 ? { marginLeft: 24 + "px" } : {},
          index === length - 1 ? { marginRight: 24 + "px" } : {}
        )}
      >
        {name}
      </button>
    </div>
  );
};

export default CategoryButton;
