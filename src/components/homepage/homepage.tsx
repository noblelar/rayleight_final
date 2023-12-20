import React from "react";
import UpEvent from "./upevent";
import { MultipleItems } from "../carousel/carousel";
import Image from "next/image";
// import CouroselMultipleItems from "../carousel/carousel";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* ==================== Introductory Image Area ========= */}
      <div className=" bg-[url('/images/one.jpeg')] xl:h-[90vh] h-[90vh] w-full bg-cover  top-0 -z-20 bg-no-repeat -mt-[8rem] ">
        <div className=" flex justify-center justify-items-center h-[100%] w-[] ">
          <div className=" m-auto text-backgroundColor  "> God is Good </div>
        </div>
      </div>
      {/* ============= Bible Verese Area ============= */}
      <div>
        <div className="flex justify-center">
          <div className="container">
            <div className=" max-w-500px px-4 my-8  lg:max-w-[75%] m-auto md:-mt-[3rem] bg-backgroundColor shadow-lg p-6 rounded-lg ">
              <div className=" font-playfair italic font-extrabold text-[2em] text-center">
                “ God is light; In him there is no darkness...”
              </div>
              <div className=" text-center italic font-kalnia ">
                (1 John 15 )
              </div>
              <div className=" text-center text-[1.3em] py-8 lg:max-w-[75%] m-auto md:max-lg:px-[4rem] ">
                We are a friendly church with arms wide open to our local
                community. Whether you attend a group in our building, or come
                along on a Sunday morning, we hope you find the warmest of
                welcomes here.
                <br />
                <br />
                We want to serve our community, showing them the love that God
                has shown to us and welcoming them into our family. Church is a
                place to call home.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== Upcoming Events ============= */}
      <div className=" bg-secondaryColor/80 mb-4 pb-12 ">
        <div className="container text-textColor m-auto ">
          <div className=" flex flex-col justify-center min-h-[20rem] m-auto ">
            <div className=" font-playfair font-bold text-center mt-[3rem] text-[2rem] text-backgroundColor ">
              Upcoming Events
            </div>
            <UpEvent />
            <UpEvent />
            <UpEvent />
          </div>
        </div>
      </div>

      {/* ================== You Tube Channel ================== */}
      <div className=" my-8 text-textColor  ">
        <div className="container m-auto ">
          <div className=" m-auto text-center p-6 font-semibold font-kalnia text-[1.5rem] ">
            Check Out Rayleigh Methodist Church&apos;s <br /> Youtube Channel
          </div>
          <div className="  lg:flex p-8 lg:space-x-8 min-h-[25rem] ">
            <div className="  lg:w-[50%] min-h-[200px] py-4 ">
              <iframe
                className=" w-full h-full "
                // width="100%"
                // height="100%"
                src="https://www.youtube.com/embed/y89CQgdgrio"
                title="Alpha Walkthrough 2023"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="  lg:w-[50%] m-auto px-6 max-md:p-1 ">
              <div className=" font-playfair font-extrabold text-[2rem] text-center text-primaryColor py-2 ">
                Coming Soon ALPHA 2024
              </div>
              <div className="py-2 text-[1.5rem] text-center ">
                Current & Previous sermon videos that can be repeated by members
                of the community
              </div>
              <div className=" text-[1.2rem] py-2 text-justify ">
                Curious what we believe and why? Church is a place to explore,
                ask questions and discover what faith could mean in your life.
                We&apos;d love to walk with you on that journey - find out more
                here.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== Youtube Carousel =============== */}
      <div className=" my-[5rem] ">
        <div className="container m-auto  ">
          <div className=" m-auto flex justify-center ">
            <MultipleItems />
          </div>
        </div>
      </div>

      {/* =================== Christmas Celebration ================ */}
      <div className=" my-[2rem] mb-[10rem] max-lg:mb-8 ">
        <div className="container m-auto ">
          <div className="lg:flex justify-between">
            <div className="lg:w-[50%] text-textColor ">
              <div className="text-center font-kalnia font-semibold text-[2rem] pb-[1rem] lg:text-[3.2rem] ">
                Celebrate Christmas With Us!
              </div>
              <div className=" text-justify px-6 text lg:text-[1.8rem] ">
                There&apos;s lots going on at RMC this Christmas... from a
                Christmas Quiz to a Coffee Morning with Father Christmas!
                We&apos;ve got lots of Christmas services, including Carols and
                a Christingle! We&apos;d love to see you at any of our Christmas
                services or events
              </div>
            </div>
            <div className="lg:w-[50%] ">
              <div className=" p-8 max-lg:my-12 max-md:mx-8  min-h-[400px] max-w-[500px] bg-[url('/images/christmas1.png')] bg-cover bg-no-repeat flex justify-center rounded-3xl m-auto ">
                {" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
