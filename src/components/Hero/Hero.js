import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import LockIcon from '@material-ui/icons/Lock';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import img1 from "../../images/hm-1-slider-1.jpg";
import "./Hero.css";

const Hero = () => {
  const configSlider = {
    arrows: false,
    dots: true,
    infinity: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const heroData = [
    {
      id: 1,
      img: img1,
      title: "Leather Simple Backpacks",
      content:
        "Discover our collection with leather simple packs.Less is morw never out trend",
    },
    {
      id: 2,
      img: img1,
      title: "Leather Simple Backpacks",
      content:
        "Discover our collection with leather simple packs.Less is morw never out trend",
    },
    {
      id: 3,
      img: img1,
      title: "Leather Simple Backpacks",
      content:
        "Discover our collection with leather simple packs.Less is morw never out trend",
    },
  ];

  const bannerData = [
    {
      icon: <LocalShippingIcon className="icon-item"/>,
      title: "Free Shipping",
      content: "Orders over $100",
    },
    {
      icon: <KeyboardReturnIcon className="icon-item" />,
      title: "Free Return",
      content: "Within 30 days",
    },
    {
      icon: <LockIcon className="icon-item" />,
      title: "100% Secure",
      content: "Payment )nline",
    },
    {
      icon: <LocalOfferIcon className="icon-item" />,
      title: "Best Price",
      content: "Guarranteed",
    },
  ];

  return (
    <>
      <div className="hero">
        <div className="container">
          <Slider {...configSlider}>
            {heroData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="carousel-item">
                    <div className="item-content">
                      <h3>New Arrivals</h3>
                      <h1>{item.title}</h1>
                      <p>{item.content}</p>
                      <button>Explore Now</button>
                    </div>
                    <div className="item-img">
                      <img src={item.img} alt={item.title} />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="banner">
            {bannerData.map((item, index) => {
              return (
                <div className="banner-item" key={index}>
                  <div className="banner-icon">{item.icon}</div>
                  <div className="banner-content">
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
