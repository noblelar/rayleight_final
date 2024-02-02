import React from "react";
import Link from "next/link";
import Image from "next/image";
import OneSideSlide from "./ssSlick";
import OneSideSlide1 from "./ssSlick1";
import OneSideSlide2 from "./ssSlick2";

const Index = () => {
  return (
    <div className=" min-h-[500px] ">
      {/* ==================== Introductory Image For Hall Hire ================== */}
      <section className=" bg-[url('/images/children.png')] max-sm:bg-[url('/images/children_mob1.png')] w-full bg-cover max-lg:bg-center  top-0 -z-20 bg-no-repeat -mt-[8rem] ">
        <div className=" flex justify-center justify-items-center lg:max-h-[150vh] m-auto bg-backgroundColor/30  ">
          <div className=" max-md:mt-[3rem] md:my-[3rem] text-textColor  ">
            <div className=" pt-[10rem] max-sm:pt-[15rem] ">
              <p className="font-playfair font-extrabold italic text-[4rem] text-center max-md:leading-[4rem] ">
                Rayleigh Kids - Rayleigh Methodist Church
              </p>
              <p className=" text-center font-opensans text-2xl font-bold px-12 py-12 max-lg:text-justify max-lg:px-3 ">
                Visitors are encouraged to explore the full list of services
                offered by Rayleigh Methodist Church&apos;s Children&apos;s
                Group to discover additional enriching experiences for their
                children. Each service is designed to contribute positively to a
                child&apos;s development and well-being.
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

      {/* ================= About Section on childrens Page ================ */}
      <section className=" -mt-16 ">
        <div className=" container m-auto">
          <div className=" lg:flex justify-center items-center w-full ">
            <div className="lg:w-[50%]  ">
              <Image
                className="w-full h-full"
                src={"/images/sunbeam.png"}
                alt={"Sunbeam Image"}
                width={600}
                height={600}
              />
            </div>
            <div className="lg:w-[50%] text-textColor max-lg:mb-8  ">
              <div className=" m-auto p-8 text-justify text-[1.1rem] mt-8 ">
                <h3 className=" font-opensans font-bold text-[2rem] ">About</h3>
                <p>
                  <span className=" text-primaryColor font-bold ">
                    Inclusive Community:
                  </span>
                  Rayleigh Methodist Church&apos;s Children&apos;s Group
                  promotes inclusivity, ensuring that every child and family
                  feels welcome and valued.
                </p>
                <p>
                  <span className=" text-primaryColor font-bold ">
                    Creative Learning:
                  </span>
                  The incorporation of creative elements in services like Messy
                  Church and Drama Club encourages imaginative learning
                  experiences for children.
                </p>
                <p>
                  <span className=" text-primaryColor font-bold ">
                    Nutritious Start:
                  </span>
                  The Breakfast Club not only provides a nutritious meal but
                  also creates a space for children to socialize before the day
                  begins.
                </p>
              </div>
              <div className=" m-auto w-full text-center ">
                <Link
                  href={"/"}
                  className=" font-bold bg-hallhire p-3 m-auto text-backgroundColor w-[200px] "
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== Children's Group ================= */}
      
      <section>
        <div className="container m-auto border-t-4 mt-8 ">
          <div className=" text-textColor my-8 ">
            <h3 className=" font-playfair font-bold text-[2.8rem] text-center ">
              {" "}
              Children&apos;s Group
            </h3>
            <p className=" font-opensans text-[1.3rem] leading-tight text-justify ">
              Rayleigh Methodist Church offers a diverse range of engaging
              services through its Children&apos;s Group, catering to various
              age groups and interests. The services include:
            </p>
          </div>
        </div>
      </section>

      {/* ======================== Sunbeam Baby and Toddler Group ======================== */}
      <section>
        <div className=" container m-auto ">
          <div className=" text-center text-textColor font-playfair font-extrabold text-[1.8rem] ">
          Sunbeam Baby & Toddler Group
          </div>
          
          <OneSideSlide1/>
        </div>
      </section>

      {/* ======================== Breakfast Club ======================== */}
      <section>
        <div className=" container m-auto ">
          <div className=" text-center text-textColor font-playfair font-extrabold text-[1.8rem] ">
          Breakfast Club
          </div>
          
          <OneSideSlide2/>
        </div>
      </section>

      {/* ======================== Drama Club ======================== */}
      <section>
        <div className=" container m-auto ">
          <div className=" text-center text-textColor font-playfair font-extrabold text-[1.8rem] ">
            Drama Club
          </div>
          
          <OneSideSlide/>
        </div>
      </section>

    </div>
  );
};

export default Index;
