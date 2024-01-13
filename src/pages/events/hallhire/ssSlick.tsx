
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesA from "./services";

const carouselA = [
   {
      image: "outside.png",
      title: "Wedding Ceremonies",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, quasi reprehenderit ducimus veritatis totam fuga.",
   },
   {
      image: "venue1.png",
      title: " Corporate Events ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, quasi reprehenderit ducimus veritatis totam fuga.",
   },
   {
      image: "venue2.png",
      title: " Birthday Parties ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, quasi reprehenderit ducimus veritatis totam fuga.",
   },
   {
      image: "venue3.png",
      title: " social Events ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt, quasi reprehenderit ducimus veritatis totam fuga.",
   },
];

const callCarouselItems = () => {
   { carouselA.forEach((element, e) => {
      return (
         <ServicesA key={e} image={carouselA[0].image} title={carouselA[0].title} text={carouselA[0].text}/>

      )
   })}
}


export default class CenterMode extends Component {


  render() {

   var settings = {
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 1000,
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
        <h2>Center Mode</h2>
        <Slider {...settings}>

         {carouselA.map((car, e) => 
            <ServicesA key={e} image={car.image} title={car.title} text={car.text}/>
         )}
   
        </Slider>
      </div>
    );
  }
}