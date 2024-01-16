"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITextCarousel } from "../utils/types";

export const SimpleSlider = ({
  bandp,
  sliderButton,
}: {
  bandp: Array<ITextCarousel>
  sliderButton: boolean;
}) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4500,
  
  };
  return (
    <div className=" w-[100%] max-lg:mt-8 .carousel shadow-2xl p-10 bg-backgroundColor  ">
      <Slider {...settings}>
        {bandp.map((bandpi, i) => {
          return (
            <div key={i} className=" m-auto justify-center ">
              <p className=" font-playfair text-[2rem] m-auto max-md:text-center py-8   ">
                {bandpi.title}
              </p>
              <p className=" font-opensans font-medium text-[1.3rem] text-justify ">
                {bandpi.content}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
