import React, { Component } from "react";
import "./style2.css";

function Box1(props) {
  // const {setjoin}=props;
  // const handleClick=()=>{setjoin(false)}

  return (
    <>
      <div className="Box">
        <div className="title">
          <img src={require("./title.png")} alt="" />
        </div>
        <div className="box-content">
          <p className="gradient">
            MNIT Jaipur{" "}
            <span className="txt">
              wants to create a <br></br> wonderful journey. Help us in our{" "}
              <br></br>
              journey to create a fantastic event<br></br> full of
            </span>{" "}
            Technology
          </p>
          <p className="txt-white">
            <span>Want to be part of our journey?</span>{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdloMri9KNffJItohp95zmQq9E7irSRien5u00LZaOhM6r9qw/viewform">
              Get in Touch
            </a>
          </p>
          {/* <div className="btn">
            <button>JOIN US</button>
          </div> */}
        </div>
      </div>
    </>
  );
}
// const el=addEventListener(document.querySelector(".btn>button"));

export default Box1;
