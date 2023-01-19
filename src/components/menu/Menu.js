import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./menu.scss";

import MenuOverlaypanel from ".//MenuOverlaypanel";

import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

export default function Menu() {
  const op = useRef(null)
  const location = useLocation()

  const menuItems = [
    { id: 0, label: "", icon: "pi pi-twitter", path: "/" },
    { id: 1, label: "Home", icon: "pi pi-home", path: "/" },
    { id: 2, label: "Explore", icon: "pi pi-hashtag", path: "/discover" },
    { id: 3, label: "Notifications", icon: "pi pi-bell", path: "/notifications" },
    { id: 4, label: "Messages", icon: "pi pi-home", path: "/messages" },
    { id: 5, label: "Bookmarks", icon: "pi pi-bookmark", path: "/bookmarks" },
    { id: 6, label: "Lists", icon: "pi pi-list", path: "/lists" },
    { id: 7, label: "Profile", icon: "pi pi-user", path: "/profile" },
    { id: 8, label: "More", icon: "pi pi-ellipsis-h", path: "/more" },
  ];
  return (
    <div className="menu-component">
      <div className="menu-content">
        <div className="menu-list">
          {menuItems.map((item) => {
            return (
              <div className="menu-items" key={item.id}>
                <Link to={item.path} className="menu-link">
                  <Button
                    label={item.label}
                    icon={item.icon}
                    className={location.pathname === item.path ? "p-button-text menu-link-btn menu-link-active" : "p-button-text menu-link-btn"}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        <Button className="tweetle-btn" label="Tweetle" />

        <div className="menu-footer-container" onClick={(e) => op.current.toggle(e)}>
          <div className="menu-footer">
            <div className="menu-footer-pic">
              <img className="circle-image" src="images/profile-pic-1.jfif" alt="profile-pic" />
            </div>
            <div className="menu-footer-text">
              <p className="name">Bekir Can Ata</p>
              <p className="username">@BekirCanAta</p>
            </div>
            <div className="menu-footer-icon">
              <i className="pi pi-ellipsis-h"></i>
            </div>
          </div>
        </div>
        
        <MenuOverlaypanel op={op}  />
      </div>
    </div>
  );
}
