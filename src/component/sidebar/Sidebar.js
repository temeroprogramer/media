import React from 'react'
import './Sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { User } from "../../DummyData";
import Closefriends from '../closefriends/Closefriends';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="siderbarlistitem">
            <RssFeedIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Feed</span>
          </li>
          <li className="siderbarlistitem">
            <ChatIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Chats</span>
          </li>
          <li className="siderbarlistitem">
            <PlayCircleIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Videos</span>
          </li>
          <li className="siderbarlistitem">
            <GroupIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Groups</span>
          </li>
          <li className="siderbarlistitem">
            <BookmarkIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Bookmarkookmarks</span>
          </li>
          <li className="siderbarlistitem">
            <WorkOutlineIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Jobs</span>
          </li>
          <li className="siderbarlistitem">
            <HelpOutlineIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Question</span>
          </li>
          <li className="siderbarlistitem">
            <EventIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Event</span>
          </li>
          <li className="siderbarlistitem">
            <SchoolIcon className="sidebaricon" />
            <span className="sidebarlistitemtext">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfriendlist">
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="image"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="image"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="image"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="image"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="img"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="img"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="img"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="img"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="img"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/sun.girl.jpg"
              alt="img"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">jane Doe</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/asset/light.girl.jpg"
              alt="img"
              className="sidebarfriendimg"
            />
            <span className="sidebarfriendname">maria leo</span>
          </li> 
          
          {User.map((u)=>(
            <Closefriends key={u.id} User={u}/>
          ))}
         
        </ul>
      </div>
    </div>
  );
}

export default Sidebar
