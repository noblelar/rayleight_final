import MyTypewrite from "@/components/typewrite/typewriter";
import React from "react";

let list = [" TURNING DREAMS INTO REALITY"];
// list=["Ghana", "Africa"]

const Index = () => {
  return (
    <div className=" min-h-[500px]  ">
      {/* ==================== Introductory Image Area ========= */}
      <div className=" bg-[url('/images/weddingimg.png')] w-full bg-cover  top-0 -z-20 bg-no-repeat -mt-[8rem] ">
        <div className=" flex justify-center justify-items-center max-sm:min-h-[150vh] m-auto ">
          <div className=" max-md:mt-[3rem] md:my-[3rem] text-textColor  ">
            <div className=" pt-[10rem] max-sm:pt-[15rem] ">
              <p className="font-playfair font-extrabold italic text-[4rem] text-center max-md:leading-[4rem] ">
                Wedding Services
              </p>
              <div className=" !font-kalnia typewriter text-[1.5rem] text-center pt-[1.5rem] text-weddingText ">
                <MyTypewrite list={list} />
              </div>
              <p className=" m-auto p-8 text-justify font-opensans text-[1.5rem] max-w-[55rem] ">
                To replace any placeholder text (such as this), just click it
                and start typing. We think this paragraph makes a great
                statement just as it is. But if you&apos;d like to try a bit of
                customizing to make it your own, you can change the fonts with
                just a click.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =================== Congrats ============= */}
      <div className=" m-auto ">
        <div className="container m-auto">
          <div className=" m-auto w-full my-12">
            <p className=" text-center w-full font-playfair text-textColor font-semibold text-[2rem] italic lg:text-[2.6rem] ">
              CONGRATULATIONS!
            </p>
            <p className=" text-center w-full py-4 text-[1.5rem] px-4 font-kalnia">
              LET&apos;S MAKE YOUR DAY SPECIAL
            </p>
          </div>
        </div>
      </div>

      {/* ==================== Wedding Message 1 =============== */}
      <div className=" bg-wedding  ">
        <div className="container m-auto min-h-[50rem] ">
          <div className="lg:flex">
            <div className=" lg:w-[50%] m-auto ">
              <div className=" m-auto p-8 text-textColor text-[1.2rem] ">
                <p className=" m-auto text-center py-8 font-playfair text-[2rem] ">A Message to the couple</p>
                <p className=" font-kalnia py-3 ">Dear Engaged Couple,</p>
                <p className=" text-justify ">
                  Congratulations on your engagement! We are thrilled to share
                  in the joy of this special moment in your lives and extend our
                  warmest wishes as you embark on the journey toward a lifetime
                  of love and partnership. <br /> We are delighted to inform you
                  that Rayleigh Methodist Church is honored to host and
                  facilitate your marriage ceremony, providing you with a
                  beautiful and meaningful setting to celebrate your union.
                  <br /> To ensure a smooth and organized process for your
                  upcoming wedding, it is important to be aware of the
                  registration procedure. In accordance with Methodist Church
                  practices, weddings are conducted based on certificates.
                  <br /> <br /> Therefore, it becomes the responsibility of the couple
                  to initiate the registration process by visiting the Registry
                  Office and applying for the necessary certificates. This step
                  is a crucial part of the preparations, and we are here to
                  guide you through this process to make it as seamless as
                  possible. Should you have any questions or require assistance
                  at any stage, please do not hesitate to reach out. We are
                  committed to making your wedding experience at Rayleigh
                  Methodist Church a joyous and memorable occasion. <br /> <br /> Once
                  again, congratulations on this wonderful milestone, and we
                  look forward to being a part of your journey towards a
                  beautiful and blessed marriage. <br />
                </p>
                <p className=" font-kalnia py-3 leading-[3rem] ">Warm regards, <br /> Rayleigh Methodist Church</p>
              </div>
            </div>
            <div className=" lg:w-[50%] bg-[url('/images/wedding1.png')] bg-cover min-h-[50rem] "></div>
          </div>
        </div>
      </div>

       {/* ==================== Wedding Message 1 =============== */}
       <div className=" bg-wedding  ">
        <div className="container m-auto min-h-[50rem] ">
          <div className="lg:flex lg:flex-row-reverse">
            <div className=" lg:w-[50%] m-auto ">
              <div className=" m-auto p-8 text-textColor text-[1.2rem] ">
                <p className=" m-auto text-center py-8 font-playfair text-[2rem] ">A Message to the couple</p>
                <p className=" font-kalnia py-3 ">Dear Engaged Couple,</p>
                <p className=" text-justify ">
                  Congratulations on your engagement! We are thrilled to share
                  in the joy of this special moment in your lives and extend our
                  warmest wishes as you embark on the journey toward a lifetime
                  of love and partnership. <br /> We are delighted to inform you
                  that Rayleigh Methodist Church is honored to host and
                  facilitate your marriage ceremony, providing you with a
                  beautiful and meaningful setting to celebrate your union.
                  <br /> To ensure a smooth and organized process for your
                  upcoming wedding, it is important to be aware of the
                  registration procedure. In accordance with Methodist Church
                  practices, weddings are conducted based on certificates.
                  <br /> <br /> Therefore, it becomes the responsibility of the couple
                  to initiate the registration process by visiting the Registry
                  Office and applying for the necessary certificates. This step
                  is a crucial part of the preparations, and we are here to
                  guide you through this process to make it as seamless as
                  possible. Should you have any questions or require assistance
                  at any stage, please do not hesitate to reach out. We are
                  committed to making your wedding experience at Rayleigh
                  Methodist Church a joyous and memorable occasion. <br /> <br /> Once
                  again, congratulations on this wonderful milestone, and we
                  look forward to being a part of your journey towards a
                  beautiful and blessed marriage. <br />
                </p>
                <p className=" font-kalnia py-3 leading-[3rem] ">Warm regards, <br /> Rayleigh Methodist Church</p>
              </div>
            </div>
            <div className=" lg:w-[50%] bg-[url('/images/wedding1.png')] bg-cover min-h-[50rem] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
