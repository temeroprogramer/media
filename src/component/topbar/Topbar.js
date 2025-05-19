import React from 'react'
import './Topbar.css';
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";


const Topbar = () => {
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <span className="logo">temesocial</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">

          <SearchIcon  className='searchicon'/>
          <input
            type="text"
            placeholder="search for friends, post or any videos"
            className="searchinput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topbariconitem">
            <PersonIcon />
            <span className="topbariconBadge">1</span>
          </div>
          <div className="topbariconitem">
            <ChatIcon />
            <span className="topbariconBadge">2</span>
          </div>
          <div className="topbariconitem">
            <NotificationsIcon />
            <span className="topbariconBadge">1</span>
          </div>
        </div>
        <img
          src="/asset/person/sweet.girl.jpg"
          alt="image"
          className="topbarimg"
        />
      </div>
    </div>
  );
}

export default Topbar
