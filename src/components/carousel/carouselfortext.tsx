"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// const images = ["church.jpg", "church1.jpg", "church2.jpg", "church3.jpg"];

export const SimpleSlider = ({
  pics,
  sliderButton,
}: {
  pics: object;
  sliderButton: boolean;
}) => {
  const sliderRef = useRef(null);

  const Next = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`text-primaryColor/50 bg-backgroundColor/50 cursor-pointer hover:shadow-lg w-[8%] hover:text-primaryColor/90 hover:bg-backgroundColor/70 absolute top-[45%]  right-0 z-30 rounded-2xl hidden lg:flex text-[3.8rem] m-auto`}
        // style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        <IoIosArrowDroprightCircle className={" m-auto"} />
      </div>
    );
  };

  const Previous = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "text-primaryColor/50 bg-backgroundColor/50 cursor-pointer hover:shadow-lg w-[8%] hover:text-primaryColor/90 hover:bg-backgroundColor/70 absolute bottom-[45%]  left-0 z-30 rounded-2xl hidden lg:block text-[3.8rem] m-auto justify-center"
        }
        onClick={onClick}
      >
        <IoIosArrowDropleftCircle className={"m-auto"} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    className: "rounded-tr-[30%] !rounded-bl-[30%]",

    nextArrow: sliderButton ? <Next /> : "",
    prevArrow: sliderButton ? <Previous /> : "",

    appendDots: (dots) => (
      <ul className=" bg-primaryColor text-primaryColor absolute bottom-10 ">
        {dots}
      </ul>
    ),
    customPaging: (dots) => (
      <ul className="absolute bottom-20 w-3 h-3 rounded-[50%] bg-backgroundColor hover:bg-primaryColor active:bg-primaryColor ">
        {}
      </ul>
    ),
  };
  return (
    <div className=" w-[100%] ">
      <Slider {...settings}>
        {pics.map((image, i) => {
          return (
            <div key={i} className=" m-auto justify-center shadow-2xl p-10 ">
              <p className=" font-playfair text-[2rem] m-auto max-md:text-center py-8   ">
                One Baptism recognised by All
              </p>
              <p className=" font-opensans font-medium text-[1.3rem] text-justify ">
                There exists one universally recognized baptism acknowledged by
                mainstream Churches, including the Methodist Church and the
                Church of England, that administer infant baptisms.
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
