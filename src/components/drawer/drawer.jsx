import React, { useState } from 'react';
import styles from "./drawer.module.css";

const Drawer = ({setDrawerOpen, setCountriesOpen}) => {


  return (
    <div className={styles.container}>
        <button onClick={()=>{setCountriesOpen(true); setDrawerOpen(false)}}>Location</button>
        
    </div>
  )
}

export default Drawer