import React from "react"
import TweetBox from "../components/TweetBox"
import TweetCard from "../components/home/TweetCard"
import "./Home.scss"

export default function Home({ tweetList, setTweetList }) {

  return (
    <div className="home-page h-full">
      <div className="tweet-box-header">
        <h2>Home</h2>
      </div>
      <div className="tweet-box-container">
        <TweetBox tweetList={tweetList} setTweetList={setTweetList} />
      </div>
      <div className="tweet-card-container">
        <TweetCard tweetList={tweetList} />
      </div>
    </div>
  )
}
