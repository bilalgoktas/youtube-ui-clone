import React from 'react';
import styles from './header.module.css';
import logoIcon from '../../assets/svg/logo-icon.svg';
import barsIcon from '../../assets/svg/bars-icon.svg';
import searchIcon from '../../assets/svg/search-icon.svg';
import micIcon from '../../assets/svg/mic-icon.svg';
import createCameraIcon from '../../assets/svg/create-camera-icon.svg';
import bellIcon from '../../assets/svg/bell-icon.svg';
import profilePhoto from '../../assets/img/profile-photo.jpeg'


const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            <button className={styles.barsIcon} ><img src={barsIcon} alt="" /></button>
            <a href="">
            <img className={styles.logoIcon} src={logoIcon} alt="" /></a>
        </div>
        <div className={styles.centerContainer}>
            <form>
                <div className={styles.inputContainer}>
                <img className={styles.searchIconLeft} src={searchIcon} alt="" />
                <input type="text" placeholder="Search" />
                </div>
                <button className={styles.searchBtn}><img className={styles.searchIconRight} src={searchIcon} alt="" /></button>
            </form>
            
            <img className={styles.micIcon} src={micIcon} alt="" />
           
        </div>
        <div className={styles.rightContainer}>
            <button className={styles.icons}> <img className={styles.createCameraIcon} src={createCameraIcon} alt="" /></button>
            <button className={styles.icons}><img className={styles.bellIcon} src={bellIcon} alt="" /></button>
            <button className={styles.photo}><img className={styles.profilePhoto} src={profilePhoto} alt="" /></button>
        </div>
    </div>
  )
}

export default Header