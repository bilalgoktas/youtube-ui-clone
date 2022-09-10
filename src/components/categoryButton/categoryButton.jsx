import React from 'react';
import styles from "./categoryButton.module.css";

const CategoryButton = (props) => {
  return (
    <div >
        <button className={styles.btn}>{props.name}</button>
    </div>
  )
}

export default CategoryButton