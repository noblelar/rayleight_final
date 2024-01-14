import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServicesA from "./services";
import Gallery from "./gallery";



const carouselG = [
  {
    image: "NashHall.png",
    title: "Nash Hall ",
  },
  {
    image: "wesleyhall.png",
    title: "Wesley Hall ",
  },
  {
    image: "preschoolbuilding.png",
    title: " Pre-School Building ",
  },
  {
    image: "preschoolclassroom.png",
    title: " Pre-School Classroom ",
  },
  {
    image: "preschoolclassroom2.png",
    title: " Pre-School Classroom 2 ",
  },
  {
    image: "preschoolfoyer.png",
    title: "Pre-School Foyer ",
  },
  {
    image: "preschooloffice.png",
    title: "Pre-School Office ",
  },
  {
    image: "preschooloutspace.png",
    title: " Pre-School Outer Space ",
  },
];

export default class Galleries extends Component {
  render() {
    var settings = {
      className: " !-z-10 ",
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay: true,
      autoplaySpeed: 4000,
      rtl: true,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        {/* <h2>Center Mode</h2> */}
        <Slider {...settings}>
          {carouselG.map((car, e) => (
          <Gallery key={e} image={car.image} title={car.title} />
          ))}
        </Slider>
      </div>
    );
  }
}
