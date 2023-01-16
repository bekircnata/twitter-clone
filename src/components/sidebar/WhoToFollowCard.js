import { Button } from "primereact/button";
import React, { useState } from "react";

export default function WhoToFollowCard() {

  const whoToFollowListItem = [
    {
      Id: 1,
      name: "user-1",
      image: "/images/random-user-profile-pic-1.jfif",
      email: "@user-1",
    },
    {
      Id: 2,
      name: "user-2",
      image: "/images/random-user-profile-pic-2.jpg",
      email: "@user-2",
    },
    {
      Id: 3,
      name: "user-3",
      image: "/images/random-user-profile-pic-3.jpg",
      email: "@user-3",
    },
  ];

  const buttonEventListener = (event) => {
    console.log(event)
    let element = event.target.nodeName === "SPAN" ? event.target.parentElement : event.target
    let isFollow = ""
    let isUnfollow = ""

    isFollow = element.classList.contains("follow-btn")
    isUnfollow = element.classList.contains("unfollow-btn")

    if(isFollow) {
      element.classList.remove("follow-btn")
      element.classList.add("unfollow-btn")
      event.target.nodeName === "SPAN" ? event.target.innerText = "Unfollow" : event.target.lastElementChild.innerText = "Unfollow"
      // Element değişkeni kullanıldığınında innerText, innerHtml, textContent gibi event parametrelerine ulaşılamıyordu. Bu yüzden tekrardan event.target... kullanıldı.

    } else if(isUnfollow) {
      element.classList.remove("unfollow-btn")
      element.classList.add("follow-btn")
      event.target.nodeName === "SPAN" ? event.target.innerText = "Follow" : event.target.lastElementChild.innerText = "Follow"
    }
  }

  return (
    <div>

      <div className="who-to-follow-title">
        <h3>Who to follow</h3>
      </div>

      <ul className="list">
        {whoToFollowListItem.map((item) => {
          return (
            <li className="list-item">
              <img
                className="list-item-image circle-image"
                src={item?.image}
                alt=""
              />
              <div className="list-item-text-group">
                <div className="list-item-text-group-name">{item?.name}</div>
                <div className="list-item-text-group-email">{item?.email}</div>
              </div>
              <Button className="list-item-button follow-btn" label="Follow" onClick={(e) => buttonEventListener(e)} />
            </li>
          );
        })}
      </ul>

      <Button
        className="p-button-text w-full show-more-button"
        label="Show more"
      />

    </div>
  );
}
