import React from "react";
import "./menu.css";
import arrow from "../../assets/arrow.png";

function Card(props) {
  const { name, logo } = props;

  return (
    <div className="Card ">
      <img className="card_img " src={logo} alt=""></img>
      <div className="card_hover "></div>
      <img className="arrow_img " src={arrow} alt=""></img>
      <div className="card_title ">{name}</div>
      <></>
    </div>
  );
}

export default Card;
