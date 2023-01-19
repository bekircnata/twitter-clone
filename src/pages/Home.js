import React, { useEffect, useState } from 'react'
import TweetBox from '../components/home/TweetBox'
import TweetCard from '../components/home/TweetCard'
import "./Home.scss"

export default function Home() {

  const [tweetList, setTweetList] = useState(null)

  // Dummy data olarak hazırladığım tweet listesi
  const tweetListArr = [
    {
      Id: 10,
      image: "/images/random-user-profile-pic-4.jpg",
      title: "Test User",
      username: "@testuser",
      date: "Dec 30, 20222",
      content:
        "est ad deserunt ex deserunt. Commodo reprehenderit exercitation elit fugiat exercitation Lorem do anim laboris cupidatat ea et in. Nostrud fugiat occaecat nulla proident officia non nulla. Commodo quis exercitation nostrud amet non dolor nulla ipsum excepteur enim.",
      view: "333",
      reply: "33",
      retweet: "3",
      like: "3",
    },
    {
      Id: 9,
      image: "/images/random-user-profile-pic-5.jpg",
      title: "Test User 1",
      username: "@testuser1",
      date: "Dec 37, 20222",
      content: "Incididunt nisi dolore deserunt amet elit.",
      view: " ",
      reply: " ",
      retweet: " ",
      like: " ",
    },
    {
      Id: 8,
      image: "E",
      title: "Test User 2",
      username: "@testuser2",
      date: "Dec 26, 20222",
      content: " Commodo reprehenderit exercitation.",
      view: "20",
      reply: " ",
      retweet: " ",
      like: " ",
    },
    {
      Id: 7,
      image: "R",
      title: "Test User 3",
      username: "@testuser3",
      date: "Dec 25, 20222",
      content:
        "Incididunt nisi dolore deserunt amet elitdeserunt amet elit. deserunt amet elit",
      view: "183",
      reply: "85",
      retweet: "73",
      like: "50",
    },
    {
      Id: 6,
      image: "T",
      title: "Test User 4",
      username: "@testuser4",
      date: "Dec 24, 20222",
      content:
        "Sunt est ad deserunt ex deserunt. Commodo reprehenderit exercitation elit fugiat exercitation Lorem do anim laboris cupidatat ea et in.",
      view: "555",
      reply: "50",
      retweet: "5",
      like: " ",
    },
    {
      Id: 5,
      image: "/images/random-user-profile-pic-3.jpg",
      title: "Test User 5",
      username: "@testuser5",
      date: "Dec 23, 20222",
      content:
        "cupidatat ea et in. Nostrud fugiat occaecat nulla proident officia non nulla. Commodo quis exercitation",
      view: "800",
      reply: "50",
      retweet: "25",
      like: "3",
    },
    {
      Id: 4,
      image: "Z",
      title: "Test User 6",
      username: "@testuser6",
      date: "Dec 30, 20222",
      content:
        "Lorem do anim laboris cupidatat ea et in. Nostrud fugiat occaecat nulla proident officia non nulla. Commodo quis exercitation nostrud amet non dolor nulla ipsum",
      view: "366",
      reply: "63",
      retweet: "53",
      like: "55",
    },
    {
      Id: 3,
      image: "/images/random-user-profile-pic-2.jpg",
      title: "Test User 7",
      username: "@testuser7",
      date: "Dec 22, 20222",
      content:
        "oident id non sint dolore amet deserunt velit. Sunt est ad deserunt ex deserunt.",
      view: "100",
      reply: "14",
      retweet: "7",
      like: " ",
    },
    {
      Id: 2,
      image: "X",
      title: "Test User 8",
      username: "@testuser8",
      date: "Dec 21, 20222",
      content:
        "laboris cupidatat ea et in. Nostrud fugiat occaecat nulla proident.",
      view: "2000",
      reply: "500",
      retweet: "80",
      like: "56",
    },
    {
      Id: 1,
      image: "/images/random-user-profile-pic-1.jfif",
      title: "Test User 9",
      username: "@testuser9",
      date: "Dec 20, 20222",
      content:
        "Dolor dolore proident id non sint dolore amet deserunt velit. Sunt est ad deserunt ex deserunt. Commodo reprehenderit exercitation elit fugiat exercitation Lorem do anim laboris cupidatat ea et in. Nostrud fugiat occaecat nulla proident officia non nulla. Commodo quis exercitation nostrud amet non dolor nulla ipsum excepteur enim.",
      view: "100",
      reply: "5",
      retweet: "2",
      like: "5",
    },
  ]

  useEffect(() => {
    setTweetList(tweetListArr)
  }, [])
  
  return (
    <div className='home-page h-full'>
      <div className='tweet-box-header'>
        <h2>Home</h2>
      </div>
      <div className='tweet-box'>
        <TweetBox tweetList={tweetList}  setTweetList={setTweetList} />
      </div>
      <div className='tweet-card-container'>
        <TweetCard tweetList={tweetList} />
      </div>
    </div>
  )
}