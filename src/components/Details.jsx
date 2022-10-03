import React from "react";

export default function Details(props) {
  return (
    <div className="details">
      <img src={props.img} />
      <div className="text">
        <h6>
          <i className="fa-solid fa-location-pin"></i>
          {props.location}
          <a href="#">View on Google Maps</a>
        </h6>
        <h1>{props.name}</h1>
        <p className="time">{props.time}</p>
        <p className="about">{props.about}</p>
      </div>
    </div>
  );
}
