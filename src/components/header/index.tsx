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
        <div className=" md:container lg:max-w-[1240px] lg:px-4  2xl:container m-auto">
          <div className=" w-full flex justify-between gap-6">
            {/* ========Logo Area ====== */}
            <div className="flex items-center justify-center font-opensans">
              <Link
                href={"/"}
                className="inline-flex items-start justify-center"
              >
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    // className="pt-2"
                    className="max-h-[57px]"
                    src={"/images/rmc-logo.png"}
                    alt=""
                    // width={230}
                    // height={57}
                    // quality={100}
                  />
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
