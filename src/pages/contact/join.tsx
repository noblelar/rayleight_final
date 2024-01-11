import React from "react";

const Join = () => {
  return (
    <div className=" my-12 max-lg:mx-4 ">
      <div className=" text-center font-playfair font-bold text-[2.5rem] pb-8 ">
        Join Our Newsletter
      </div>
      <div className="flex justify-center max-lg:flex-col lg:space-x-8 my-8 max-lg:space-y-8 ">
        <div className=" border-2 rounded-lg border-textColor w-[20rem] m-auto ">
          <input className=" focus:outline-none p-2  w-full "
          type="text" name="name" id="" placeholder="Name" />
        </div>
        <div className=" border-2 rounded-lg border-textColor w-[20rem] m-auto ">
          <input className="focus:outline-none p-2 w-full "
            type="email"
            name="email"
            id=""
            placeholder="Email: example@mail.domain"  
          />
        </div>
      </div>
      <div className=" m-auto flex justify-center">
        <button type="submit" className=" font-kalnia font-bold text-[1.3rem] bg-textColor/50 w-[40rem] rounded-lg p-2 text-backgroundColor hover:text-primaryColor " >Subscribe</button>
      </div>
    </div>
  );
};

export default Join;
