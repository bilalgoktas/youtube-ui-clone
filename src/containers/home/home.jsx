import React, { useEffect, useState } from "react";
import VideoCard from "../../components/videoCard/videoCard";
import styles from "./home.module.css";
import Categories from "../../components/categories/categories";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import videos from "../../data/videos";

const Home = ({ isBarsClicked }) => {
  const { currentTheme } = useContext(ThemeContext);

  const [videosArray, setVideosArray] = useState([]);

  useEffect(() => {
    setVideosArray(videos);
  }, []);

  return (
    <div
      className={classNames(
        styles.container,
        !isBarsClicked && styles.sidebarSmall,
        currentTheme === "dark" && styles.dark
      )}
    >
      <Categories isBarsClicked={isBarsClicked} />
      <div className={styles.videoCards}>
        {videosArray.map((item, index) => (
          <VideoCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
