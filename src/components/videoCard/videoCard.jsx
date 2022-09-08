import React from 'react';
import styles from "./videoCard.module.css";

const VideoCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.thumbnail}>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072" alt="" />
            <p className={styles.duration}>10:10</p>
        </div>
        <div className={styles.details}>
            <div>
              <img className={styles.channelLogo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYZCvWqu1uykJ20dU2fmQJ01BHjxvV2kuuA&usqp=CAU" alt="" />
            </div>
            <div>
            <h4 className={styles.title}>This title is for sample purposes. Do not take it seriously :)</h4>
                <p>Channel name</p>
                <p>1.5m view <span>12 days ago</span></p>
            </div>
        </div>
        
    </div>
  )
}

export default VideoCard