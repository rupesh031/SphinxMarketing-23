import React, { Component, useState, useEffect } from "react";
import PropTypes from "prop-types";
import bg from "../../assets/about_bg.webp";
import about_head from "../../assets/about_heading.png";
import line from "../../assets/line.png";
import "./about.css";
import Navbar from "../../common/navbar/navbar";
import anim from "../../assets/anim1.gif";
import Loader from "../Loader";
function About({ isLoading, setLoading }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="about-bg">
        {isLoading ? <Loader /> : <></>}
        <div
          style={
            isLoading
              ? { opacity: 0 }
              : { animation: "fade_in_page 500ms ease-out" }
          }
          className={isLoading ? "loader-trans" : ""}
        >
          <img className="about-bgimage" src={bg}></img>
          <div className="videoTag">
            <img className="videoTag" src={anim} alt="my-gif" />
          </div>
          <Navbar />

          <div className="line">
            <img className="aline1 " src={line} alt=""></img>
            <img className="aline2" src={line} alt=""></img>
            <img className="aline3" src={line} alt=""></img>
            <img className="aline4" src={line} alt=""></img>
          </div>

          <div className="about-heading">
            <img className="about-logo" src={about_head} alt=""></img>
            <p>
              Science and Technology Society (S&T), MNIT Jaipur is a society
              under the Dean Student Welfare of MNIT Jaipur. The society
              encourages young minds of the institute to showcase their
              technical, management and behavioral skills and provides them with
              a platform to bring out the best of themselves. S&T is delighted
              to announce the return of the biggest annual techno- management
              fest of the state. So, presenting before you - SPHINX'23. Let your
              curiosities fly because SPHINX'23 is here to to sate your hunger
              for emerging technological advancements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
