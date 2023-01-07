import React, { useRef, useState } from "react";

import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faImage,
  faChartBar,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";

export default function TweetBox({ tweetList, setTweetList }) {
  const op = useRef(null);
  const [tweetboxFocus, setTweetboxFocus] = useState(false);
  const [replyButtonId, setReplyButtonId] = useState(1);
  const [tweetText, setTweetText] = useState("");

  const overlaypanelItems = [
    { id: 1, icon: "pi pi-globe", label: "Everyone" },
    { id: 2, icon: "pi pi-user", label: "People you follow" },
    { id: 3, icon: "pi pi-at", label: "Only people you mention" },
  ]
  // Seçilen seçeneğe ait butonun ekranda görünmesi için
  const replyButtonTemplate = () => {
    let buttonTemplate = overlaypanelItems.filter(
      (item) => item.id === replyButtonId
    );
    return (
      <Button
        icon={buttonTemplate[0]?.icon}
        label={buttonTemplate[0]?.label}
        className="p-button-text"
        style={{ outline: "none", border: "none" }}
        onClick={(e) => op.current.toggle(e)}
      />
    );
  }

  const addTweet = async() => {
    const addedTweet =  {
      Id: tweetList.length + 1,
      image: "images/profile-pic-1.jfif",
      title: "Bekir Can Ata",
      username: "@BekirCanAta",
      date: new Date().toDateString(),
      content: tweetText,
      view: " ",
      reply: " ",
      retweet: " ",
      like: " ",
    }

    const tweetListArr = []
    tweetList?.map((item) => tweetListArr.push(item) )
    tweetListArr.unshift(addedTweet)
    setTweetList(tweetListArr)
    setTweetText("")
  }

  return (
    <div>
      <div className="tweet-box-content">

        <div style={{ width: "65px" }}>
          <img
            className="circle-image"
            src="images/profile-pic-1.jfif"
            alt="profile-pic"
          />
        </div>

        <div className="w-full">
          <InputText
            value={tweetText}
            placeholder="What's happening?"
            onFocus={(e) => setTweetboxFocus(true)}
            onChange={(e) => setTweetText(e.target.value)}
            style={tweetboxFocus ? { outline: "none" } : { outline: "none" }}
          />
          {tweetboxFocus ? (
            <div className="mt-4">
              {replyButtonTemplate()}
              <div
                className="ml-3 mb-4"
                style={{ borderTop: "1px solid #2f3336", width: "90%" }}
              />
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

        <Button className="tweetle-btn" label="Tweetle" disabled={tweetText.length === 0} onClick={(e) => addTweet()} />
      </div>

      {/* OverlayPanel */}
      <div>
        <OverlayPanel
          ref={op}
          id="overlay_panel"
          style={{ width: "300px" }}
          className="overlaypanel tweetbox-overlaypanel"
        >
          <div className="overlaypanel-header">
            <h6>Who can reply?</h6>
            <p>
              Choose who can reply to this Tweet. Anyone mentioned can always
              reply.
            </p>
          </div>
          <div
            className="overlaypanel-content"
            style={{ borderTop: "none", marginTop: "5px" }}
          >
            {overlaypanelItems?.map((item) => {
              return (
                <div key={item?.id}>
                  <Button
                    className="overlaypanel-items global-text-button p-button-text w-full"
                    onClick={(e) => {
                      setReplyButtonId(item?.id);
                      op.current.toggle(e);
                    }}
                  >
                    <i className={classNames(item?.icon, "tweetbox-overlaypanel-icon")}></i>
                    <span>{item?.label}</span>
                  </Button>
                </div>
              );
            })}
          </div>
        </OverlayPanel>
      </div>

    </div>
  );
}
