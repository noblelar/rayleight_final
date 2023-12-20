import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBut from "./navigation/navbut";
import { menuItems } from "../utils";
import Search from "../buttons/search";
import { useState, useEffect, useRef } from "react";
import { FadeInAnimation } from "./navigation/animation";
import Subnav from "./navigation/subnav";
// import { MenuToggle } from "./gennav/MenuToggle";
// import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

// import { Menu } from "./gennav/Menu";
import App from "./gennav/app";

const Header = ({ colorA }: { colorA: Boolean }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleNavbarToggle() {
    setNavbarOpen(!navbarOpen);
  }
  const ref = useRef(null);

  // useEffect(() => {
  //   const animation = new FadeInAnimation(ref.current);
  //   animation.start(1000);
  //   return () => {
  //     animation.stop();
  //   };
  // }, [navbarOpen]);

  return (
    <header className=" !sticky !-top-1 ">
      <div
        className={`flex justify-center w-full shadow-lg ${
          colorA ? " " : " bg- "
        } `}
      >
        <div className="container ">
          <div className="flex ">
            {/* ========Logo Area ====== */}
            <div className="flex items-center justify-between font-opensans">
              <Link href={"/"}>
                <div className="flex justify-center ">
                  <div className=" w-[70px] md:w-[100%] m-auto bg-backgroundColor flex justify-center rounded-full  ">
                    <Image
                      className="  m-auto rounded-full "
                      src={"/images/logo.jpg"}
                      alt=""
                      width={90}
                      height={100}
                      quality={100}
                    />
                  </div>

                  <div className="py-2 font-extrabold leading-5 md:leading-7 items-center px-2  text-primaryColor m-auto">
                    <span className=" text-primaryColor  text-[1.5rem] ">
                      R
                    </span>
                    ayleigh <br />
                    <span className=" text-primaryColor   text-[1.5rem] ">
                      M
                    </span>
                    ethodist <br />
                    <span className=" text-primaryColor   text-[1.5rem] ">
                      C
                    </span>
                    hurch
                  </div>
                </div>
              </Link>
            </div>

            {/* ==========Search ========== */}
            <div className="flex m-auto justify-center ">
              <Search />
            </div>

            {/* <div className="flex justify-center my-auto mr-4">
              <button
                onClick={handleNavbarToggle}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className=" z-40 translate-y-[-50%] mt-8 rounded-lg px-3 py-[6px] ring-primary  text-[150px]"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] md:h-1 md:w-[40px] bg-primaryColor transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "top-[7px] rotate-45 !bg-backgroundColor" : ""
                  } `}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] md:h-1 md:w-[40px] bg-primaryColor transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0" : ""
                  } `}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] md:h-1 md:w-[40px] bg-primaryColor transition-all duration-300 dark:bg-white ${
                    navbarOpen
                      ? "top-[-8px] -rotate-45 !bg-backgroundColor"
                      : ""
                  } `}
                />
              </button>
            </div> */}
            {/* <div ref={scope}>
              <Menu />
              <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </div> */}
            <div className="flex justify-center z-30 my-auto mr-4">
              <App />
            </div>
          </div>
        </div>

        {/* =========Navigation ======== */}
        <div
          // ref={ref}
          className={`justify-center m-auto absolute bg-gradient-to-bl from-primaryColor from-60% to-backgroundColor min-h-[100vh] 2xl:w-[25%] md:w-[60%] lg:w-[45%] w-[90%] sm:w-[75%] text-[2rem] transition duration-300 ${
            navbarOpen
              ? "sea right-0 sm:right-0 lg:right-[0rem] xl:right-[calc((100vw-1536px)/2)]"
              : "sea_inv right-[-90vh] hidden"
          } `}
        >
          <ul className="block lg:space-x-3 ml-[20%] text-center m-auto my-[20%] ">
            {menuItems.map((menuItem, i) => {
              if (!menuItem.submenuof) {
                return <NavBut key={i} menu={menuItem} idNumber={i} toggle={()=>ToggleEvent} />;
              }
            })}
          </ul>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
