import React from 'react'
import './Feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import { posts } from '../../DummyData';

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedwrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
        
      </div>
    </div>
  );
}

export default Feed
