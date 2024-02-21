import { Hero } from "@/components/hero";
import React from "react";
import Activities from "../activities";
import ActivityItem from "@/components/new-here/activityitem";
import ButtonB from "@/components/buttons/ccbbutton";
import ButtonA from "@/components/buttons/ind";

const activities = [
  {
    title: "Sunday Morning",
    text: "We meet each week on Sunday for morning worship at 11:15am. We have a Junior Church and a Crèche. Some special Sundays we have all age worship, and the Beavers, Rainbows, Cubs, Brownies, Guides, Scouts and Guiding Senior Section join us for worship. Other weeks our Junior Church join us at the end of worship where we share what each other has been doing.",
  },
  {
    title: " Sunday Evening ",
    text: "Traditionally we have held more reflective services on alternate Sunday evenings.each month. Currently those services have not been reinstated following the Covid shutdown.",
  },
  {
    title: "Holy Communion (Sacrament)",
    text: "As you look at our services on the website, sometimes you will note that we are sharing in Communion or Sacrament. At its simplest, in a communion service, we share in a small piece of bread and a small cup of wine (non-alcoholic) to remember and recall to mind that Jesus asked us to remember him in this way. In this we commune with each other and commune with God.",
  },
  {
    title: "Reflective Worship Services",
    text: "We have recently introduced this more informal style of worship. These services usually include the expected aspects of a worship service, but there is more opportunity to share our thoughts and participate in the theme of the service.",
  },
  {
    title: "Quarterly Early Morning Communion",
    text: "We hold a communion service on the first sunday of each Quarter, at 9:30am. (First Sunday of September, December, March and June)",
  },
  {
    title: "Weekday Communion",
    text: "We have Communion once a month on a Tuesday morning (3rd Tuesday of the month at 10:30am). This is a short informal commuion service with a short bible exposition, followed by a cup of tea or coffee. Information on each weeks services can be found in the Church Calendar.",
  },
];

const NewHere = () => {
  const bgimage = "images/worshipatrmc.png";
  return (
    <div>
      <Hero title="Worship At RMC" backgroundImage={bgimage} />

      {/* ========== Section With Activity Into ================= */}
      <section>
        <div className=" container m-auto my-[7rem] ">
          <div className=" text-center w-[80%] m-auto text-[1rem] max-lg:w-[95%] ">
            You are most welcome to join us for any of our regular services,
            just turn up and you will be welcomed at the door. There are
            normally a good number at our morning worship. The hymns are
            displayed on a video screen at morning services, usually accompanied
            by the organ, though a piano is sometimes used. There is also a
            newly formed music group. (Please let us know if you cannot see the
            screen as we can provide printed sheets and hymn books. Large Print
            and Braille are available)
          </div>

          {/* ============= Sunday Activities ==============  */}
          <div className=" my-[5rem] grid grid-cols-3 m-auto max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 ">
            {activities.map((activity, a) => {
              return (
                <ActivityItem
                  key={a}
                  text={activity.text}
                  title={activity.title}
                />
              );
            })}
          </div>


          <div className=" m-auto w-fit ">
            <ButtonA text=" Become a Member " hrefA={"/events"} bgcolor={1} txcolor={0} onClick={() => { } } classN={" bg-primaryColor text-backgroundColor border border-primaryColor "}  />
          </div>

        </div>
      </section>
    </div>
  );
};

export default NewHere;
