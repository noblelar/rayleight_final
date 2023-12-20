
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const MyTypewrite = ({ list }: { list: any; }) => {
  return (
    <span >
      <Typewriter
        words={list}
        loop={true}
        cursor={true}
        cursorStyle="|"
        typeSpeed={200}
        deleteSpeed={100}
        delaySpeed={1200}
      />
    </span>
  );
};
export default MyTypewrite;


{/* <span className="App md:py-[1rem] py-[1.5rem] text-[3rem] text-secondaryColor "> */}

// !font-kalnia text-[1.5rem] text-center pt-[1.5rem]