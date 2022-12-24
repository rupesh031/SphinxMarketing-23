import React from "react";

function EventCard(props) {
  const { path, desc } = props;
  return (
    <div className="event-card">
      <div className="event-img">
        {" "}
        <img className="event-cover" src={require(`${path}`)} alt="" />{" "}
      </div>

      <div className="event-desc">{desc}</div>
    </div>
  );
}

export default EventCard;
