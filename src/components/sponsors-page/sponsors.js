import React from "react";
import "./sponsors.css";
import Box1 from "./box1";
import Box2 from "./box2";
import Navbar from "../../common/navbar/navbar";
import line from "../../assets/line.png";

var page2 = 0;

function Sponsors(props) {
  const { setIsMenuOpen, isMenuOpen } = props;
  return (
    <div className="SponsorBack">
      <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className="floating-group">
        <img src={line} id="floating1" alt="" />
        <img src={line} id="floating2" alt="" />
        <img src={line} id="floating3" alt="" />
        <img src={line} id="floating4" alt="" />
      </div>

      <div className="sponsors-main">
        <Box1 />
        {/* <Box2 /> */}
      </div>
    </div>
  );
}

export default Sponsors;
