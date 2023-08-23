import React from "react";

export default function News_Item(props) {
  let spinners = document.getElementsByClassName("search-spin")[0];
  spinners.style.display = "none";

  const date = new Date(props.time);
  return (
    <a
      href={props.url}
      key={props.index}
      target="_blank"
      className="col-md-6 news-card my-2"
    >
      <div className="card shadow">
        <img
          loading="lazy"
          src={props.imgurl ? props.imgurl : "News-img.png"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc ? props.desc : ""}</p>
          <p className="card-detail">
            <span>By: </span>
            {props.author ? props.author : "Unknown Author"}
            <span>, At: </span>
            {date.toLocaleString()}{" "}
            <span className="source">{props.source}</span>
          </p>
        </div>
      </div>
    </a>
  );
}
