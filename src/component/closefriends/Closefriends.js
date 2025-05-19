import React from 'react'
import './Closefriends.css';

const Closefriends = ({User}) => {
  return (
    <div>
      <li className="sidebarfriend">
        <img src={User.profilepicture} alt="img" className="sidebarfriendimg" />
        <span className="sidebarfriendname">{User.username}</span>
      </li>
    </div>
  );
}

export default Closefriends
