import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Welcome.css";
import { film } from "../Images/about/aboutExport";


const Home = () => {
  return (
    <div className="home-main">
      <video loop autoPlay={true} muted controls className="home-video">
        <source
        src={film}
        type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
      <NavLink className="welcome-title large-font" exact to="/CreativeDirector">
        <h2 className="thin">Go To Site - Debbie Green Movement</h2>
      </NavLink>
      <h2 className="thin">Debbie Green - Movement Artist</h2>
    </div>
  );
};

export default Home;
