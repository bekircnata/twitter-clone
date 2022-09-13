import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faImage, faChartBar, faCalendar } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import "./Home.scss"
import { Button } from 'primereact/button'

export default function Home() {
  return (
    <div className='home-page'>
      <div className='tweet-box'>
        <div className='tweet-box-header'>
          <h2>Home</h2>
        </div>
        <div className='tweet-box-content'>
          <div style={{width:"65px"}}>
            <img className="circle-image" src="images/profile-pic.jfif" />
          </div>
          <div>
            <input type="text" placeholder="What's happening?"/>
          </div>
        </div>
        <div className='tweet-box-footer'>
          <div className='icons'>
            <FontAwesomeIcon icon={faImage} className="icon" />
            <FontAwesomeIcon icon={faChartBar} className="icon" />
            <FontAwesomeIcon icon={faSmile} className="icon" />
            <FontAwesomeIcon icon={faCalendar} className="icon" />
            <i className='pi pi-map-marker icon'></i>
          </div>

          <Button className="tweetle-btn" label="Tweetle" />
          
        </div>
      </div>
    </div>
  )
}