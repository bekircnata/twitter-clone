import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faImage, faChartBar, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { Button } from 'primereact/button'

export default function TweetBox() {
    const [tweetboxFocus, setTweetboxFocus] = useState(false)
    
  return (
    <div>
      <div className="tweet-box-content">
        <div style={{ width: "65px" }}>
          <img
            className="circle-image"
            src="images/profile-pic.jfif"
            alt="profile-pic"
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder="What's happening?"
            onFocus={(e) => setTweetboxFocus(true)}
            style={tweetboxFocus ? { outline: "none" } : { outline: "none" }}
          />
          {tweetboxFocus ? (
            <div className="mt-4">
              <Button
                icon="pi pi-globe"
                label="Everyone can reply"
                className="p-button-text"
                style={{ outline: "none", border: "none" }}
              />
              <div
                className="ml-3 mb-4"
                style={{ borderTop: "1px solid #2f3336", width: "90%" }}
              ></div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="tweet-box-footer">
        <div className="icons">
          <FontAwesomeIcon icon={faImage} className="icon" />
          <FontAwesomeIcon icon={faChartBar} className="icon" />
          <FontAwesomeIcon icon={faSmile} className="icon" />
          <FontAwesomeIcon icon={faCalendar} className="icon" />
          <i className="pi pi-map-marker icon"></i>
        </div>

        <Button className="tweetle-btn" label="Tweetle" />
      </div>
    </div>
  );
}
