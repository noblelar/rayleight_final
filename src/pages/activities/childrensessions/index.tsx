import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div className=" min-h-[500px] ">
      {/* ==================== Introductory Image For Hall Hire ================== */}
      <section className=" bg-[url('/images/children.png')] max-sm:bg-[url('/images/children_mob.png')] w-full bg-cover  top-0 -z-20 bg-no-repeat -mt-[8rem] ">
        <div className=" flex justify-center justify-items-center lg:max-h-[150vh] m-auto bg-backgroundColor/30  ">
          <div className=" max-md:mt-[3rem] md:my-[3rem] text-textColor  ">
            <div className=" pt-[10rem] max-sm:pt-[15rem] ">
              <p className="font-playfair font-extrabold italic text-[4rem] text-center max-md:leading-[4rem] ">
                Rayleight Kids - Rayleigh Methodist Church
              </p>
              <p className=" text-center font-opensans text-2xl font-bold px-12 py-12 max-lg:text-justify max-lg:px-3 ">
                Visitors are encouraged to explore the full list of services offered by Rayleigh Methodist Church&apos;s Children&apos;s Group to discover additional enriching experiences for their children. Each service is designed to contribute positively to a child&apos;s development and well-being.
              </p>

              <div className=" font-playfair font-extrabold text-[1.3rem] text-center pt-[1.5rem] text-textColor  mb-[6rem] max-lg:mt-[2rem] lg:space-x-8 max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:space-y-6 ">
                <Link
                  href={"/"}
                  className=" font-bold rounded-2xl bg-hallhire p-4 w-[12rem] m-auto "
                >
                  Learn More
                </Link>
                <Link
                  href={"/"}
                  className=" font-bold rounded-2xl bg-hallhire p-4 w-[12rem] m-auto "
                >
                  Contact 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
This is the new content
      </section>

    </div>
  );
};

export default Index;
