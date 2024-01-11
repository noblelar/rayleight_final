import React from "react";

const Join = () => {
  return (
    <div className=" my-12 max-lg:mx-4 ">
      <div className=" text-center font-playfair font-bold text-[2.5rem] pb-8 ">
        Join Our Newsletter
      </div>
      <div className="flex justify-center max-lg:flex-col lg:space-x-8 my-8 max-lg:space-y-8 ">

        <div className=" max-lg:m-auto ">
          <div className="w-[300px] border-2 rounded-md border-textColor  ">
          <input type="text" name="name" id="" placeholder="Name" className=" w-[90%] h-full m-2 text-[1.2rem] focus:outline-none  " />
          </div>
        </div>
        <div className=" max-lg:m-auto">
          <div className="w-[300px] border-2 rounded-md border-textColor  ">
          <input type="text" name="name" id="" placeholder="Email: example@mail.domain" className=" w-[90%] h-full m-2 text-[1.2rem] focus:outline-none  " />
          </div>
        </div>
        
      </div>
      <div className=" m-auto flex justify-center">
        <button type="submit" className=" font-kalnia font-bold text-[1.3rem] bg-textColor/50 w-[40rem] rounded-lg p-2 text-backgroundColor hover:text-primaryColor " >Subscribe</button>
      </div>
    </div>
  );
};

export default Join;


