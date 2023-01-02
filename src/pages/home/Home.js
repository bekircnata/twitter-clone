import React from 'react'
import TweetBox from '../../components/home/TweetBox'
import "./Home.scss"


export default function Home() {
  
  return (
    <div className='home-page'>
      <div className='tweet-box-header'>
        <h2>Home</h2>
      </div>
      <div className='tweet-box'>
        <TweetBox />
      </div>
    </div>
  )
}