import React from "react";
import "./sponsors.css";
import Box1 from "./box1";
import Box2 from "./box2";
import Navbar from "../../common/navbar/navbar";
import line from "../../assets/line.png";
import anim from "../../assets/anim1.gif";
var page2 = 0;

function Sponsors(props) {
  const [join, setjoin] = React.useState(true);
  const { setIsMenuOpen, isMenuOpen } = props;
  return (
    <div className="SponsorBack">
      <div className="videoTag">
        <img className="videoTag" src={anim} alt="my-gif" />
      </div>

      <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className="floating-group">
        <img src={line} id="floating1" alt="" />
        <img src={line} id="floating2" alt="" />
        <img src={line} id="floating3" alt="" />
        <img src={line} id="floating4" alt="" />
      </div>

      <div className="sponsors-main">
        {join ? <Box1 setjoin={setjoin} /> : <Box2 setjoin={setjoin} />}
        {/* <Box2 /> */}
      </div>
    </div>
  );
}

export default Sponsors;
