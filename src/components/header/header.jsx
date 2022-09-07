import React from 'react';
import styles from './header.module.css';
import profilePhoto from "../../assets/img/profile-photo.jpeg"
import icons from "../../icons.js";


const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            <button className={styles.barsIcon} ><img src={icons.bars} alt="" /></button>
            <img className={styles.logoIcon} src={icons.logo} alt="" />
        </div>
        <div className={styles.centerContainer}>
            <form>
                <div className={styles.inputContainer}>
                <img className={styles.searchIconLeft} src={icons.search} alt="" />
                <input type="text" placeholder="Search" />
                </div>
                <button className={styles.searchBtn}><img className={styles.searchIconRight} src={icons.search} alt="" /></button>
            </form>
            
            <img className={styles.micIcon} src={icons.mic} alt="" />
           
        </div>
        <div className={styles.rightContainer}>
            <button className={styles.icons}> <img className={styles.createCameraIcon} src={icons.createCamera} alt="" /></button>
            <button className={styles.icons}><img className={styles.bellIcon} src={icons.bell} alt="" /></button>
            <button className={styles.photo}><img className={styles.profilePhoto} src={profilePhoto} alt="" /></button>
        </div>
    </div>
  )
}

export default Header