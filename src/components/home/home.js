import React, { useEffect, useState } from "react";
import "./home.css";
import landing from "../../assets/landing.webp";
import MLogo from "../../assets/Mlogo.png";

import smoke from "../../assets/smoke.png";
import smoke2 from "../../assets/smoke2.png";
import smoke3 from "../../assets/smoke3.png";
import line from "../../assets/line.png";
import Menu from "../menu/menu";
import Navbar from "../../common/navbar/navbar";
import anim from "../../assets/anim1.gif";
import Loader from "../Loader";

function Home({ isLoading, setLoading }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  function handleClick() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLScce_eX0abwtJjxiPpPVmW8d18iqdBpTWBtQM_Ui0jsyU4j9A/viewform";
  }
  return (
    <div className="back">
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

        <img className="landing" src={landing} alt=""></img>
        <>
          {/* <div className="smoke_grp">
          <img className="smoke" src={smoke} alt=""></img>
          <img className="smoke2" src={smoke2} alt=""></img>
          <img className="smoke3" src={smoke3} alt=""></img>
        </div> */}
          <div className="line">
            <img className="line1 " src={line} alt=""></img>
            <img className="line2" src={line} alt=""></img>
            <img className="line3" src={line} alt=""></img>
            <img className="line4" src={line} alt=""></img>
          </div>
          <Navbar />
          <div className="main">
            <img className="Mlogo shadowfilter" src={MLogo} alt=""></img>\
            <div className="content">
              {" "}
              Amidst the dusty deserts of Egypt we found extraterrestrial
              elements. To discover join hands with us.{" "}
            </div>
            <button className="preReg shadowfilter" onClick={handleClick}>
              {" "}
              <span className="buttonText"> PRE-REGISTER</span>
            </button>
            <div className="clouds"></div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Home;
