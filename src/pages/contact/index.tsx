import Link from "next/link";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Button from "@/components/buttons/submit";
import Faq from "./faq";

const Index = () => {
  return (
    <section className=" min-h-[500px] m-auto ">
      <section
        data-theme="white"
        className=" container bg-[url('/images/contactbg.png')] min-h-[150vh] bg-cover m-auto bg-center "
      >
        <div className="flex max-md:flex-col py-[2rem]  ">
          <div className=" lg:w-[50%] ">
            <div className=" font-playfair font-extrabold text-center text-[2rem] ">
              Contact Forms
            </div>
            <div className=" forms p-[2rem] px-[2rem] bg-backgroundColor w-[70%] max-md:w-[95%] m-auto">
              <div>
                <div className="flex justify-center">
                  <div className=" m-auto max-w-[100%] min-w-[35%] bg-primaryColor h-[5px] "></div>
                  <div className=" max-md:text-[1.5rem] text-center ">
                    GET IN TOUCH
                  </div>
                  <div className=" m-auto max-w-[100%] min-w-[35%] bg-primaryColor h-[5px]  "></div>
                </div>
              </div>
              <div className=" w-full text-center font-kalnia m-auto py-[1.5rem] text-[1.5rem] ">
                Send us a mesage for more information
              </div>
              <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label
                    htmlFor="username-success"
                    className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                  ></label>
                  <input
                    type="text"
                    id="username-success"
                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                    placeholder="Name"
                  />
                </div>

                <div className=" flex">
                  <div className=" inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none z-0 bg-primaryColor rounded-l-lg w-[12%] text-center ">
                    <svg
                      className="w-4 h-4 text-backgroundColor dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email-address-icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbite.com"
                  />
                </div>
                <div className="my-6">
                  <label
                    htmlFor="phone-success"
                    className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                  ></label>
                  <input
                    type="text"
                    id="contact-success"
                    className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                    placeholder="Contact "
                  />
                </div>

                <label
                  htmlFor={"message"}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                ></label>
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Leave a message..."
                ></textarea>
                <Button
                  bgcolor="primaryColor"
                  text="Submit"
                  a_type="submit"
                  onClick={() => {}}
                  classN=" mt-4 "
                />
              </form>
            </div>
          </div>

          <div className=" lg:w-[50%] m-auto ">
            <div className=" mx-4">
              <div className=" m-auto ">
                <p className=" font-playfair font-bold text-[2rem] max-lg:text-[1.4rem] leading-[5rem] ">
                  Rayleigh Methodist Church
                </p>
                <div>
                  <p className=" text-textColor ">
                    78 Eastwood Road <br /> Rayleigh <br /> SS6 7JP <br /> 01268
                    781896
                  </p>
                  <p className=" text-textColor ">
                    Email:{" "}
                    <Link
                      className=" text-primaryColor hover:underline "
                      href={"mailto:manager@rayleightmethodistchurch.org.uk"}
                    >
                      manager@rayleightmethodistchurch.org.uk
                    </Link>
                  </p>
                </div>
              </div>
              <div className="m-auto mt-[1.5rem] text-textColor  ">
                <p className="font-playfair font-extrabold text-[1.2rem]">
                  General Enquires
                </p>
                <p>
                  For any general questions, call Margargaret Flintham on{" "}
                  <Link
                    href={"phone:07411289469"}
                    className=" text-primaryColor hover:underline "
                  >
                    07411 289 469
                  </Link>
                </p>
                <p className=" text-textColor ">
                  Email:
                  <Link
                    className=" text-primaryColor hover:underline "
                    href={""}
                  >
                    margaretflintham@yahoo.org.uk
                  </Link>
                </p>
              </div>
              <div className="m-auto mt-[1.5rem] text-textColor  ">
                <p className="font-playfair font-extrabold text-[1.2rem]">
                  Weddings, Baptisms, or Funerals:
                </p>
                <p>
                  Reach out to Rev Dr. Calvin Samuel at{" "}
                  <Link
                    href={"phone:07411289469"}
                    className=" text-primaryColor hover:underline "
                  >
                    07411 289 469
                  </Link>
                </p>
                <p className=" text-textColor ">
                  Email:
                  <Link
                    className=" text-primaryColor hover:underline "
                    href={""}
                  >
                    calvin.samuel@methodist.org.uk
                  </Link>
                </p>
              </div>
              <div className="m-auto mt-[1.5rem] text-textColor  ">
                <p className="font-playfair font-extrabold text-[1.2rem]">
                  Church Premises Usage:
                </p>
                <p>
                  To inquire about using our church for meetings, functions, or
                  children&apos;s parties, contact our Lettings Officer, Mrs.
                  Margaret Flintham, on{" "}
                  <Link
                    href={"phone:07817202285"}
                    className=" text-primaryColor hover:underline "
                  >
                    07817 202 285
                  </Link>
                </p>
                <p className=" text-textColor ">
                  Email:
                  <Link
                    className=" text-primaryColor hover:underline "
                    href={""}
                  >
                    margaretflintham@yahoo.org.uk
                  </Link>
                </p>
              </div>
              <div className="m-auto mt-[1.5rem] text-textColor ">
                <p>
                  You can also find contact details for specific people on Our
                  Team.
                </p>
                <div className=" text-textColor ">
                  Or send us a DM on one of our social media:
                  <div className="flex justify-center flex-wrap space-x-10 bg-backgroundColor rounded-full py-[2rem] text-primaryColor ">
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
        </div>

        <Faq />
      </section>
    </section>
  );
};

export default Index;
