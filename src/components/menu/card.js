import React from "react";
import "./menu.css";
import arrow from "../../assets/arrow.png";
import { render } from "@testing-library/react";
import About from "../about-page/about";
import Home from "../home/home";

function Card(props) {
  const { name, logo, page } = props;
  return (
    <div
      className="Card "
      onClick={() => {
        console.log("press");
        render(<Home />);
      }}
    >
      <img className="card_img " src={logo} alt=""></img>

      <img className="arrow_img " src={arrow} alt=""></img>
      <div className="card_title ">{name}</div>
      <></>
    </div>
  );
}

export default Card;
