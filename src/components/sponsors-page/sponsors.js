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
      <div className="line">
        <img className="aline1 " src={line} alt=""></img>
        <img className="aline2" src={line} alt=""></img>
        <img className="aline3" src={line} alt=""></img>
        <img className="aline4" src={line} alt=""></img>
      </div>

      <div className="sponsors-main">
        {join ? <Box1 setjoin={setjoin} /> : <Box2 setjoin={setjoin} />}
        {/* <Box2 /> */}
      </div>
    </div>
  );
}

export default Sponsors;
