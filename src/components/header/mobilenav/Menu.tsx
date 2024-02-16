"use client";
import { menuItems } from "@/components/utils";
import NavBut from "../navigation/navbut";
import Link from "next/link";
import Image from "next/image";
import { MenuToggle } from "./MenuToggle";
import { useState } from "react";

export function Menu({ toggle }: any) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu text-center ">
      {/* ========Logo Area ====== */}
      <div className="flex items-center justify-between font-opensans mx-4 border-b-backgroundColor border-4 md:max-lg:mx-8 ">
        <Link href={"/"} >
          <div className="flex justify-center ">
            <div className=" w-[70px] md:w-[100px] m-auto">
              <Image
                className="pt-2 "
                src={"/images/logowhite.svg"}
                alt=""
                width={120}
                height={120}
                quality={100}
              />
            </div>

            <div className=" my-auto pt-4 text-left md:leading-7 leading-tight text-backgroundColor font-mulish font-medium text-[1.5rem] max-md:text-[1.1rem] ">
                    <p className=" m-0 p-0 ">Rayleigh</p>
                    <p className=" font-semibold m-0 p-0 ">Methodist</p>
                    <p className=" m-0 p-0 ">Church</p>
                  </div>
            {/* <div className="font-bold items-center px-2 font-playfair text-[1.2rem] text-backgroundColor text-left m-auto pt-2 md:text-[2rem] ">
              Rayleigh Methodist Church
            </div> */}
          </div>
        </Link>
        <div className={" ml-[3rem] "}>
          <MenuToggle toggle={toggle} />
        </div>
      </div>
      <ul className=" text-backgroundColor m-auto flex flex-col justify-center items-center h-[70vh] mt-[rem]  ">
        {menuItems.map((menuItem, i) => {
          if (!menuItem.submenuof) {
            return (
              <NavBut key={i} menu={menuItem} idNumber={i} toggle={toggle} />
            );
          }
        })}
      </ul>
    </nav>
  );
}

