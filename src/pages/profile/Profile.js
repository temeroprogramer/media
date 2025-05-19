import React from 'react'
import './Profile.css';
import Topbar from '../../component/topbar/Topbar';
import Sidebar from '../../component/sidebar/Sidebar';
import Feed from '../../component/feed/Feed';
import Rightbar from '../../component/rightbar/Rightbar';


const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRighttop">
            <div className="profilecover">
              <img
                src="/asset/person/profile.jpeg"
                alt="post"
                className="profilecoverimg"
              />
              <img
                src="/asset/person/playing.jpeg"
                alt="post"
                className="profileuserimg"
              />
            </div>
            <div className="profileinfo">
              <h4 className="profileinfoname">Temero Boss</h4>
              <span className="profileinfodesc">hello am temero you beautiful can i know</span>
            </div>
          </div>
          <div className="profileRightbottom">
            <Feed />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
