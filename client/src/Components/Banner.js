import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <Slider {...sliderSettings}>
      <div>
        <img
          id="banner-image"
          src={pics[`Avatar The Way of Water.jpg`]}
          alt="Avatar The Way of Water"
        />
      </div>
      <div>
        <img id="banner-image" src={pics[`Creed 3.jpg`]} alt="Creed 3" />
      </div>
      <div>
        <img id="banner-image" src={pics[`John Wick 4.jpg`]} alt="John Wick 4" />
      </div>
      <div>
        <img id="banner-image" src={pics[`Modern Family.jpg`]} alt="Modern Family" />
      </div>
      <div>
        <img id="banner-image" src={pics[`Red Notice.jpg`]} alt="Red Notice" />
      </div>
      <div>
        <img id="banner-image" src={pics[`Run.jpg`]} alt="Run" />
      </div>
      <div>
        <img id="banner-image" src={pics[`Succession.jpg`]} alt="Succession" />
      </div>
      <div>
        <img
          id="banner-image"
          src={pics[`The Last Dance.jpg`]}
          alt="The Last Dance"
        />
      </div>
      <div>
        <img id="banner-image" src={pics[`Vikram.jpg`]} alt="Vikram" />
      </div>
      <div>
        <img id="banner-image" src={pics[`Wednesday.jpg`]} alt="Wednesday" />
      </div>
    </Slider>
  );
};

export default Banner;
