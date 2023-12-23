"use client"
import React from "react";
import MyTypewrite from "@/components/typewrite/typewriter";
import Image from "next/image";
import { SimpleSlider } from "@/components/carousel/carouselfortext";

const bandp = [
  {
    title: "One Baptism recognised by All",
    content:
      "There exists one universally recognized baptism acknowledged by mainstream Churches, including the Methodist Church and  the Church of England, that administer infant baptisms. ",
  },
  {
    title: "Confirmation and Reception into Memebership",
    content:
      "Following infant baptism in the Methodist Church, the natural progression involves Confirmation and Reception into Membership. This step signifies an individual's personal commitment to Christian discipleship and their desire to actively participate in the life of the Church.",
  },
  {
    title: "Baptism followed by confirmation and Reception ",
    content:
      "If an individual, baptized as an infant, returns to the Methodist Church, it typically involves Confirmation and Reception into Membership. This process allows them to fully engage in Christian discipleship and contribute actively to the Church's community life. ",
  },
  {
    title: "No Difference with Church of England",
    content:
      "The understanding of Confirmation is consistent between the Methodist Church and the Church of England. However, it's worth noting that the Church of England lacks a strong emphasis on membership, such as transferring membership when relocating to a new area. ",
  },
  {
    title: "An alternative to baptism for your child",
    content:
      "Act of Thanksgiving after the Birth or Adoption. Some individuals opt for this ceremony to express gratitude and celebrate the arrival or adoption of their child without undergoing the traditional baptismal rite.",
  },
];

const candp = [
  {
    title: "Holy Communion (Sacrament)",
    content:
      "To replace any placeholder text (such as this), just click it and start typing. We think this paragraph makes a great statement just as it is. But if you'd like to try a bit of customizing to make it your own, you can change the fonts with just a click.",
  },
  {
    title: "Early Morning Communion",
    content:
      "To replace any placeholder text (such as this), just click it and start typing. We think this paragraph makes a great statement just as it is. But if you’d like to try a bit of customizing to make it your own, you can change the fonts with just a click.",
  },
  {
    title: "Weekday Communion",
    content:
      "To replace any placeholder text (such as this), just click it and start typing. We think this paragraph makes a great statement just as it is. But if you’d like to try a it of customizing to make it your own, you can change the fonts with just a click.",
  },
];

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

      {/* ==================== Baptism Section with slider  ================== */}
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
            <div className=" lg:w-[60%] px-2 text-textColor m-auto max-w-[90%] -z-20 ">
              <div className=" max-w-[90%] max-lg:max-w-[98%] ">
                <SimpleSlider bandp={bandp} sliderButton={true} />
              </div>

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

      {/* ==================== Introductory Image For Communion ================== */}
      <div className=" my-[2.4rem] ">
        <div className=" max-lg:w-[100vw] max-lg:sm:h-[500px] lg:container bg-[url('/images/csd2.png')] max-sm:bg-[url('/images/csdp.png')] h-[700px] bg-cover lg:m-auto bg-center ">
          {/* <div className=" lg:hidden m-auto  ">I&apos;m  </div> */}
        </div>
        <div className=" container m-auto ">
          <div className="m-auto text-center text-textColor bg-baptism2 min-h-[15rem] max-w-[40rem] md:-mt-[7.5rem]  ">
            <div className=" m-auto w-full h-full py-[10%]  ">
              <p className=" font-kalnia font-bold text-[1.5rem] ">
                &quot;I WILL ALWAYS BE WITH YOU&quot;
              </p>
              <p className=" font-playfair font-extrabold text-[2.5rem] ">
                &apos;Do This in Remembrance of Me&apos;
              </p>
              <p className=" font-playfair italic text-[1.2rem] ">
                Matthew 26:17 - 30
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ====================  Communion Section with Slider  ================== */}
      <div className=" my-10 ">
        <div className="container m-auto ">
        <div>
            <p className="  m-auto text-center py-8 font-kalnia text-[2.2rem] ">
            Holy Communion Services 
            </p>
          </div>
          <div className="flex max-lg:flex-col ">
            <div className=" lg:w-[40%] m-auto ">
              <div className=" m-auto w-[100%] ">
                <Image
                  className="  m-auto rounded-sm w-[70%] max-md:w-[100%] "
                  src={"/images/mary1.png"}
                  alt=""
                  width={200}
                  height={100}
                  quality={100}
                />
              </div>
            </div>
            <div className=" lg:w-[60%] px-2 text-textColor m-auto max-w-[90%] -z-20 ">
              <div className=" max-w-[90%] max-lg:max-w-[98%] ">
                <SimpleSlider bandp={candp} sliderButton={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
