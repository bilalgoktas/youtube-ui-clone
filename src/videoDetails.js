import randomSentence from "random-sentence";

const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min
  };

const randomStringFromArray = (array) => {
    const length = array.length;
    let index = randomNumber(0, length - 1)
    return array[index];
  };

  const characters = ["M", "K"];
  const time = ["hours", "days", "months" , "years"];

const videoDetails = [
    {
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },{
        title: randomSentence({min:8, max:10}).slice(0, -1),
        thumbnail: "https://api.lorem.space/image?w=150&h=180",
        channelLogo: "https://api.lorem.space/image/face?w=150&h=150",
        channel: randomSentence({min:1, max:3}).slice(0, -1),
        views: `${randomNumber(10, 150)}${randomStringFromArray(characters)} views`,
        uploadedBefore: `${randomNumber(1, 7)} ${randomStringFromArray(time)} ago`,
        duration: `${randomNumber(0, 59).toLocaleString('en-US',{minimumIntegerDigits: 2})}:${randomNumber(0,59).toLocaleString('en-US',{minimumIntegerDigits: 2})}`
    },
    
];




export default videoDetails;