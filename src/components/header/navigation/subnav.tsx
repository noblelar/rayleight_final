"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
// import Image from "next/image";
// import { menuItems } from "../../utils";
import { IMenuItem } from "@/components/utils/types";

const Subnav = ({
  submenu,
  toggle,
}: //   eValue,
//   eventId,
//   clickCheck,
{
  submenu: IMenuItem;
  toggle: () => void;
  //   eValue: boolean;
  //   eventId: string | null;
  //   clickCheck: string | null;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
    onClick={toggle}
      className={` px-4 py-2 mx-1   ${
        isHovered ? " rounded-2xl shadow-lg block" : ""
      } `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={"/" + submenu.submenuof + submenu.path}>
        <p className={` ${isHovered ? "text-primaryColor" : ""} `}>
          {submenu.label}
        </p>
        <p className={` ${isHovered ? "text-primaryColor" : ""}  `}>
          {/* You are highly welcome to our wonderful environment */}
        </p>
      </Link>
    </li>
  );
};

export default Subnav;
