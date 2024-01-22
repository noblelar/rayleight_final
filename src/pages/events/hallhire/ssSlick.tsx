
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesA from "./services";

const carouselA = [
   {
      image: "outside.png",
      title: "Wedding Ceremonies",
      text: "A wedding is a lifetime event and we want yours to be one of the grandest & memorial ",
   },
   {
      image: "venue1.png",
      title: " Corporate Events ",
      text: "We serve your corporate guests with the best luxurious hospitality and gracious service",
   },
   {
      image: "venue2.png",
      title: " Birthday Parties ",
      text: "Our place is the ideal for organizing all types of birthday parties for your loved ones ",
   },
   {
      image: "venue3.png",
      title: " social Events ",
      text: "Our place is the perfect venue for hosting all kinds of social events making a social events real fun",
   },
]


export default class CenterMode extends Component {


  render() {

   var settings = {
      className: " !-z-10 ",
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay: true,
      autoplaySpeed: 4000, 
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        {/* <h2>Center Mode</h2> */}
        <Slider {...settings}>

         {carouselA.map((car, e) => 
            <ServicesA key={e} image={car.image} title={car.title} text={car.text}/>
         )}
   
        </Slider>
      </div>
    );
  }
}