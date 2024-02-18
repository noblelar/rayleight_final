import React from "react";
import Image from "next/image";
import { BiCalendarAlt } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const HomeCard = ( { image, title, date, location   }: { image:String; title:String; date:String; location:String } ) => {
  return (
    <div>
      <div className=" max-w-[366px] mx-3 ">
        <Image
          className="w-full h-full rounded-lg "
          src={`/images/${image}`}
          alt="homecaroimg1"
          width={700}
          height={700}
          quality={100}
        />
      </div>
      <div className=" text-[.73rem] space-y-2 font-mulish my-4 ">
        <p className=" text-[1.09rem] mx-2 ">
          {title}
        </p>
        <p className="  flex items-center ">
          <BiCalendarAlt className=" mx-2 text-[1.2rem]  " /> {date}
        </p>
        <p className=" flex items-center ">
          <FaLocationDot className=" mx-2 text-[1.2rem]  " /> {location}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
