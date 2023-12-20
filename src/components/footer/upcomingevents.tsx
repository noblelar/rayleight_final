import Link from "next/link";
import React from "react";

const UpcomingEvents = () => {
  return (
    <div className=" py-[1.1rem]  group-hover:bg-backgroundColor hover:text-[120%] ">
      <Link href={"/"} className="">
        <div className=" font-extrabold font-opensans ">NATIVITY CONCERT</div>
        <div className=" text-[0.8rem] italic text-textColor/50 font-opensans font-semibold group-hover:text-[120%] ">
          December 25, 2023 <span> @ </span> 13:00pm - 15:00pm
        </div>
      </Link>
    </div>
  );
};

export default UpcomingEvents;
