import React from "react";
import "./menu.css";
import arrow from "../../assets/arrow.png";
import { render } from "@testing-library/react";
import About from "../about-page/about";
import { useNavigate } from "react-router-dom";
import Home from "../home/home";

function Card(props) {
  const { name, logo, page } = props;

  return (
    <div className="Card ">
      <img className="card_img " src={logo} alt=""></img>

      <img className="arrow_img " src={arrow} alt=""></img>
      <div className="card_title ">{name}</div>
      <></>
    </div>
  );
}

export default Card;
