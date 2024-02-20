import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import HomeCard from "../cards/homeCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const caroItems = [
  {
    title: " Trust in the lord with all your love ",
    date: "Monday 20 April 2021 - Tuesday 21 April 2021",
    location: "Gotham Fan 221b , New York",
    image: "homecaroimg1.png",
  },
  {
    title: " Trust in the lord with all your love ",
    date: "Monday 20 April 2021 - Tuesday 21 April 2021",
    location: "Gotham Fan 221b , New York",
    image: "homecaroimg2.png",
  },
  {
    title: " Trust in the lord with all your love ",
    date: "Monday 20 April 2021 - Tuesday 21 April 2021",
    location: "Gotham Fan 221b , New York",
    image: "homecaroimg3.png",
  },
  {
    title: " Trust in the lord with all your love ",
    date: "Monday 20 April 2021 - Tuesday 21 April 2021",
    location: "Gotham Fan 221b , New York",
    image: "homecaroimg2.png",
  },
];

// (document.getElementsByName(elementId) as HTMLInputElement).value;

function ResponsiveSlick({ next, previous }: { next: any; previous: any }) {
  let sliderRef = useRef(null);

  const next1 = () => {
    if (sliderRef) {
      (sliderRef as unknown as Slider).slickNext();
    }
  };
  const previous2 = () => {
    if (sliderRef) {
      (sliderRef as unknown as Slider).slickPrev();
    }
  };

  var settings = {
    className: " !-z-0 ",

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
    swipeToSlide: true,

    customPaging: function (i: any) {
      return (
        <a>
          <p className=" my-4 w-4 h-2 rounded-full bg-backgroundColor"></p>
        </a>
      );
    },
    dotsClass: "slick-dots slick-thumb bg ",
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
    <div className="slider-container space-x-0">
      <div className=" flex justify-between font-tegomin items-center pb-10 ">
        <div className=" font-tegomin text-[2.5rem] font-extrabold max-md:text-[1.8rem] max-md:ml-4  ">
          Upcoming Events
        </div>
        <div>
          {/* ============== Arrow button for carousel ================== */}
          <div className="flex flex-row mx-auto max-md:scale-75 max-md:hidden ">
            <button
              type="button"
              className=" text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 group hover:bg-backgroundColor hover:text-primaryColor"
              onClick={previous2}
            >
              <div className="flex flex-row align-middle justify-center items-center ">
                <p className=" !text-backgroundColor ">
                  <RiArrowLeftSLine className=" text-[2rem] group-hover:!bg-primaryColor rounded-full " />
                </p>
                <p className="ml-2">Prev</p>
              </div>
            </button>
            <button
              type="button"
              className=" group hover:bg-backgroundColor  text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 px-3 hover:text-primaryColor "
              onClick={next1}
            >
              <div className="flex flex-row align-middle justify-center items-center">
                <span className="mr-2">Next</span>

                <RiArrowRightSLine className=" text-[2rem] group-hover:!bg-primaryColor rounded-full " />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Slider
        ref={(slider) => {
          // @ts-ignore
          sliderRef = slider;
        }}
        {...settings}
      >
        {caroItems.map((item, e) => (
          <HomeCard
            key={e}
            image={item.image}
            location={item.location}
            date={item.date}
            title={item.title}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ResponsiveSlick;
