import React from 'react'
import './Online.css';

const Online = ({user}) => {
  return (
    <div>
      <li className="rightbarfriend">
        <div className="rightbarprofileimgcontainer">
          <img
            src={user.profilepicture}
            alt=""
            className="rightbarprofileimg"
          />
          <span className="rightbaronline"></span>
        </div>
        <span className="rightbarusername">{user.username}</span>
      </li>
    </div>
  );
}

export default Online
