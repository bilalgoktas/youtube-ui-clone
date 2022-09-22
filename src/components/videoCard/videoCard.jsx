import React from "react";
import styles from "./videoCard.module.css";
import classNames from "classnames";

const VideoCard = ({
  title,
  thumbnail,
  channelLogo,
  channel,
  views,
  uploadedBefore,
  duration,
  darkTheme,
}) => {
  return (
    <div className={classNames(styles.container, darkTheme && styles.dark)}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="" />
        <p className={styles.duration}>{duration}</p>
      </div>
      <div className={styles.details}>
        <div>
          <img className={styles.channelLogo} src={channelLogo} alt="" />
        </div>
        <div>
          <h4 className={styles.title}>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}
            <span className={styles.dot}></span>
            <span>{uploadedBefore}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
