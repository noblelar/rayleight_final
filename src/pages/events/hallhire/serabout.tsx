import Image from "next/image";
import Link from "next/link";
import React from "react";

const SerAbout = () => {
  return (
    <div className=" m-auto my-[5rem] ">
      
      <div className=" flex justify-center max-lg:flex-col ">
        <div className=" lg:w-[50%] ">
          <p className=" m-auto text-center font-playfair font-extrabold text-[2rem] my-[2rem] "> Hall Hire </p>
          <div className=" text-textColor text-justify w-[90%] m-auto md:text-[1.3rem] ">
            We offer space rental for various events, including one-off
            occasions like children&apos;s birthday parties and regular group
            meetings on a weekly or monthly basis. Our premises are wheelchair
            accessible with disabled bathroom facilities, and tables and chairs
            are provided. Contact Margaret Flintham at <Link href={""} className=" text-primaryColor font-bold ">07817 202 285</Link> or 
            <Link className=" text-primaryColor font-bold " href={"mailto:margaretflintham@yahoo.co.uk"}> margaretflintham@yahoo.co.uk </Link> for
            information, availability inquiries, or to book the space.
          </div>
        </div>
        <div className=" lg:w-[50%] ">
          <Image
            className=" rounded-md w-full h-full m-auto max-lg:my-8 "
            src={"/images/serv_abtus.png"}
            alt={"title"}
            width={600}
            height={600}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SerAbout;
