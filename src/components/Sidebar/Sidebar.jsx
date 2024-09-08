import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
function Sidebar() {
  return (
    <div
      classname='sidebar'>
        <div className='top'></div>
        <img className='menu' src={assets.menu_icon} alt=" "></img>
        <div className="new-chat"></div>
        <img src={assets.plus_icon} alt=" "></img>
        <p> New Chat</p>
        <div className="recent"></div>
        <p className="recent-title">Recent</p>
        <div className="recent-entry"></div>
        <img src={assets.message_icon} alt=""></img>
        <p>What is react...</p>
        <div className="bottom"></div>
        
    </div>
  )
}

export default Sidebar
