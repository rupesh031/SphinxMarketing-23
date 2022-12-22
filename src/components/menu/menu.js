import React, { useCallback } from "react";
import "./menu.css";
import about from "../../assets/about.png";
import events from "../../assets/events.png";
import sponsor from "../../assets/contact.png";
import Card from "./card";
import MLogo from "../../assets/Mlogo.png";
import insta from "../../assets/insta.png";
import close from "../../assets/close.png";
import facebook from "../../assets/facebook.png";
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import About from "../about-page/about";
import Sponsors from "../sponsors-page/sponsors";

function Menu(props) {
  const { setMenu, classN } = props;
  const navigate = useNavigate();
  const handleClick = (page) => navigate(page);

  return (
    <>
      <div className={classN}>
        <img className="mLogo" src={MLogo} alt=""></img>
        <div className="closebtn">
          {" "}
          <img
            className="close"
            src={close}
            alt=""
            onClick={() => {
              setMenu(false);
              // render(<Menu setMenu={setMenu} classN={"rollout"}></Menu>);
            }}
          ></img>
        </div>

        <div className="Container">
          <div
            onClick={() => {
              handleClick("/about");
            }}
          >
            <Card name={"ABOUT US"} logo={about} page={"/about"}></Card>
          </div>
          <div
            onClick={() => {
              handleClick("/sponsor");
            }}
          >
            <Card name={"SPONSOR US"} logo={sponsor} page={"/sponsor"}></Card>
          </div>
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
            <a className="Limage" href="">
              <img className="social_img" src={facebook} alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
