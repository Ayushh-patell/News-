import React from "react";

export default function Carousel_Item(props) {
  return (
    <div className={`carousel-item ${props.index === 0 ? "active" : ""} `} data-bs-interval="4000">
        <img src={props.img ? props.img : "News-img.png"} className="d-block w-100 carousel-img" alt="..."/>
        <div className="carousel-text d-block">
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
        </div>
      </div>
  );
}
