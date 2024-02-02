import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


export default class OneSideSlide extends Component {
  render() {
    const settings = {
      className: "",
      dots: true,
      infinite: true,
      // centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // variableWidth: true,
      speed: 2000,
      initialSlide: 1,
      // autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div>
        {/* <h2>Variable width</h2> */}
        <Slider {...settings}>
          <div className=" w-full ">
            <div className=" flex w-full text-textColor max-lg:flex-col ">
              <div className="m-auto my-8 lg:w-[35%] ">
                <div className=" lg:mx-4 w-full m-auto  text-center ">
                  <Image
                    className=" w-full h-full m-auto "
                    src={"/images/drama_club.png"}
                    alt={"drama_club"}
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
              </div>
              <div className="m-auto my-8 lg:w-[50%] max-lg:w-full flex justify-center items-center bg-children ">
                <div className=" max-lg:mx-4 w-full px-8 font-opensans font-semibold text-center text-[1.2rem] ">
                  Who: Children in school years 3-6 <br />
                  When: Tuesdays 3:30pm to 4:30m, during term time <br /> Where:
                  Nash Hall – please use the side entrance of the building
                  <br /> Sign-Up?: Please email
                  joanna.lee@rayleighmethodistchurch.org.uk to book your
                  child&apos;s place in drama club <br /> Cost: This club is
                  free!
                </div>
              </div>
            </div>
          </div>

          {/* <div className=" w-full ">
            <div className=" flex w-full text-textColor flex-row-reverse ">
              <div className="m-auto my-8 lg:w-[35%] ">
                <div className=" max-lg:mx-4 w-full relative ">
                  <Image
                    className=" w-full h-full relative "
                    src={"/images/children_theater1.png"}
                    alt={"children Theater"}
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
              </div>
              <div className="m-auto my-8 lg:w-[50%] flex justify-center items-center bg-children ">
                <div className=" max-lg:mx-4 w-full px-8 font-opensans font-semibold text-center text-[1.2rem] "> 
                  A chance for children to unleash their creative side with
                  games and activities improving their drama skills. We&apos;ll
                  be learning to create freezeframes, act out stories and show
                  expressions, along with lots of fun. There will be a mix of
                  inspiration from secular stories and songs to Bible ones. Once
                  a term we have &apos;Drama Church&apos; – at our normal time
                  on a Tuesday we&apos;ll go into the main bit of the church and
                  invite parents to come and see what we&apos;ve been up to, and
                  maybe join in with a drama game or two!
                </div>
              </div>
            </div>
          </div> */}


        </Slider>
      </div>
    );
  }
}
