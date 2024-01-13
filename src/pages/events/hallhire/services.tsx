import Image from "next/image";
import React from "react";

const ServicesA = ( { image, title, text } : {key: any, image: string, title: string, text: string} ) => {
   let imm = "/images/"+image;
  return (
    <div className="m-auto my-8 " >
      <div className=" max-lg:mx-4 ">
        <div>
          <Image
            className=" rounded-md w-[20rem] h-[250px] "
            src={imm}
            alt={title}
            width={400}
            height={400}
            quality={100}
          />
        </div>
        <div className=" text-textColor w-[20rem] px-4 ">
          <p className=" font-playfair text-[1.3rem] font-extrabold text-center p-2 ">
            {title}
          </p>
          <p className=" text-justify  ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesA;
