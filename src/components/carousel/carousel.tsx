import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MultipleItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4500,
    className: " m-auto flex justify-center  ",
    responsive: [
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 3,
      //       infinite: true,
      //       dots: true,
      //     },
      //   },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2,
      //       initialSlide: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //     },
      //   },
    ],
  };
  return (
    <div className=" max-w-[100%] m-auto justify-center ">
      <h2 className="text-center"> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <div className=" min-w-[10rem]  ">
            <div>
              <iframe
                className="w-full h-full "
                width="100%"
                height=""
                src="https://www.youtube.com/embed/tDFy_NlB_Sw"
                title="RMC Sunday Worship 19th November 2023"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div> */}
      </Slider>
    </div>
  );
};
