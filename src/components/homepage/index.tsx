import React, { useState } from "react";
import ButtonA from "../buttons/ind";
import Image from "next/image";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import ColorChangeButton from "../buttons/ccbbutton";
import ButtonB from "../buttons/ccbbutton";
import HomeCard from "../cards/homeCard";
import ResponsiveSlick from "../Sliders/responsiveSlider";
import { Hero } from "../hero";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import BlackButton from "../buttons/blackbut";
import { IoMdPerson } from "react-icons/io";
import { PiDevicesFill } from "react-icons/pi";

const handleNext = () => {
  return onclick;
};
const handlePrev = () => {
  return onclick;
};

const Homepage = () => {
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);

  return (
    <div className={``}>
      {/* ============= Hero Image ============= */}
      {/* <section
        data-theme="black"
        className=" bg-[url('/images/church_img.png')] xl:h-[100vh] h-[90vh] w-full bg-cover  top-0 -z-20 bg-no-repeat"
      >
        <div className=" flex justify-center justify-items-center h-[100%] w-[] ">
          <div className=" m-auto text-backgroundColor font-mulish font-extrabold text-[3rem] max-lg:w-[80%]   ">
            {" "}
            Welcome to Rayleigh Methodist Church{" "}
          </div>
        </div>
      </section> */}
      <Hero
        backgroundImage="/images/church_img.png"
        title="Welcome to Rayleigh Methodist Church"
        containerClassName="xl:h-[100vh] h-[90vh]"
      />

      {/* ============= Mission Area ========= */}
      <section className=" ">
        <div className="container mx-auto text-center max-md:px-2">
          <div className=" my-[3.5rem] lg:my-[6rem] ">
            <div className=" m-auto lg:max-w-[90%] text-primaryColor font-extrabold text-[2.5rem] leading-10 max-md:text-[1.6rem] max-md:leading-6 ">
              The mission of Rayleigh Methodist Church is to celebrate the
              reality of God and proclaim the kingdom of God to all people
            </div>
            <div className=" m-auto lg:max-w-[80%] text-textColor2 text-[1.4rem] pt-[2rem] max-lg:text-justify ">
              <h1 className=" pb-[2rem] text-primaryColor max-lg:!text-center ">
                Aims to fulfill this mission are :
              </h1>
              <p>
                {" "}
                To encourage and support the growth in faith of all To establish
                an atmosphere in which everyone is valued and feels that they
                have a contribution to make To support and encourage witness
                within the wider community To provide a wider vision of
                Methodism, ecumenical, national and international
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ A Place Area ========== */}
      <section className=" bg-primaryColor text-backgroundColor">
        <div className="max-w-screen-2xl mx-auto">
          {/* <div className=" w-full flex py-8 lg:space-x-8 max-lg:flex-col "> */}
          {/* <div className="w-[60%] mx-auto max-lg:w-[100%] "> */}
          {/* <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/watch?v=y89CQgdgrio"
                  allowFullScreen
                ></iframe> */}
          {/* </div> */}
          <div className="w-full grid lg:grid-cols-[1.15fr_1fr]">
            <div>
              <iframe
                className="h-full m-0 aspect-video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/y89CQgdgrio"
                title="Alpha Walkthrough 2023"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="py-8">
              <div className=" m-auto px-[1.5rem]  max-w-[50ch] text-center">
                <h3 className=" text-center  font-bold text-2xl  md:text-3xl lg:text-4xl ">
                  A place to call home
                </h3>
                <ul className=" list-disc py-4 space-y-4 md:text-sm lg:text-base">
                  <li>
                    We are a friendly church with arms wide open to our local
                    community. Whether you attend a group in our building, or
                    come along on a Sunday morning, we hope you find the warmest
                    of welcomes here.
                  </li>
                  <li>
                    We want to serve our community, showing them the love that
                    God has shown to us and welcoming them into our family.
                    Church is a place to call home.
                  </li>
                  <li>
                    Curious what we believe and why? Church is a place to
                    explore, ask questions and discover what faith could mean in
                    your life. We&apos;d love to walk with you on that journey -
                    find out more here.
                  </li>
                </ul>

                <Link
                  href={"/"}
                  className={buttonVariants({
                    variant: "secondary",
                    size: "2xl",
                  })}
                >
                  Find out more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Join Us =========== */}
      <section>
        <div className="container m-auto">
          <div className="flex text-textColor3 py-[5rem] lg:w-[80%] m-auto max-lg:flex-col-reverse ">
            <div className=" w-[60%] max-lg:w-[100%]  ">
              <div className=" text-[1.2rem] px-[2rem] m-auto max-lg:md:text-[1.5rem] ">
                <p className=" text-textColor font-mulish font-extrabold text-[2.8rem] ">
                  Join Us This Lent{" "}
                </p>
                <p>
                  We&apos;re running a lent course, starting on Tuesday 13th
                  February, and we&apos;d love you to join us. <br /> <br />
                  <span>There are two opportunities to join in</span>
                </p>
                <div className=" py-4 flex justify-left md:space-x-6 max-md:space-y-6 max-md:flex-col  ">
                  <BlackButton
                    icon={<IoMdPerson className=" fill-black bg-black rounded-full w-6 h-6 p-1 " />}
                    text={"In person "}
                    onClick={() => {}}
                    classN=""
                    time="(3: 30PM) "
                  />
                  <BlackButton
                    icon={<PiDevicesFill className=" fill-black bg-black rounded-full w-6 h-6 p-1 " />}
                    text={"Online "}
                    onClick={() => {}}
                    classN=""
                    time="(7: 30PM) "
                  />
                </div>
                <p>
                  Whichever suits you best, we hope to see you there! Please
                  contact Jo for zoom details or more information.
                </p>
                <br />
                <ButtonA
                  text="Contact Us"
                  bgcolor={1}
                  txcolor={0}
                  onClick={() => {}}
                  classN=" border-primaryColor border  text-backgroundColor bg-primaryColor "
                />
              </div>
            </div>
            <div className=" w-[40%] max-lg:w-[100%] max-lg:py-8 ">
              <Image
                className="w-full h-full rounded-lg "
                src={"/images/cross.jpg"}
                alt=""
                width={700}
                height={700}
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============= Upcoming Events ============= */}
      <section className=" bg-primaryColor text-backgroundColor ">
        <div className="container m-auto overflow-hidden ">
          <div className=" py-[5rem] ">
            {/* <div className=" flex justify-between font-tegomin items-center pb-10 ">
              <div className=" font-tegomin text-[2.5rem] font-extrabold max-md:text-[1.8rem] max-md:ml-4  ">
                Upcoming Events
              </div>
              <div>
                ============== Arrow button for carousel ==================
                <div className="flex flex-row mx-auto max-md:scale-75 ">
                  <button
                    type="button"
                    className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 group hover:bg-backgroundColor hover:text-primaryColor"
                    onClick={handlePrev}
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
                    className=" group hover:bg-backgroundColor bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 px-3 hover:text-primaryColor "
                    onClick={handleNext}
                  >
                    <div className="flex flex-row align-middle justify-center items-center">
                      <span className="mr-2">Next</span>

                      <RiArrowRightSLine className=" text-[2rem] group-hover:!bg-primaryColor rounded-full " />
                    </div>
                  </button>
                </div>
              </div>
            </div> */}
            <div className="">
              <div className=" m-auto  ">
                <ResponsiveSlick />
              </div>
              {/* <ButtonB
                text=" Click me now "
                txcolor={1}
                bgcolor={0}
                classN=" w-auto "
                hrefA=""
                onClick={() => {}}
              /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
