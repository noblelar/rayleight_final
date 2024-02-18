import Link from "next/link";
import React from "react";
import Image from "next/image";
import SocialIcon from "../buttons/socialicon";

const socialMedia = [
  {
    link: "",
    image: "youtube.png",
  },
  {
    link: "",
    image: "facebook.png",
  },
  {
    link: "",
    image: "instagram.png",
  },
  {
    link: "",
    image: "x.png",
  },
];

const Footer = () => {
  let tDate = new Date();

  return (
    <section className=" bg-footer">
      <div className="container m-auto text-textColor4">
        <div className=" flex py-[4rem] justify-between max-md:flex-col max-md:justify-center max-md:items-center ">
          <div>
            <div className="flex items-center justify-left font-opensans">
              <Link href={"/"}>
                <div className="flex items-start justify-left lg:min-w-[300px] ">
                  <div className=" w-[70px] md:w-[90px] my-auto ">
                    <Image
                      className="pt-2 "
                      src={"/images/logoredfoot.svg"}
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
            <div>
              <p className=" my-8 ">
                78 Eastwood Road <br /> Rayleigh, SS6 7JP
              </p>

              <p>
                <Link href={""}>Contact: 01268 781896 Email:</Link> <br />
                <Link href={""}>manager@rayleighmethodistchurch.org.uk</Link>
              </p>
            </div>
          </div>
          <div>
            <div className=" my-8 ">
              <div className=" flex justify-between m-auto items-center max-w-[20rem] ">
                {socialMedia.map((media, e) => (
                  <SocialIcon key={e} link={media.link} image={media.image} />
                ))}
              </div>
            </div>
            <div className=" max-w-[30rem] text-right max-md:px-3 ">
              Rayleigh Methodist is part of the Southend & Leigh Methodist
              Circuit - Registered Charity: 1134248
            </div>
          </div>
        </div>
        {/* ========== Copywrite Info ============== */}
        <div className="flex justify-between items-stretch  max-md:flex-col max-md:justify-center max-md:items-center ">
          <div className="flex">
            <Link href={""} className="underline-offset-4 underline">
              {" "}
              Privacy{" "}
            </Link>
            &nbsp; | &nbsp;
            <Link
              href={""}
              className=" text-primaryColor underline-offset-4 underline "
            >
              {" "}
              Safeguarding{" "}
            </Link>
          </div>
          <div className="pb-5 font-bold md:pt-10c  ">
            &copy; {tDate.getFullYear()} Rayleigh Methodist Church
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
