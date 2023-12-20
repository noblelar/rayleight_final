import Link from "next/link";
import { menuItems } from "@/components/utils";
import { usePathname } from "next/navigation";
// import Arrow from "@/components/buttons/arrow";
import { IMenuItem } from "@/components/utils/types";
import Subnav from "./subnav";
import { useState } from "react";

let Submenus = [];
menuItems.forEach((menuI) => {
  Submenus.push(menuI.submenuof);
});

const NavBut = ({
  menu,
  idNumber,
  toggle,
}: {
  menu: IMenuItem;
  idNumber: number;
  toggle: () => void;
}) => {
  let hasSubmenu = false;

  const activePath = usePathname();

  // const [eventValue, setEventValue] = useState(false);

  const handleActiveNav = (path: string) => {
    if (activePath == path) {
      return "text-textColor bg-backgroundColor ";
    }
  };

  return (
    <li
      className={`group relative mx-auto w-[60%] shadow-md rounded-lg opacity-1 shadow-backgroundColor/50 font-opensans font-semibold group-hover:shadow-lg hover:bg-backgroundColor ${handleActiveNav(
        menu.path
      )} my-[5%] `}
    >
      {/* Submenus.includes(menu.id) ? "#" : */}
      {/* {idNumber > 1 ? "|" : ""} */}
      <Link
        onClick={toggle}
        href={menu.path}
        className={` min-w-[1rem] max-h-[3rem] rounded-lg opacity-1 shadow-md shadow-backgroundColor/50 font-opensans font-semibold group-hover:shadow-lg w-[100%] sm:w-[100%] hover:bg-backgroundColor  flex py-2 text-base !text-black mr-0 lg:inline-flex lg:px-0 text-center justify-center text-backgroundColor group-hover:font-extrabold group-hover:text-primaryColor hover:text-primaryColor  ${handleActiveNav(
          menu.path
        )}  `}
      >
        
        {menu.label}

        {/* Drop Down Arrow Section */}
        </Link>

        {menuItems.map((submenuItem) => {
          if (menu.id == submenuItem.submenuof) {
            hasSubmenu = true;
          }
        })}
        

      {/* <div> */}
      <ul className="text-left text-[1rem] hidden group-hover:block ">
        {menuItems.map((item, i) => {
          if (item.submenuof == menu.id) {
            return <Subnav key={i} submenu={item} toggle={toggle} />;
          }
        })}
      </ul>
      {/* </div> */}
    </li>
  );
};

export default NavBut;
