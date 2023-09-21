import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import News_Item from "./News_Item";

export default function NavBar(props) {
  const [page, setpage] = useState(1);
  const [totalData, settotalData] = useState(100);// initially 100 so infinite scroll gets started
  const [article_data, setarticles_data] = useState(null);

  const empty_cont = () => {
    if (document.getElementById("search_input").value == "") {
      setarticles_data(null);
    }
  };

  const search_data = (e) => { // search news article according to the search input
    let spinners =document.getElementsByClassName("search-spin")[0];
    spinners.style.display = "block";
    e.preventDefault();
    let url = `https://newsapi.org/v2/everything?q=${
      document.getElementById("search_input").value
    }&apiKey=03b69f2d55304315a88eb13de2017b7c`;
    if (document.getElementById("search_input").value) {
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
    
    } else {
      setarticles_data(null);
    }
  
  };
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
//check whether the length of article array is not equal to totalResults form the api, if true than add more articles to the array else make the totalData state equal to the totalresults
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
      <nav id="main_nav" className="navbar py-0 shadow bg-body-tertiary">
        <div
          className="container-fluid"
          style={{ justifyContent: "space-around" }}
        >
          <a className="navbar-brand py-0" href="/">
            <img
              src="News_logo.png"
              alt="AP News"
              width="110"
              height="70"
              className="d-inline-block align-text-top"
            />
          </a>
          <form className="form-inline d-flex">
          <div className="input-group">
            <input
              id="search_input"
              onChange={empty_cont}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              required
            />
            <div className="input-group-append">
            <button
              onClick={search_data}
              className="btn btn-outline-success my-2 my-sm-0 d-flex align-items-center"
            >
              Search
              <span className="search-spin"><span
                className="spinner-border spinner-border-sm ms-2"
                role="status"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden search-spin ">Loading...</span></span>
            </button>
            </div>
            </div>
          </form>
        </div>
      </nav>
      <div id="search-container" className="container shadow">
        {article_data && (
          <InfiniteScroll
            dataLength={article_data.length}
            next={fetchMoreData}
            hasMore={article_data.length < totalData}
            loader={<h4>Loading...</h4>}
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
      <a href="#main_nav"><div title="Go to the top" id="totop" className=" bg-dark text-white">^</div></a>
        
    </>
  );
}
