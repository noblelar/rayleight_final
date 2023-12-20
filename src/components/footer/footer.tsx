import React from "react";
import ContactUs from "./contactus";
import UpcomingEvents from "./upcomingevents";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  let tDate = new Date();



  return (
    <div className=" bg-textColor/25 ">
      <div className=" flex justify-center w-full shadow-lg">
        <div className="container">
          <div className="flex max-lg:flex-col ">
            {/* ==========Logo and Others ========== */}
            <div className=" w-[30%] max-lg:w-[100%] ">
              <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px]">
                  <div className=" text-backgroundColor font-extrabold leading-[4rem]  ">
                    {/* <div>UPCOMING EVENTS</div> */}
                  </div>
                  <div className="flex justify-center ">
                    <div className="bg-backgroundColor h-[7rem] w-[7rem] rounded-full flex justify-center  ">
                      <Image
                        className=" text-[3rem] m-auto rounded-full "
                        src={"/images/logored.svg"}
                        alt=""
                        width={100}
                        height={150}
                        quality={100}
                      />
                    </div>
                  </div>
                  <div className=" flex justify-center text-backgroundColor font-opensans leading-10 text-[1.1rem] font-extrabold">
                    Rayleigh Methodist Church
                  </div>

                  <div className=" text-primaryColor my-4 mx-auto w-full">
                    <Link
                      href={"/"}
                      className="  my-4 text-[4rem] flex space-x-6 "
                    >
                      <IoLocationSharp />
                      <span className="text-textColor text-[1rem] ">
                        Rayleigh Methodist Church <br />
                        78 Eastwood <pre></pre>
                        Road Rayleigh SS6 7FR
                      </span>
                    </Link>
                    <Link
                      href={"/"}
                      className=" ml-5 my-8 text-[1rem] flex space-x-12"
                    >
                      <FaPhone className="text-[2.5rem]" />
                      <span className=" text-textColor m-auto ">
                        +44 798 374 5038
                      </span>
                    </Link>
                    <Link
                      href={"/"}
                      className="ml-5 my-8 text-[1rem] flex space-x-12"
                    >
                      <FaEnvelope className="text-[3rem]" />
                      <span className="text-textColor m-auto">
                        {" "}
                        rmc@gmail.com{" "}
                      </span>
                    </Link>
                  </div>

                  <div className=" w-[100%] text-center ">
                    <div className="m-auto font-opensans font-extrabold">FOLLOW US</div>
                    <div className="flex justify-center space-x-10 bg-backgroundColor rounded-full py-[2rem] text-primaryColor ">
                      <Link href={"/"}>
                        <FaFacebook className="text-[2.5rem]" />
                      </Link>
                      <Link href={"/"}>
                        <FaYoutube className="text-[2.5rem]" />
                      </Link>
                      <Link href={"/"}>
                        <FaInstagram className="text-[2.5rem]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========== Contact Us =========== */}
            <div className="w-[30%] max-lg:w-[100%] flex justify-center">
              <ContactUs />
            </div>

            {/* Upcoming Events */}
            <div className="w-[30%] max-lg:w-[100%] ">
              <div className="flex items-center justify-center p-12">
                <div className="mx-auto ">
                  <div className=" text-backgroundColor font-extrabold leading-[4rem]  ">
                    <div>UPCOMING EVENTS</div>
                  </div>
                  <div>
                    <UpcomingEvents />
                    <UpcomingEvents />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Copywrite Info ============== */}\
      <div className="container justify-center text-center pb-5 m-auto font-bold md:pt-10c">
          &copy; {tDate.getFullYear()} Rayleigh Methodist Church
        </div>
    </div>
  );
};

export default Footer;
