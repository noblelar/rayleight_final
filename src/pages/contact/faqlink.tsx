import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Faqlink = ({ question, fqa }: { question: any; fqa: number }) => {
  return (
    <div key={fqa} className=" border-b-2 pb-5 pt-8 ">
      <Link className=" flex group" href={""}>
        <p className=" m-auto hover:text-primaryColor w-[90%]">{question}</p>
        <p className=" m-auto text-secondaryColor text-[1.8rem] group-hover:text-primaryColor ">
          <FaArrowAltCircleRight />
        </p>
      </Link>
    </div>
  );
};

export default Faqlink;
