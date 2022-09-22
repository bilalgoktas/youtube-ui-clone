import React, { useEffect, useState } from "react";
import VideoCard from "../../components/videoCard/videoCard";
import styles from "./home.module.css";
import randomSentence from "random-sentence";
import Categories from "../../components/categories/categories";
import classNames from "classnames";

const Home = ({ isBarsClicked, darkTheme }) => {
  const [videosArray, setVideosArray] = useState([]);

  useEffect(() => {
    setVideosArray(videos);
  }, []);

  const characters = ["M", "K"];
  const time = ["hours", "days", "months", "years"];

  const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
  };

  const randomStringFromArray = (array) => {
    const length = array.length;
    let index = randomNumber(0, length - 1);
    return array[index];
  };

  const randomImage = () => {
    return `https://picsum.photos/id/${randomNumber(1, 100)}/200/150`;
  };

  const videos = [];

  for (let i = 0; i < 20; i++) {
    const video = {
      title: randomSentence({ min: 8, max: 10 }).slice(0, -1),
      thumbnail: randomImage(),
      channelLogo: randomImage(),
      channel: randomSentence({ min: 1, max: 3 }).slice(0, -1),
      views: `${randomNumber(10, 150)}${randomStringFromArray(
        characters
      )} views`,
      uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(
        time
      )} ago`,
      duration: `${randomNumber(0, 59).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })}:${randomNumber(0, 59).toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      })}`,
    };

    videos.push(video);
  }

  return (
    <div
      className={classNames(
        styles.container,
        !isBarsClicked && styles.sidebarSmall,
        darkTheme && styles.dark
      )}
    >
      <Categories isBarsClicked={isBarsClicked} darkTheme={darkTheme} />
      <div className={styles.videoCards}>
        {videosArray.map((item, index) => (
          <VideoCard key={index} {...item} darkTheme={darkTheme} />
        ))}
      </div>
    </div>
  );
};

export default Home;
