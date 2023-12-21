import React from "react";

const Index = () => {
  return <div className=" min-h-[500px] ">
     {/* ==================== Introductory Image Area ========= */}
     <div className=" bg-[url('/images/bible.png')] w-full bg-cover  top-0 -z-20 bg-no-repeat -mt-[8rem] ">
        <div className=" flex justify-center justify-items-center max-sm:min-h-[150vh] m-auto ">
          <div className=" max-md:mt-[3rem] md:my-[3rem] text-textColor  ">
            <div className=" pt-[10rem] max-sm:pt-[15rem] ">
              <p className="font-playfair font-extrabold italic text-[4rem] text-center max-md:leading-[4rem] ">
                Wedding Services
              </p>
              {/* <div className=" !font-kalnia typewriter text-[1.5rem] text-center pt-[1.5rem] text-weddingText ">
                <MyTypewrite list={list} />
              </div> */}
              <p className=" m-auto p-8 text-center font-opensans text-[1.5rem] max-w-[55rem] ">
                Wives, in the same way submit yourselves to your own husbands so
                that, if any of them do not believe the word, they may be won
                over without words by the behavior of their wives, when they see
                the purity and reverence of your lives.
                <br />
                <br />
                <span className=" font-kalnia italic font-extrabold ">
                  1 Peter 3:1-5
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>;
};

export default Index;
