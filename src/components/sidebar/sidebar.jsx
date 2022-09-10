import React from 'react';
import styles from "./sidebar.module.css";
import classNames from "classnames";
import icons from "../../icons.js";
import profilePhoto from "../../assets/img/profile-photo.jpeg"

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <button className={styles.btn}> <img src={icons.home} alt="" /> <span>Home</span></button>
        <button className={styles.btn}> <img src={icons.explore} alt="" /> <span>Explore</span></button>
        <button className={styles.btn}> <img src={icons.shorts} alt="" /> <span>Shorts</span></button>
        <button className={styles.btn}> <img src={icons.subscriptions} alt="" /> <span>Subscriptions</span></button>
      </div>
      <div className={styles.section}>
        <button className={styles.btn}> <img src={icons.library} alt="" /> <span>Library</span></button>
        <button className={styles.btn}> <img src={icons.history} alt="" /> <span>History</span></button>
        <button className={styles.btn}> <img src={icons.yourVideos} alt="" /> <span>Your videos</span></button>
        <button className={styles.btn}> <img src={icons.watchLater} alt="" /> <span>Watch later</span></button>
        <button className={styles.btn}> <img src={icons.yourClips} alt="" /> <span>Your clips</span></button>
        <button className={styles.btn}> <img src={icons.showMore} alt="" /> <span>Show more</span></button>
      </div>
      <div className= {classNames(styles.section, styles.subscriptions)}>
        <h3>subscriptions</h3>
        <button className={styles.btn}> <img src={profilePhoto} alt="" /> <span>Sample Channel</span></button>
        <button className={styles.btn}> <img src={profilePhoto} alt="" /> <span>Crazy coding</span></button>
        <button className={styles.btn}> <img src={profilePhoto} alt="" /> <span>Let's Code Guys</span></button>
        <button className={styles.btn}> <img src={profilePhoto} alt="" /> <span>Holy Moly Cody</span></button>
        <button className={styles.btn}> <img src={icons.showMore} alt="" /> <span>Show more</span></button>
      </div>
      <div className={styles.section}>
        <h3>explore</h3>
        <button className={styles.btn}> <img src={icons.movies} alt="" /> <span>Movies</span></button>
        <button className={styles.btn}> <img src={icons.gaming} alt="" /> <span>Gaming</span></button>
        <button className={styles.btn}> <img src={icons.sports} alt="" /> <span>Sports</span></button>
      </div>
      <div className={styles.section}>
        <h3>more from youtube</h3>
        <button className={styles.btn}> <img src={icons.premium} alt="" /> <span>YouTube Premium</span></button>
        <button className={styles.btn}> <img src={icons.creatorStudio} alt="" /> <span>Creator Studio</span></button>
        <button className={styles.btn}> <img src={icons.youtubeMusic} alt="" /> <span>YouTube Music</span></button>
        <button className={styles.btn}> <img src={icons.youtubeKids} alt="" /> <span>YouTube Kids</span></button>
        <button className={styles.btn}> <img src={icons.youtubeTv} alt="" /> <span>YouTube TV</span></button>
      </div>
      <div className={styles.section}>
        <button className={styles.btn}> <img src={icons.settings} alt="" /> <span>Settings</span></button>
        <button className={styles.btn}> <img src={icons.report} alt="" /> <span>Report history</span></button>
        <button className={styles.btn}> <img src={icons.help} alt="" /> <span>Help</span></button>
        <button className={styles.btn}> <img src={icons.feedback} alt="" /> <span>Send feedback</span></button>
      </div>
      <div className= {classNames(styles.section, styles.bottomLinks)}>
        <div className={styles.first}>
        <a href="#">About</a>
        <a href="#">Press</a>
        <a href="#">Copyright</a>
        <a href="#">Contact us</a>
        <a href="#">Creators</a>
        <a href="#">Advertise</a>
        <a href="#">Developers</a>
        </div>
        <div className={styles.second}>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Policy & Safety</a>
        <a href="#">How YouTube works</a>
        <a href="#">Test new features</a>
        </div>
        <div className={styles.third}>
        <p>© 2022 Google LLC YouTube, a Google company</p>
        </div>
       
      </div>
     
    </div>
  )
}

export default Sidebar