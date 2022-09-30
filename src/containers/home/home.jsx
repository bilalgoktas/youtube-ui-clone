import React, { useContext } from "react";
import VideoCard from "../../components/videoCard/videoCard";
import styles from "./home.module.css";
import Categories from "../../components/categories/categories";
import classNames from "classnames";
import { AppContext } from "../../contexts/AppContextProvider";

const Home = ({ isBarsClicked }) => {
  const { currentTheme, videosToDraw } = useContext(AppContext);

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
        {videosToDraw.map((item, index) => (
          <VideoCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
