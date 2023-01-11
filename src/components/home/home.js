import React, { useEffect, useState } from "react";
import "./home.css";
import landing from "../../assets/landing.png";
import MLogo from "../../assets/Mlogo.png";

import smoke from "../../assets/smoke.png";
import smoke2 from "../../assets/smoke2.png";
import smoke3 from "../../assets/smoke3.png";
import line from "../../assets/line.png";
import Menu from "../menu/menu";
import Navbar from "../../common/navbar/navbar";
import anim from "../../assets/anim1.gif";
import Loader from "../Loader";

function Home() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="back">
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
                Amidst the dusty deserts of Egypt we found some extraterrestrial
                elements. To discover join hands with us.{" "}
              </div>
              <button className="preReg shadowfilter">
                {" "}
                <span className="buttonText"> PRE-REGISTER</span>
              </button>
              <div className="clouds"></div>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default Home;
