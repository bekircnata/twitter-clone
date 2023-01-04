import { Button } from "primereact/button";
import React from "react";
import "./TweetCard.scss"

export default function TweetCard() {
  return (
    <div className="tweet-card">
        
      <div className="tweet-card-img">
        T
      </div>

      <div className="w-full">
        <div className="tweet-card-header">
            <span className="tweet-card-header-title">Test User</span>
            <span className="tweet-card-header-username"> @testuser</span>
            <span className="tweet-card-header-date"> Dec 30, 2022</span>
            <Button className="p-button-text tweet-card-header-ellipsis" icon="pi pi-ellipsis-h"/>
        </div>

        <div className="tweet-card-content">
            <span>Incididunt nisi dolore deserunt amet elit.</span>
        </div>

        <div className="tweet-card-footer">
            <Button className="p-button-text tweet-card-footer-icon view-btn" icon="pi pi-chart-bar" label="552" />
            <Button className="p-button-text tweet-card-footer-icon reply-btn" icon="pi pi-comment" label=" " />
            <Button className="p-button-text tweet-card-footer-icon retweet-btn" icon="pi pi-sort-alt" label=" " />
            <Button className="p-button-text tweet-card-footer-icon like-btn" icon="pi pi-heart" label="2" />
            <Button className="p-button-text tweet-card-footer-icon share-btn" icon="pi pi-upload" label=" " />
        </div>
      </div>


    </div>
  );
}
