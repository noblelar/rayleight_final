import React from "react";
import ButtonA from "../buttons/ind";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "../utils";
import NavBut from "./navigation/navbut";
import App from "./mobilenav/app";
import Search from "../buttons/search";
import { buttonVariants } from "../ui/button";

const Header = () => {
  return (
    <header className={`!sticky !-top-1 bg-backgroundColor z-30 `}>
      <div className="w-full shadow-lg">
        <div className=" container m-auto">
          <div className=" w-full flex justify-between ">
            {/* ========Logo Area ====== */}
            <div className="flex items-center justify-center font-opensans">
              <Link href={"/"}>
                <div className="flex items-start justify-center lg:min-w-[300px] ">
                  <div className=" w-[70px] md:w-[90px] my-auto ">
                    <Image
                      className="pt-2 "
                      src={"/images/logored.svg"}
                      alt=""
                      width={120}
                      height={120}
                      quality={100}
                    />
                  </div>

                  <div className=" my-auto pt-4 text-left md:leading-7 leading-tight text-primaryColor font-mulish font-medium text-[1.5rem] max-md:text-[1.1rem] ">
                    <p className=" m-0 p-0 ">Rayleigh</p>
                    <p className=" font-semibold m-0 p-0 ">Methodist</p>
                    <p className=" m-0 p-0 ">Church</p>
                  </div>
                  {/* <div className="font-bold items-center px-2 font-playfair text-[1.2rem] text-primaryColor m-auto md:max-lg:text-[2rem] ">
                    Rayleigh Methodist Church
                  </div> */}
                </div>
              </Link>
            </div>

            {/* ========== Desktop Nav Area ============= */}
            <div className=" max-lg:hidden flex m-auto ">
              <div className=" font-mulish text-textColor1 m-auto ">
                <ul className=" flex list-none lg:space-x-6 text-center m-auto justify-center ">
                  {menuItems.map((menuItem, i) => {
                    if (!menuItem.submenuof) {
                      return (
                        <NavBut
                          key={i}
                          menu={menuItem}
                          idNumber={i}
                          toggle={() => ToggleEvent}
                        />
                      );
                    }
                  })}
                </ul>
              </div>
            </div>

            {/* ========= Buttons Area ============ */}
            <div className=" max-lg:hidden flex space-x-4 justify-center items-center m-auto mr-0">
              <Link
                href={"/hall-hire"}
                className={buttonVariants({
                  size: "2xl",
                  variant: "outline",
                  className: "border-primaryColor text-primaryColor",
                })}
              >
                Hall Hire
              </Link>

              <Link
                href={"/new-here"}
                className={buttonVariants({ size: "2xl" })}
              >
                New Here?
              </Link>

              <div className="self-center">
                <Search />
              </div>
            </div>

            {/* ================ Mobile Nav Button ============= */}
            <div className=" lg:hidden flex justify-center items-center z-30 my-auto mr-4 space-x-4 md:space-x-8 ">
              <Search />
              <App />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
