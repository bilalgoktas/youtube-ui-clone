import React from 'react'
import CategoryButton from "../../components/categoryButton/categoryButton";
import VideoCard from "../../components/videoCard/videoCard";
import styles from "./home.module.css";
import randomSentence from "random-sentence"

const Home = () => {

  const mapper = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const characters = ["M", "K"];
  const time = ["hours", "days", "months" , "years"];
  

  const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min
  };

  const randomStringFromArray = (array) => {
    const length = array.length;
    let index = randomNumber(0, length - 1)
    return array[index];
  };

  const randomImage = () => {
    return `https://picsum.photos/id/${randomNumber(1000, 1084)}/270/150`
  }

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
        <div className={styles.videoCards}>{
          
          mapper.map((item, index) => <VideoCard key={index} title= {randomSentence({min:8, max:10}).slice(0, -1)} thumbnail={randomImage()} channelLogo={randomImage()} channel={randomSentence({min:1, max:3}).slice(0, -1)} views={`${randomNumber(10, 150)}${randomStringFromArray(characters)} views`} uploadedBefore={`${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`} duration={`${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`}/>)
        }
        </div>
    </div>
  )
}

export default Home