import React from "react";
import ButtonA from "../buttons/ind";

const Homepage = () => {
  return (
    <div className={``}>
      <section
        data-theme="black"
        className=" bg-[url('/images/church_img.png')] xl:h-[100vh] h-[90vh] w-full bg-cover  top-0 -z-20 bg-no-repeat -mt-[8rem] "
      >
        <div className=" flex justify-center justify-items-center h-[100%] w-[] ">
          <div className=" m-auto text-backgroundColor font-mulish font-extrabold text-[3rem] max-lg:w-[80%]   ">
            {" "}
            Welcome to Rayleigh Methodist Church{" "}
          </div>
        </div>
      </section>

      {/* ============= Mission Area ========= */}
      <section className=" ">
        <div className="container m-auto text-center max-md:px-2">
          <div className=" my-[3.5rem] lg:my-[6rem] ">
            <div className=" m-auto lg:max-w-[80%] font-mulish font-extrabold text-[2.5rem] leading-10 max-md:text-[1.6rem] max-md:leading-6 ">
              The mission of Rayleigh Methodist Church is to celebrate the
              reality of God and proclaim the kingdom of God to all people
            </div>
            <div className=" m-auto lg:max-w-[70%] text-textColor2 text-[1.4rem] pt-[2rem] max-lg:text-justify ">
              <h1 className=" pb-[2rem] text-primaryColor max-lg:!text-center ">
                Aims to fulfill this mission are :
              </h1>
              To encourage and support the growth in faith of all To establish
              an atmosphere in which everyone is valued and feels that they have
              a contribution to make To support and encourage witness within the
              wider community To provide a wider vision of Methodism,
              ecumenical, national and international
            </div>
          </div>
        </div>
      </section>

      {/* ============ A Place Area ========== */}
      <section className=" bg-primaryColor ">
        <div className="container mx-auto text-backgroundColor bg-primaryColor">
          <div className=" w-full flex py-8 lg:space-x-8 max-lg:flex-col ">
            <div className="w-[60%] mx-auto max-lg:w-[100%] ">
              {/* <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/watch?v=y89CQgdgrio"
                  allowFullScreen
                ></iframe> */}
              <iframe
                className=" rounded-lg h-full m-0 max-md:h-[60vh] max-lg:h-[50vh] "
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/y89CQgdgrio"
                title="Alpha Walkthrough 2023"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className=" w-[40%] max-lg:w-[100%] max-lg:pt-8 ">
              <div className=" m-auto px-[1.5rem]  ">
                <h3 className=" text-center font-playfair font-bold text-[2.3rem] ">
                  A place to call home
                </h3>
                <ul className=" list-disc py-4 space-y-4 lg:text-[1.2rem] max-lg:text-[1.1rem] md:max-lg:text-[1.2rem] ">
                  <li>
                    We are a friendly church with arms wide open to our local
                    community. Whether you attend a group in our building, or
                    come along on a Sunday morning, we hope you find the warmest
                    of welcomes here.
                  </li>
                  <li>
                    We want to serve our community, showing them the love that
                    God has shown to us and welcoming them into our family.
                    Church is a place to call home.
                  </li>
                  <li>
                    Curious what we believe and why? Church is a place to
                    explore, ask questions and discover what faith could mean in
                    your life. We&apos;d love to walk with you on that journey -
                    find out more here.
                  </li>
                </ul>
                <ButtonA
                  text="Find out more"
                  bgcolor={0}
                  txcolor={1}
                  onClick={() => {}}
                  classN="border-backgroundColor border  text-primaryColor bg-backgroundColor "
                  hrefA="/home"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Join Us =========== */}
      <section>
        <div className="container m-auto">
          <div className="flex text-textColor py-[5rem] ">
            <div>
              <div className="  ">
                <p>Join Us This Lent </p>
                <p>
                  We&apos;re running a lent course, starting on Tuesday 13th
                  February, and we&apos;d love you to join us. <br /> <br />
                  <span>There are two opportunities to join in</span>
                </p>
                <p>
                Whichever suits you best, we hope to see you there! Please contact Jo for zoom details or more information.
                </p>
              </div>
              <ButtonA text="Contact Us" bgcolor={1} txcolor={0} onClick={()=>{}} classN=" border-primaryColor border  text-backgroundColor bg-primaryColor " />
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
