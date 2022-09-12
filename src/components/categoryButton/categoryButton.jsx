import React from 'react';
import styles from "./categoryButton.module.css";

const CategoryButton = (props) => {
  return (
    <div >
        <button className={styles.btn} style={Object.assign(props.index === 0 ? {marginLeft: 24 + "px"} : {}, props.index ===  props.length - 1 ? {marginRight: 24 + "px"} : {})}>{props.name}</button>
    </div>
  )
}

export default CategoryButton