import React from 'react'
import './Share.css';
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";


const Share = () => {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
          <img src="/asset/person/cover.avif" alt="img" className="shareimg" />
          <input
            type="text"
            placeholder="whats in your mind guys"
            className="shareinput"
          />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
          <div className="shareoptions">
            <div className="shareoption">
              <PermMediaIcon htmlColor='tomato' className="shareicon" />
              <span className="shareoptiontext">photo or video</span>
            </div>
            <div className="shareoption">
              <LabelIcon htmlColor='blue' className="shareicon" />
              <span className="shareoptiontext">Tag</span>
            </div>
            <div className="shareoption">
              <RoomIcon htmlColor='green' className="shareicon" />
              <span className="shareoptiontext">Location</span>
            </div>
            <div className="shareoption">
              <EmojiEmotionsIcon htmlColor='goldenrod' className="shareicon" />
              <span className="shareoptiontext">Feeling</span>
            </div>
          </div>
          <button className='sharebutton'>share</button>
        </div>
      </div>
    </div>
  );
}

export default Share
