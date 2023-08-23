import React, { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import { Link } from "react-router-dom";

export default function Home() {
  const [article_data, setarticles_data] = useState(null);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=03b69f2d55304315a88eb13de2017b7c&pageSize=8&page=1`;
    fetch(url)
      .then((result) => result.json())
      .then((data) => setarticles_data(data.articles));
  }, []);

  return (
    <>
      <h2 className="m-4">Top Headlines</h2>
      <div id="caros" className="container">
        {article_data && <Carousel articles={article_data} />}
      </div>
      <h2 className="m-4">Category-wise News</h2>
      <div className="container my-3">
        <div className="row justify-content-around">
          <Link className="col-md-4 col-sm-6" to="/business">
            <div id="business" className="catagory row m-2 rounded">
              <ion-icon name="business-outline"></ion-icon>
              Business
            </div>
          </Link>
          <Link className="col-md-4 col-sm-6" to="/entertainment">
            <div id="entertainment" className="catagory row m-2 rounded">
              <ion-icon name="videocam-outline"></ion-icon>
              Entertainment
            </div>
          </Link>
          <Link className="col-md-4 col-sm-6" to="/sports">
            <div id="sports" className="catagory row m-2 rounded">
              <ion-icon name="basketball-outline"></ion-icon>
              Sports
            </div>
          </Link>
          <Link className="col-md-4 col-sm-6" to="/health">
            <div id="health" className="catagory row m-2 rounded">
              <ion-icon name="medkit-outline"></ion-icon>
              Health
            </div>
          </Link>
          <Link className="col-md-4 col-sm-6" to="/science">
            <div id="science" className="catagory row m-2 rounded">
              <ion-icon name="flask-outline"></ion-icon>
              Science
            </div>
          </Link>
          <Link className="col-md-4 col-sm-6" to="/technology">
            <div id="technology" className="catagory row m-2 rounded">
              <ion-icon name="hardware-chip-outline"></ion-icon>
              Technology
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
