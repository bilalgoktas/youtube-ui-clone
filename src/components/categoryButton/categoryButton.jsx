import React from "react";
import styles from "./categoryButton.module.css";

const CategoryButton = ({ index, length, name }) => {
  return (
    <div>
      <button
        className={styles.btn}
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
