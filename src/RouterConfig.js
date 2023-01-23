import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Explore from "./pages/Explore.js"
import Notifications from "./pages/Notifications.js"
import Messages from "./pages/Messages.js"
import Profile from "./pages/Profile.js"
import Lists from "./pages/Lists.js"
import Bookmarks from "./pages/Bookmarks.js"

export default function RouterConfig({ tweetList, setTweetList}) {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home tweetList={tweetList} setTweetList={setTweetList} />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/lists' element={<Lists />} />
            <Route path='/bookmarks' element={<Bookmarks />} />
        </Routes>
    </div>
  )
}
