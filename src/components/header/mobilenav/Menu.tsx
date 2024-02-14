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
    <nav className="menu">
      {/* ========Logo Area ====== */}
      <div className="flex items-center justify-center font-opensans">
        <Link href={"/"}>
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

            <div className="pt-4 font-extrabold leading-5 md:leading-7 items-center px-2  text-backgroundColor m-auto">
              <span className="text-[1.5rem] ">R</span>
              ayleigh <br />
              <span className="text-[1.5rem] ">M</span>
              ethodist <br />
              <span className="text-[1.5rem] ">C</span>
              hurch
            </div>
          </div>
        </Link>
        <div className={" ml-[3rem] "}>
          <MenuToggle toggle={toggle} />
        </div>
      </div>
      <ul>
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
