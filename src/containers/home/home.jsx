import React from 'react'
import CategoryButton from "../../components/categoryButton/categoryButton";
import VideoCard from "../../components/videoCard/videoCard";
import styles from "./home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.categories}>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
            <CategoryButton/>
        </div>
        <div className={styles.videoCards}>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        </div>
    </div>
  )
}

export default Home