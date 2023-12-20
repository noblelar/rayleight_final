import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const UpEvent = () => {
  return (
 
          <div className=" mx-auto max-md:mx-4 mt-8  md:flex ">
            <div className=" bg-backgroundColor/70 text-center mr-8 min-w-[5rem] max-md:my-4 max-md:mx-auto p-4 shadow-inner1 rounded-lg m-auto ">
              13 <br /> July
            </div>
            <div className="md:flex bg-backgroundColor/70 shadow-inner1 rounded-lg  p-4 justify-center ">
              <div className=" flex justify-center mr-2 ">
                <div className="flex space-x-10 justify-center">
                  <p className=" m-auto ">Community Day </p>
                  <p className=" font-bold text-[3rem] m-auto text-primaryColor ">
                    <FaRegClock />
                  </p>
                  <p className="m-auto">
                    9:00 am <br /> 3:00 pm
                  </p>
                </div>
              </div>
              <div className=" flex justify-center max-md:border-t-2 md:border-l-4 max-md:mt-4 max-md:w-[100%] ">
                <p className="m-auto font-bold text-[3rem] mx-4 md:ml-1 text-primaryColor ">
                  <IoLocationSharp />
                </p>
                <p className=" max-w-[7rem] m-auto max-md:max-w-fit  ">
                  78 Eastwood Road Rayleigh SS6 7FR
                </p>
              </div>
            </div>
          </div>
  );
};

export default UpEvent;
