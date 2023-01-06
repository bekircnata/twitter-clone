import { Button } from "primereact/button";
import React from "react";
import "./TweetCard.scss";

export default function TweetCard({ tweetList }) {

  return (
    <div className="ml-3">
      {tweetList?.map((item) => {
        return (
          <div key={item?.Id} className="tweet-card">
              {
                item?.image.length === 1 ? <div className="tweet-card-img">{item.image}</div> : <img src={item.image} />
              }
            <div className="w-full">
              <div className="tweet-card-header">
                <span className="tweet-card-header-title">{item?.title}</span>
                <span className="tweet-card-header-username">
                  {" "}
                  {item?.username}
                </span>
                <span className="tweet-card-header-date">{item?.date}</span>
                <Button
                  className="p-button-text tweet-card-header-ellipsis"
                  icon="pi pi-ellipsis-h"
                />
              </div>

              <div className="tweet-card-content">
                <span>{item?.content}</span>
              </div>

              <div className="tweet-card-footer">
                <Button
                  className="p-button-text tweet-card-footer-icon view-btn"
                  icon="pi pi-chart-bar"
                  label={item?.view}
                />
                <Button
                  className="p-button-text tweet-card-footer-icon reply-btn"
                  icon="pi pi-comment"
                  label={item?.reply}
                />
                <Button
                  className="p-button-text tweet-card-footer-icon retweet-btn"
                  icon="pi pi-sort-alt"
                  label={item?.retweet}
                />
                <Button
                  className="p-button-text tweet-card-footer-icon like-btn"
                  icon="pi pi-heart"
                  label={item?.like}
                />
                <Button
                  className="p-button-text tweet-card-footer-icon share-btn"
                  icon="pi pi-upload"
                  label=" "
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
