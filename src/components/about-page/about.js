import React, { Component } from "react";
import PropTypes from "prop-types";
import bg from "../../assets/about_bg.png";
import about_head from "../../assets/about_heading.png";
import line from "../../assets/line.png";
import "./about.css";
import Navbar from "../../common/navbar/navbar";
import anim from "../../assets/anim1.gif";

function About() {
  return (
    <div className="about-bg">
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
          Science and Technology Society, MNIT is MNIT Jaipur’s society which
          under the office of Dean Student Welfare, encourages students to
          showcase their talent in technical activities. As we bring back Sphinx
          2K23 after 3 long years, trust us, Sphinx would be an answer to all
          your curiosities and to sate your hunger for emerging
          technological advancements.
        </p>
      </div>
    </div>
  );
}

export default About;
