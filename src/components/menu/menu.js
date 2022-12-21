import React from "react";
import "./menu.css";
import about from "../../assets/about.png";
import events from "../../assets/events.png";
import sponsor from "../../assets/contact.png";
import Card from "./card";
import MLogo from "../../assets/Mlogo.png";
import insta from "../../assets/insta.png";
import close from "../../assets/close.png";
import facebook from "../../assets/facebook.png";

function Menu() {
  console.log("MENU");
  return (
    <div className="background">
      <img className="mLogo" src={MLogo} alt=""></img>
      <img className="close" src={close} alt=""></img>

      <div className="Container">
        <Card name={"ABOUT US"} logo={about}></Card>
        <Card name={"SPONSOR US"} logo={sponsor}></Card>
        <Card name={"EVENTS"} logo={events}></Card>
      </div>

      <div className="bottom">
        <div className="section">
          <div className="underline"></div>
          <div className="social"> SOCIALS </div>
          <div className="underline"></div>
        </div>
        <div className="links">
          <a className="Limage" href="">
            <img className="social_img " src={insta} alt=""></img>
          </a>
          <a className="Limage">
            <img className="social_img" src={facebook} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
