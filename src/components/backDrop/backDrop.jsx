import React from "react";
import styles from "./backDrop.module.css";

const BackDrop = ({ handleDrawer }) => (
  <div className={styles.backDrop} onClick={handleDrawer}></div>
);

export default BackDrop;
