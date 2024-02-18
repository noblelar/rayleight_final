import Link from "next/link";
import React from "react";
import Image from "next/image";

const SocialIcon = ({ link, image }: any) => {
  return (
    <Link href={link? link : ""}>
      <div className=" group hover:border-primaryColor flex justify-center items-center w-[3rem] h-[3rem] rounded-full border-backgroundColor border-4 ">
        <Image
          className=" w-7 h-7 rounded-full group-hover:scale-75  "
          src={`/images/${image? image : "youtube.png"}`}
          alt=""
          width={20}
          height={20}
          quality={100}
        />
      </div>
    </Link>
  );
};

export default SocialIcon;
