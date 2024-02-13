import React from "react";
import ButtonA from "../buttons/ind";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="w-full shadow-lg">
        <div className=" container m-auto ">
          <div className=" w-full flex justify-between ">
            {/* ========Logo Area ====== */}
            <div className="flex items-center justify-center font-opensans">
              <Link href={"/"}>
                <div className="flex justify-center ">
                  <div className=" w-[70px] md:w-[90px] m-auto">
                    <Image
                      className="pt-2 "
                      src={"/images/logored.svg"}
                      alt=""
                      width={120}
                      height={120}
                      quality={100}
                    />
                  </div>

                  <div className="pt-4 font-bold leading-5 md:leading-7 items-center px-2 font-playfair text-[1.2rem] text-primaryColor m-auto">
                    Rayleigh Methodist Church
                  </div>
                </div>
              </Link>
              {/* <div className={" ml-[3rem] "}>
          <MenuToggle toggle={toggle} />
        </div> */}
            </div>
            <div className=" flex space-x-8 justify-center m-auto mr-0">
              <ButtonA
                text="Hall Hire?"
                bgcolor={0}
                txcolor={1}
                onClick={() => {}}
                classN="border-primaryColor border  text-primaryColor "
              />
              <ButtonA
                text="New Here?"
                bgcolor={1}
                txcolor={0}
                onClick={() => {}}
                classN="border-primaryColor border text-backgroundColor bg-primaryColor "
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
