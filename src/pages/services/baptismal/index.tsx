import React from "react";
import MyTypewrite from "@/components/typewrite/typewriter";
import Image from "next/image";
import { SimpleSlider } from "@/components/carousel/carouselfortext";

const images = ["church.jpg", "church1.jpg", "church2.jpg", "church3.jpg"];

const list = ["The Holy Spirit"];
const Index = () => {
  return (
    <div className=" min-h-[500px] ">
      {/* ==================== Introductory Image For Baptism ================== */}
      <div className=" bg-[url('/images/bible4.png')] max-sm:bg-[url('/images/bible2.png')] w-full bg-cover  top-0 -z-20 bg-no-repeat -mt-[8rem] ">
        <div className=" flex justify-center justify-items-center max-sm:min-h-[150vh] m-auto bg-backgroundColor/30 ">
          <div className=" max-md:mt-[3rem] md:my-[3rem] text-textColor  ">
            <div className=" pt-[10rem] max-sm:pt-[15rem] ">
              <p className="font-playfair font-extrabold italic text-[4rem] text-center max-md:leading-[4rem] ">
                The Baptism
              </p>
              <p className=" m-auto text-center text-[2rem] font-kalnia italic font-extrabold leading-3 mt-8 ">
                Of
              </p>

              <div className=" font-playfair font-extrabold typewriter1 text-[4rem] text-center pt-[1.5rem] text-textColor ">
                {list}
              </div>
              <p className=" m-auto mt-[4rem] p-8 text-center font-opensans text-[1.5rem] max-w-[55rem] font-semibold text-textColor max-md:text-justify ">
                According to the Methodist Worship Book, Baptism (or
                Christening) marks entry into the One Holy Catholic and
                Apostolic Church, of which the Methodist Church is part. The
                Methodist Church, like most denominations of the Christian
                Church, administers the sacrament to both adults and young
                children.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Introductory Image For Baptism ================== */}
      <div className=" my-10 ">
        <div className="container m-auto ">
          <div>
            <p className="  m-auto text-center py-8 font-kalnia text-[2.2rem] ">
              Types of Baptism & Confirmation
            </p>
          </div>
          <div className="flex max-lg:flex-col ">
            <div className=" lg:w-[40%] m-auto ">
              <div className=" m-auto w-[100%] ">
                <Image
                  className="  m-auto rounded-sm w-[70%] max-md:w-[100%] "
                  src={"/images/jesus.png"}
                  alt=""
                  width={200}
                  height={100}
                  quality={100}
                />
              </div>
            </div>
            <div className=" lg:w-[60%] px-2 text-textColor m-auto ">
              <SimpleSlider pics={images} sliderButton={true} />

              {/* <div className=" m-auto justify-center shadow-2xl p-10 ">
                <p className=" font-playfair text-[2rem] m-auto max-md:text-center py-8   ">
                  One Baptism recognised by All
                </p>
                <p className=" font-opensans font-medium text-[1.3rem] text-justify ">
                  There exists one universally recognized baptism acknowledged
                  by mainstream Churches, including the Methodist Church and the
                  Church of England, that administer infant baptisms.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* ==================== Introductory Image For Baptism ================== */}
      <div>
        <div>
          {/* <SimpleSlider pics={images} sliderButton={true} /> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
