import React, { useEffect } from "react";
import { preLoaderAnim } from "./index";
import "./Preloader.css"
// import connect from '../../Assets/Connect/Logo Connect.png'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span><h2>"Together</h2></span>
        <span><h2>We Connect</h2></span>
        <span><h2>Each Other"</h2></span>
      </div>
    </div>
  );
};

export default PreLoader;