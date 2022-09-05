import React from 'react'
import "./menu.scss"
import { Link } from 'react-router-dom'
import { Button } from 'primereact/button';

export default function Menu() {

    const menuItems = [
        {label: "", icon: "pi pi-twitter", path: "/" },
        {label: "Home", icon: "pi pi-home", path: "/"},
        {label: "Discover", icon: "pi pi-hashtag", path: "/discover"},
        {label: "Notifications", icon: "pi pi-bell", path: "/notifications"},
        {label: "Messages", icon: "pi pi-home", path: "/messages"},
        {label: "Bookmarks", icon: "pi pi-bookmark", path: "/bookmarks"},
        {label: "Lists", icon: "pi pi-list", path: "/lists"},
        {label: "Profile", icon: "pi pi-user", path: "/profile"},
        {label: "More", icon: "pi pi-bookmark", path: "/more"},
    ]
  return (
    <div className='menu-component'>
        <div className='menu-list'>
          {
            menuItems.map((item) => {
              return (
                <div className='menu-items'>
                  <Link to={item.path} className='menu-link'>
                    <Button label={item.label} icon={item.icon} className="p-button-text menu-link-btn" />
                  </Link>
                </div>
              )
            })
          }
          <Button className='tweetle-btn' label='Tweetle' />
          
            
        </div>
    </div>
  )
}
