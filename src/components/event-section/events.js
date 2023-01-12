import React, { useEffect } from "react";
import Navbar from "../../common/navbar/navbar";
import "./events.css";
import EventCard from "./event_card";
import Loader from "../Loader";
function Events({ isLoading, setLoading }) {
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
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="event-bg">
      {isLoading ? <Loader /> : <></>}
      <div
        style={
          isLoading
            ? { opacity: 0 }
            : { animation: "fade_in_page 500ms ease-out" }
        }
        className={isLoading ? "loader-trans" : ""}
      >
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
                Sphinx 2K23 is here, and it’s about to be better than ever,
                we’ll be holding several events, tune into the events page
                regularly to be in loop with the upcoming events and the
                registrations!
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
              <a
                href="https://www.instagram.com/p/B3u2YDgn2FH/?utm_source=ig_web_button_share_sheet"
                className="btns2"
              >
                <button>
                  Watch Video{" "}
                  <span className="yt-icon">
                    <img src={require("./yt-icon.png")} alt="" />
                  </span>
                </button>
              </a>
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
    </div>
  );
}

export default Events;
