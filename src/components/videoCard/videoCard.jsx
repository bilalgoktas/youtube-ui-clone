import React from "react";
import styles from "./videoCard.module.css";

const VideoCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <img src={props.thumbnail} alt="" />
        <p className={styles.duration}>{props.duration}</p>
      </div>
      <div className={styles.details}>
        <div>
          <img className={styles.channelLogo} src={props.channelLogo} alt="" />
        </div>
        <div>
          <h4 className={styles.title}>{props.title}</h4>
          <p>{props.channel}</p>
          <p>
            {props.views}
            <span className={styles.dot}></span>
            <span>{props.uploadedBefore}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
