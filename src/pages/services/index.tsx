import React from "react";

const Index = () => {
  return (
    <div className=" min-h-[500px] ">
       {/* ==================== Introductory Image For Hall Hire ================== */}
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

    </div>
  );
};

export default Index;
