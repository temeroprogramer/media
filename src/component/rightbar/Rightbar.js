import React from 'react'
import './Rightbar.css';
import {  User  } from "../../DummyData";
import Online from '../onlina/Online';

const Rightbar = ({Profile}) => {
  const HomeRightbar = () =>{
    return (
      <>
        <div className="birthdaycontainer">
          <img
            className="birthdayimg"
            src="/asset/person/gift.jpg"
            alt="gift"
          />
          <span className="birthdaytext">
            <b>pola foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/asset/person/adverte.jpeg" alt="" className="rightbarAd" />
        <h4 className="rightbartitle">online friends</h4>
        <ul className="rightbarfriendlist">
          {User.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
    return (
      <>
        <h4 className="rightbartitle">User information</h4>
        <div className="rigtbarinfo">
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">City:</span>
            <span className="rigtbarinfovalue">New York</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">from:</span>
            <span className="rigtbarinfovalue">Roma</span>
          </div>
          <div className="rightbarinfoitem">
            <span className="rightbarinfokey">Relationship:</span>
            <span className="rigtbarinfovalue">Single</span>
          </div>
        </div>
        <h4 className="rightbartitle">User information</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img
              src="/asset/person/fine.jpg"
              alt="fine"
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">fine girl</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/asset/person/outdoor.jpeg"
              alt="fine"
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">Anna luca</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/asset/person/mark.webp"
              alt="fine"
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">joe bright</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/asset/person/fine.jpg"
              alt="fine"
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">fine girl</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/asset/person/fine.jpg"
              alt="fine"
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">fine girl</span>
          </div>
          <div className="rightbarfollowing">
            <img
              src="/asset/light.girl.jpg"
              alt="fine"
              className="rightbarfollowingimg"
            />
            <span className="rightbarfollowingname">light girl</span>
          </div>
        </div>
      </>
    );

  }
  return (
    <div className="rightbar">
      <div className="rightbarwarpper">
       {Profile ? <ProfileRightbar/> : <HomeRightbar/>}
        
      </div>
    </div>
  );
}

export default Rightbar

