import React from "react";
import "./home.css";
import landing from "../assets/landing.png";
import MLogo from "../assets/Mlogo.png";
import burger from "../assets/burger.png";
import Slogo from "../assets/Slogo.png";
import smoke from "../assets/smoke.png";
import smoke2 from "../assets/smoke2.png";
import smoke3 from "../assets/smoke3.png";
import line from "../assets/line.png";

function Home() {
  return (
    <div className="background">
      <img className="landing" src={landing} alt=""></img>
      <div className="smoke_grp">
        <img className="smoke" src={smoke} alt=""></img>
        <img className="smoke2" src={smoke2} alt=""></img>
        <img className="smoke3" src={smoke3} alt=""></img>
      </div>
      <div className="line">
        <img className="line1 " src={line} alt=""></img>
        <img className="line2" src={line} alt=""></img>
        <img className="line3" src={line} alt=""></img>
        <img className="line4" src={line} alt=""></img>
      </div>
      <div className="header">
        <div className="logo">
          <img className="Slogo" src={Slogo} alt=""></img>
        </div>

        <img className="burger shadowfilter" src={burger} alt=""></img>
      </div>
      <div className="main">
        <div className="Lcontainer">
          <img className="Mlogo shadowfilter" src={MLogo} alt=""></img>\
        </div>

        <div className="content">
          {" "}
          Amidst the dusty desserts of Egypt we found some extraterrestrial
          elements. To discover join hands with us.{" "}
        </div>

        <button className="preReg shadowfilter">
          {" "}
          <span className="buttonText"> PRE-REGISTER</span>
        </button>
        <div className="clouds"></div>
      </div>
    </div>
  );
}

export default Home;