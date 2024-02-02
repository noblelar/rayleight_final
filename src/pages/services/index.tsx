import React from "react";

const Index = () => {
  return (
    <div className=" min-h-[500px] ">
       {/* ==================== Introductory Image For Services ================== */}
       <section className=" bg-[url('/images/miracles_cleanup.png')] max-sm:bg-[url('/images/miracles_cleanup_phone.png')] w-full bg-cover max-lg:bg-center  top-0 -z-20 bg-no-repeat -mt-[8rem] ">
        <div className=" flex justify-center justify-items-center lg:min-h-[75vh] max-lg:min-h-[95vh] m-auto bg-backgroundColor/30  ">
          <div className=" max-md:mt-[3rem] md:my-[3rem] text-textColor  ">
            <div className=" pt-[10rem] max-sm:pt-[15rem] ">
              <p className="font-playfair font-extrabold italic text-[4rem] text-center max-md:leading-[4rem] ">
                Rayleigh Methodist Church
              </p>
              <p className=" text-center font-opensans text-2xl font-bold px-12 py-12 max-lg:text-justify max-lg:px-3 ">
                
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* ==================== Service Time ================== */}
      <section>
        <div className="container m-auto bg-[url('/images/beautybg.png')] bg-cover min-h-[100vh] max-sm:bg-[url('/images/beautybg_phone.png')] ">

          <div className=" text-center py-8 text-[2rem] lg:text-[3.5rem] text-backgroundColor font-kalnia font-extrabold ">Service Times </div>

          <div className=" text-backgroundColor text-center space-y-4 m-auto my-12 text-[1.6rem] ">
            <div className=" lg:flex m-auto justify-center ">
            <p className=" font-extrabold max-lg:text-[1.3rem] italic ">SUNDAY SERMON: <span className=" hidden lg:inline "> &nbsp; </span></p>
            <p className=" font-extrabold "> 9:30AM & 11:15AM</p>
            </div>
            <div className=" lg:flex m-auto justify-center ">
            <p className=" font-extrabold max-lg:text-[1.3rem] italic ">SUNDAY SCHOOL: <span className=" hidden lg:inline "> &nbsp; </span></p>
            <p className=" font-extrabold "> 9:30AM & 11:00AM</p>
            </div>
            {/* <p className=" font-extrabold ">SUNDAY SCHOOL: 9:30AM & 11:00AM</p> */}
          </div>

          <p className=" text-service text-center m-auto mt-[10rem] lg:mt-[10rem] text-[1.3rem] lg:font-bold ">
          PROVIDING A HOME. PROCLAIMING THE GOSPEL. PARTNERING WITH MINSTERIES

          </p>

        </div>
      </section>

    </div>
  );
};

export default Index;
