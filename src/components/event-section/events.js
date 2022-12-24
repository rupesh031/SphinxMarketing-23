import React from "react";
import Navbar from "../../common/navbar/navbar";
import "./events.css";
import EventCard from "./event_card";

function Events() {
  const event_list = [
    {
      img: `./event1.jpg`,
      desc: "Think.Code.Innovate",
    },
    {
      img: `./event2.jpg`,
      desc: "Enjoy the show",
    },
    {
      img: `./event3.jpg`,
      desc: "Evening with robots",
    },
  ];

  return (
    <div className="event-bg">
      <Navbar />
      {/* <div className="floating-group">
            <img src={require("./floating.png")} id='floating1' alt="" />
            <img src={require("./floating.png")} id='floating1' alt="" />
            <img src={require("./floating.png")} id='floating1' alt="" />
            <img src={require("./floating.png")} id='floating1' alt="" />
            <img src={require("./floating.png")} id='floating2' alt="" />
            <img src={require("./floating.png")} id='floating2' alt="" />
            <img src={require("./floating.png")} id='floating2' alt="" />
            <img src={require("./floating.png")} id='floating2' alt="" />
            <img src={require("./floating.png")} id='floating3' alt="" />
            <img src={require("./floating.png")} id='floating3' alt="" />
            <img src={require("./floating.png")} id='floating3' alt="" />
            <img src={require("./floating.png")} id='floating3' alt="" />
            <img src={require("./floating.png")} id='floating4' alt="" />
            <img src={require("./floating.png")} id='floating4' alt="" />
            <img src={require("./floating.png")} id='floating4' alt="" />
            <img src={require("./floating.png")} id='floating4' alt="" />
        </div> */}
      <div className="events-main">
        <div className="rectBox"></div>
        <div className="event-content">
          <div className="event-logo">
            <img src={require("./logo.png")} alt="" />
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur. Dui sagittis cursus amet
              quis. Sollicitudin et id nibh commodo cursus id. Ut feugiat arcu
              metus iaculis senectus.
            </p>
          </div>
          <div className="btns">
            <div className="btns1">
              <button>
                Join Tech Events
                <span className="arrow-icon">
                  <img src={require("./arrow-icon.png")} alt="" />
                </span>
              </button>
            </div>
            <div className="btns2">
              <button>
                Watch Video{" "}
                <span className="yt-icon">
                  <img src={require("./yt-icon.png")} alt="" />
                </span>
              </button>
            </div>
          </div>

          <div className="card-group">
            {event_list.map((eve, i) => (
              <EventCard path={eve.img} desc={eve.desc} key={i} />
            ))}
            {/* <img src={require("./card.png")} alt="" />
            <img src={require("./card.png")} alt="" />
            <img src={require("./card.png")} alt="" /> */}
          </div>
        </div>
        <div className="rectBox2"></div>
      </div>
    </div>
  );
}

export default Events;
