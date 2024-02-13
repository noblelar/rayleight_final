import React from "react";
import ButtonA from "../buttons/ind";
import Link from "next/link";
import Image from "next/image";
import NavBut from "./navigation/Navbut";
import { menuItems } from "../utils";

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

                  <div className="font-bold items-center px-2 font-playfair text-[1.2rem] text-primaryColor m-auto">
                    Rayleigh Methodist Church
                  </div>
                </div>
              </Link>
              {/* <div className={" ml-[3rem] "}>
          <MenuToggle toggle={toggle} />
        </div> */}
            </div>

            {/* ========== Phone Nav Area ============= */}
            <div className=" flex m-auto ">
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
