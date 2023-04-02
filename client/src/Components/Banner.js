import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  const pics = importAll(
    require.context("../pics/Banner", false, /\.(png|jpg|svg)$/)
  );

  // Trailer Button Function 
  const [showTrailer, setShowTrailer] = useState(false); // initialize state to false
  const handleTrailerVideo = () => {
    setShowTrailer(!showTrailer); // toggle state on button click
  }


  return (
    <Container>
    <Slider {...sliderSettings}>
      <div>
        <img
          className="banner-image"
          src={pics[`Avatar The Way of Water.jpg`]}
          alt="Avatar The Way of Water"
        />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/d9MyW72ELq0"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
          <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
      </div>
      <div>
        <img id="banner-image" src={pics[`Creed 3.jpg`]} alt="Creed 3" />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/AHmCH7iB_IM"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
          <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
           
      </div>
      <div>
        <img id="banner-image" src={pics[`John Wick 4.jpg`]} alt="John Wick 4" />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/yjRHZEUamCc"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
          <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
      </div>
      <div>
        <img id="banner-image" src={pics[`Modern Family.jpg`]} alt="Modern Family" />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/X0lRjbrH-L8"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
          <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
      </div>
      <div>
        <img id="banner-image" src={pics[`Red Notice.jpg`]} alt="Red Notice" />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/Pj0wz7zu3Ms"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
         <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
      </div>
      <div>
        <img id="banner-image" src={pics[`Run.jpg`]} alt="Run" />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/EoGojQE4p-8"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
          <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
      </div>
      <div>
        <img id="banner-image" src={pics[`Succession.jpg`]} alt="Succession" />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/OzYxJV_rmE8"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
          <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
      </div>
      <div>
        <img
          id="banner-image"
          src={pics[`The Last Dance.jpg`]}
          alt="The Last Dance"
        />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/JQk2hJs2ToA"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
         <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
      </div>
      <div>
        <img id="banner-image" src={pics[`Vikram.jpg`]} alt="Vikram" />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/OKBMCL-frPU"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
         <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
      </div>
      <div>
        <img id="banner-image" src={pics[`Wednesday.jpg`]} alt="Wednesday" />
        {showTrailer && (
            <iframe
              src="https://www.youtube.com/embed/Di310WS8zLk"
              title="YouTube video"
              allowFullScreen
              height="500"
              width="950"
            ></iframe>
          )}
         <button onClick={handleTrailerVideo}>
            {showTrailer ? "Hide Trailer" : "Watch Trailer"}
          </button> 
          <Link to="/Login">
        <button>Watch Movie</button>
        </Link>
      </div>
    </Slider>
    </Container>
  );
};

export default Banner;

