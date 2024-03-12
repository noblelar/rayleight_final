import ButtonA from "@/components/buttons/ind";
import { Hero } from "@/components/hero";
import React from "react";

const Events = () => {
  return (
    <div>
      <Hero title="Events" backgroundImage="/images/eventhero.png" />

      <section>
        <div className="m-auto max-w-[70%] my-8 ">
          <h2 className=" font-mulish font-extrabold text-center text-[2.5rem] my-8 ">
            Alpha 2024
          </h2>
          <p>Find out about Sam's experience of Alpha below ...</p>
          <div className="  ">
            <iframe
              className="h-full m-0 aspect-video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/y89CQgdgrio"
              title="Alpha Walkthrough 2023"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" m-auto my-8 ">
            
          </div>
          <div className=" m-auto w-fit my-8 ">
            <ButtonA
              text="Sign Up"
              txcolor={0}
              bgcolor={1}
              classN=" text-backgroundColor bg-primaryColor border border-primaryColor "
              onClick={() => {}}
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Events;
