import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default class OneSideSlide2 extends Component {
  render() {
    const settings = {
      className: "!-z-10",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div>
        {/* <h2>Variable width</h2> */}
        <Slider {...settings}>
          <div className=" w-full ">
            <div className=" flex w-full text-textColor max-lg:flex-col ">
              <div className="m-auto my-8 lg:w-[35%] ">
                <div className=" w-full text-center m-auto ">
                  <Image
                    className=" w-full h-full m-auto "
                    src={"/images/breakfast_Club.png"}
                    alt={"breakfast_Club"}
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
              </div>
              <div className="m-auto my-8 lg:w-[50%] max-lg:w-full flex justify-center items-center ">
                <div className=" max-lg:mx-4 w-full px-8 font-opensans font-semibold text-center text-[1.2rem] max-lg:p-8 ">
                  Who: Parents & Carers, Children under 5&apos;s <br />
                  When: Fridays 9:30am to 11am, during term time <br />
                  Where: Nash Hall – please use the side entrance of the
                  building <br />
                  Sign-Up?: Not necessary - just come along when you can! <br />
                  Cost: No entry fee, minimal cost for breakfast <br />
                  If the money is a problem for you, please come along anyway –
                  we won&apos;t turn you away!
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full ">
            <div className=" flex w-full text-textColor max-lg:flex-col-reverse flex-row-reverse ">
              <div className="m-auto my-8 lg:w-[35%] ">
                <div className=" w-full text-center m-auto ">
                  <Image
                    className=" w-full h-full m-auto "
                    src={"/images/breakfast_plate.jpg"} 
                    alt={"children Theater"} 
                    width={300}
                    height={300} 
                    quality={100}
                  />
                </div>
              </div>
              <div className="m-auto my-8 lg:w-[50%] flex justify-center items-center ">
                <div className=" max-lg:mx-4 w-full px-8 font-opensans font-semibold text-center text-[1.2rem] max-lg:p-8 ">
                  Meet new people, play and have breakfast! We have toys out for
                  the little ones to play with on one side of the room, and
                  tables to sit round and eat on the other. At the end of the
                  session we sing some fun songs together, which is always a
                  highlight. We serve a full English breakfast, with sausages,
                  bacon, beans, egg and hash browns. You can order which items
                  you and your little ones would like, and we have toast and
                  drinks available to help yourself.   
                </div> 
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
