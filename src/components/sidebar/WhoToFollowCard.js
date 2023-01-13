import { Button } from "primereact/button";
import React from "react";

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
              <Button className="list-item-button" label="Follow" />
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
