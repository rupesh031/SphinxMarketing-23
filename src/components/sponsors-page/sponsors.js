import React, { useEffect } from "react";
import "./sponsors.css";
import Box1 from "./box1";
import Box2 from "./box2";
import Navbar from "../../common/navbar/navbar";
import line from "../../assets/line.png";
import anim from "../../assets/anim1.gif";
import Loader from "../Loader";
var page2 = 0;

function Sponsors(props) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const { setIsMenuOpen, isMenuOpen, isLoading, setLoading } = props;
  return (
    <div className="SponsorBack">
      {isLoading ? <Loader /> : <></>}
      <div
        style={
          isLoading
            ? { opacity: 0 }
            : { animation: "fade_in_page 500ms ease-out" }
        }
        className={isLoading ? "loader-trans" : ""}
      >
        <div className="videoTag">
          <img className="videoTag" src={anim} alt="my-gif" />
        </div>

        <Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <div className="">
          <img className="aline1 " src={line} alt=""></img>
          <img className="aline2" src={line} alt=""></img>
          <img className="aline3" src={line} alt=""></img>
          <img className="aline4" src={line} alt=""></img>
        </div>

        <div className="sponsors-main">
          <Box1 />
          {/* <Box2 /> */}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
