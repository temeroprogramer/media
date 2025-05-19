import React, { useState } from 'react'
import './Post.css';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { User, User as users } from '../../DummyData';

const Post = ({post}) => {
  const [like, setlike] = useState(post.like)
  const [islike, setislike] = useState(false);

  const likeHandler = () =>{
    setlike(islike ? like-1 : like+1)
    setislike(!islike)

  }


  // const User = users.filter(u=>u.id === post.Userid)
  // console.log(User[0].id)
  
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="posttop">
          <div className="postleft">
            <img
              src={User.filter((u) => u.id === post.userid)[0].profilepicture}
              className="postprofileimg"
              alt="full"
            />
            <span className="postusername">
              {User.filter((u) => u.id === post.userid)[0].username}
            </span>
            <span className="postdate">{post.date}</span>
          </div>
          <div className="postright">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postcenter">
          <span className="posttext">{post.desc}</span>
          <img src={post.photo} className="postimg" alt="art" />
        </div>
        <div className="postbotton">
          <div className="postbottomleft">
            <img src="/asset/person/like.jpg" onClick={likeHandler} alt="like" className="likeicon" />
            <img
              src="/asset/person/heart png.jpg" onClick={likeHandler}
              alt="heart"
              className="likeicon"
            />
            <span className="postlikecounter">{like}people like it</span>
            <span className="postcommenttext">{post.comment} comment</span>
          </div>
          <div className="postbottomright"></div>
        </div>
      </div>
    </div>
  );
}

export default Post
