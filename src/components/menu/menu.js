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
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

function Menu(props) {
  const { setMenu, classN } = props;

  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/");

  const handleClick = (page) => {
    navigate(page);
  };

  return (
    <>
      <div className={classN}>
        <div className="Menu-Header">
          <div className="MenuLogo" onClick={handleLogoClick}>
            <img className="mLogo" src={MLogo} alt=""></img>
          </div>
        </div>
        <div className="closebtn">
          {" "}
          <img
            className="close"
            src={close}
            alt=""
            onClick={() => {
              setMenu(false);
              render(<CMenu setMenu={setMenu} classN={"rollout"} />);
            }}
          ></img>
        </div>

        <div className="Container">
          <div
            className="Card-con"
            onClick={() => {
              handleClick("/about");
            }}
          >
            <Card name={"ABOUT US"} logo={about} page={"/about"}></Card>
          </div>
          <div
            className="Card-con"
            onClick={() => {
              handleClick("/sponsor");
            }}
          >
            <Card name={"SPONSOR US"} logo={sponsor} page={"/sponsor"}></Card>
          </div>
          <div
            className="Card-con"
            onClick={() => {
              handleClick("/events");
            }}
          >
            <Card name={"EVENTS"} logo={events}></Card>
          </div>
        </div>

        <div className="bottom">
          <div className="section">
            <div className="underline"></div>
            <div className="social"> SOCIALS </div>
            <div className="underline"></div>
          </div>
          <div className="links">
            <a
              className="Limage"
              href="https://instagram.com/sphinx_mnit?igshid=YmMyMTA2M2Y="
            >
              <img className="social_img " src={insta} alt=""></img>
            </a>
            <a
              className="Limage"
              href="https://www.facebook.com/sphinxMNIT?mibextid=ZbWKwL"
            >
              <img className="social_img" src={facebook} alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function CMenu(props) {
  const { setMenu, classN } = props;

  const handleClick = (page) => {};

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
              render(<CMenu setMenu={setMenu} classN={"rollout"} />);
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
            <a className="Limage" href="https://www.instagram.com/">
              <img className="social_img " src={insta} alt=""></img>
            </a>
            <a className="Limage" href="https://www.instagram.com/">
              <img className="social_img" src={facebook} alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
