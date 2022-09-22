import React from "react";
import styles from "./categoryButton.module.css";
import classNames from "classnames";

const CategoryButton = ({ index, length, name, darkTheme }) => {
  return (
    <div>
      <button
        className={classNames(styles.btn, darkTheme && styles.dark)}
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
