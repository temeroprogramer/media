import React from 'react'
import './Home.css';
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Feed from '../../component/feed/Feed'
import Rightbar from '../../component/rightbar/Rightbar'


const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="homecontainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  );
}

export default Home
