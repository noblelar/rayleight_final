


import React from 'react';
import Image from 'next/image';

const Gallery = ({ image , title }: { image:string, title:string }) => {
   let imm = "/images/"+image;
  return (
    <div>
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
        <div className=" text-textColor max-w-[20rem] m-auto ">
          <p className=" font-playfair text-[1.3rem] font-extrabold text-center ">
            {title}
          </p>
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Gallery
