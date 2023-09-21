import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import News_Item from "./components/News_Item";
import { Link } from "react-router-dom";
import Spinner from "./components/Spinner";

export default function News(props) {
  if (props.active == "business") {
    document.documentElement.style.setProperty(
      "--main-clr",
      "rgba(121, 86, 253, 1)"
    );
  } else if (props.active == "entertainment") {
    document.documentElement.style.setProperty(
      "--main-clr",
      "rgba(38, 146, 219, 1)"
    );
  } else if (props.active == "sports") {
    document.documentElement.style.setProperty(
      "--main-clr",
      "rgba(45, 131, 117, 1)"
    );
  } else if (props.active == "science") {
    document.documentElement.style.setProperty(
      "--main-clr",
      "rgba(167, 60, 86, 1)"
    );
  } else if (props.active == "health") {
    document.documentElement.style.setProperty(
      "--main-clr",
      "rgba(63, 99, 187, 1)"
    );
  } else if (props.active == "technology") {
    document.documentElement.style.setProperty(
      "--main-clr",
      "rgba(211, 73, 152, 1)"
    );
  }

  const [page, setpage] = useState(1);
  const [totalData, settotalData] = useState(100);
  const [article_data, setarticles_data] = useState(null);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.active}&apiKey=03b69f2d55304315a88eb13de2017b7c&pageSize=15&page=${page}`;
//get the news articles from the backend by a post method
    fetch("http://localhost:5000/getNews", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        newsUrl: url,
      }),
    }).then((response) => {
      response.json().then((data) => {
        setarticles_data(data.articles)
      });
    });
  }, []);


  let fetchMoreData = () => {
    setpage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.active
    }&apiKey=03b69f2d55304315a88eb13de2017b7c&pageSize=15&page=${page + 1}`;
//get the news articles from the backend by a post method
    fetch("http://localhost:5000/getNews", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        newsUrl: url,
      }),
    }).then((response) => {
      response.json().then((data) => {
        if (article_data.length !== data.totalResults) {
          setarticles_data(article_data.concat(data.articles));
        } else {
          settotalData(data.totalResults);
        }
      });
    });
  };

  return (
    <>
      <div className="container-fluid my-4">
        <h2 className="title m-4">
          Top news of{" "}
          {props.active.charAt(0).toUpperCase() + props.active.slice(1)}
        </h2>
        <div className="row">
          <div className="col-md-3 border-right border-dark">
            <nav className="navbar sticky-top pt-4">
              <ul className="navbar-nav w-100 mb-2 mt-5 ps-1 shadow">
                <li
                  className={`nav-item ${
                    props.active == "business" ? "business active" : "business"
                  }`}
                >
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    props.active == "general" ? "general active" : "general"
                  }`}
                >
                  <Link className="nav-link" to="/general">
                    General
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    props.active == "entertainment"
                      ? "entertainment active"
                      : "entertainment"
                  }`}
                >
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    props.active == "sports" ? "sports active" : "sports"
                  }`}
                >
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    props.active == "health" ? "health active" : "health"
                  }`}
                >
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    props.active == "science" ? "science active" : "science"
                  }`}
                >
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    props.active == "technology"
                      ? "technology active"
                      : "technology"
                  }`}
                >
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-9">
            {article_data && (
              <InfiniteScroll
                dataLength={article_data.length}
                next={fetchMoreData}
                hasMore={article_data.length < totalData}
                loader={<Spinner />}
              >
                <div className="row">
                  {article_data.map((element, Index) => (
                    <News_Item
                      url={element.url}
                      key={Index}
                      imgurl={element.urlToImage}
                      title={element.title}
                      desc={element.description}
                      time={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  ))}
                </div>
              </InfiniteScroll>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
