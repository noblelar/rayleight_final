

import Link from 'next/link'
import React from 'react'
import ServicesA from './services'
import CenterMode from './ssSlick'
import SerAbout from './serabout'
import Galleries from './gallerySlick'

const HallHire = () => {
  return (
    <div className=' min-h-[500px]'>
      {/* ==================== Introductory Image For Hall Hire ================== */}
      <section className=" bg-[url('/images/hallhire.png')] max-sm:bg-[url('/images/hallhire.png')] w-full bg-cover  top-0 -z-20 bg-no-repeat -mt-[8rem] ">
        <div className=" flex justify-center justify-items-center lg:max-h-[150vh] m-auto bg-backgroundColor/30 max-lg:max-h-[110vh] ">
          <div className=" max-md:mt-[3rem] md:my-[3rem] text-textColor  ">
            <div className=" pt-[10rem] max-sm:pt-[15rem] ">
              <p className="font-playfair font-extrabold italic text-[4rem] text-center max-md:leading-[4rem] ">
                Best Place For All Your Special
              </p>
              <p className="font-playfair font-extrabold italic text-[4rem] text-center max-md:leading-[4rem] ">
               Occasions
              </p>
              

              <div className=" font-playfair font-extrabold typewriter1 text-[1.3rem] text-center pt-[1.5rem] text-textColor mt-[17rem] mb-[6rem] max-lg:mt-[2rem] ">
               <Link href={""} className=' font-bold rounded-2xl bg-hallhire p-4 ' >
                  Enquire Now
               </Link>
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* ========== Services Images ================ */}
      <section className="">
         <div className=" container m-auto ">
            <p className=" text-center text-textColor font-bold my-6 text-[1.8rem] font-kalnia m-auto max-w-lg ">
               Service
            </p>

            {/* <ServicesA/> */}
            <CenterMode/>

         </div>
      </section>

      {/* =============== About Us Section ================ */}
      <section>
         <div className=" container m-auto ">
            
               <SerAbout/>
         </div>
      </section>

      {/* ================ Galleries ================= */}
      <section>
         <div className=" container m-auto ">
            <div className=" my-12 ">
               <div className=" text-center font-kalnia text-[2.8rem] ">
                  Gallery
               </div>
            <Galleries/>
            </div>
         </div>
      </section>

    </div>
  )
}

export default HallHire
