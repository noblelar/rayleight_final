// 
import { motion, transform, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import React from "react";

function ButtonA({
  text,
  bgcolor,
  txcolor,
  onClick,
  classN,
  hrefA,
}: {
  text: string;
  bgcolor: number;
  txcolor: number;
  onClick: () => void;
  classN: string;
  hrefA?: string;
}) {
  const trans = [
    ["#fff", "#cd0e2d"],
    ["#cd0e2d", "#fff"],
  ];

  const backgroundColor = transform([0, 100], trans[bgcolor])(100);
  const colorA = transform([0, 100], trans[txcolor])(100);

  return (
    <Link href={hrefA ? hrefA : "/home"}>
      <motion.div
        whileHover={{
          scale: 1.1,
          backgroundColor: backgroundColor,
          color: colorA,
          
        }}
        whileTap={{ scale: 0.8 }}
        //  type="submit"
        className={`rounded-md bg-${""} py-4 px-6 text-center text-base font-medium transition duration-300 ease-in-out hover:shadow-signUp max-w-[140px] ${classN} lg:max-xl:text-[0.8rem] lg:max-lg:px-0 `}
        onClick={onClick}
      >
        {text}
      </motion.div>
    </Link>
  );
}

export default ButtonA;



