

import React from "react";

const ActivityItem = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className=" p-8 max-lg:px-4 rounded-md border border-textColor1/50 min-h-[20rem] max-md:m-2 ">
      <div className=" m-auto w-full h-full ">
        <div className=" m-auto w-fit h-fit ">
          <div className=" text-[1.7rem] font-bold text-center text-primaryColor font-mulish ">
            {title}
          </div>
          <div className=" text-center font-mulish ">{text}</div>
        </div>
      </div>
    </div>
  );
};


export default ActivityItem;




