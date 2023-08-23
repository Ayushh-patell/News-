import React from 'react'
import Carousel_Item from './Carousel_Item'
import { Link } from 'react-router-dom'

export default function Carousel(props) {
  return (
    <div id="top_news-carousel" className="carousel slide my-3 shadow" data-bs-ride="carousel">
  <div className="carousel-indicators">

    <button type="button" data-bs-target="#top_news-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#top_news-carousel" data-bs-slide-to="1"  aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#top_news-carousel" data-bs-slide-to="2"  aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#top_news-carousel" data-bs-slide-to="3"  aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#top_news-carousel" data-bs-slide-to="4"  aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#top_news-carousel" data-bs-slide-to="5"  aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#top_news-carousel" data-bs-slide-to="6"  aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#top_news-carousel" data-bs-slide-to="7"  aria-label="Slide 8"></button>
  </div>
  <Link to="/general" >
  <div className="carousel-inner" >
    <Carousel_Item key={0} index={0} title={props.articles[0].title} desc={props.articles[0].description} img={props.articles[0].urlToImage} url={props.articles[0].url}/> 
    <Carousel_Item key={1} index={1} title={props.articles[1].title} desc={props.articles[1].description} img={props.articles[1].urlToImage} url={props.articles[1].url}/>
    <Carousel_Item key={2} index={2} title={props.articles[2].title} desc={props.articles[2].description} img={props.articles[2].urlToImage} url={props.articles[2].url}/>
    <Carousel_Item key={3} index={3} title={props.articles[3].title} desc={props.articles[3].description} img={props.articles[3].urlToImage} url={props.articles[3].url}/>
    <Carousel_Item key={4} index={4} title={props.articles[4].title} desc={props.articles[4].description} img={props.articles[4].urlToImage} url={props.articles[4].url}/>
    <Carousel_Item key={5} index={5} title={props.articles[5].title} desc={props.articles[5].description} img={props.articles[5].urlToImage} url={props.articles[5].url}/>
    <Carousel_Item key={6} index={6} title={props.articles[6].title} desc={props.articles[6].description} img={props.articles[6].urlToImage} url={props.articles[6].url}/>
    <Carousel_Item key={7} index={7} title={props.articles[7].title} desc={props.articles[7].description} img={props.articles[7].urlToImage} url={props.articles[7].url}/> 
  </div>
  </Link>
  <button className="carousel-control-prev" type="button" data-bs-target="#top_news-carousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#top_news-carousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
