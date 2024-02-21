/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { MinisterCard } from "./minister-card";
import { TwoColumnSplit } from "../two-column-split";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const items = [
  {
    title: "Home Groups",
    imageUrl: "/images/about-img.jpeg",
    description: `We have a housegroup that meet on a monthly basis, on the 3rd Monday evening of each month, to which anyone is made welcome. Please contact the minister or speak to a steward for further details.`,
  },
  {
    title: "Memory Worship",
    imageUrl: "/images/about-img.jpeg",
    description: `A group for Ladies which meets on Thursday mornings from 10am to 12 noon. This is an informal get together for Knitting, sewing, chatting and laughter. During the Summer months we hold three coffee mornings at the homes of individuals and on these occasions the proceeds are given to different charities.`,
  },
  {
    title: "Wesley Guild",
    imageUrl: "/images/about-img.jpeg",
    description: `It meets from Mid September to May on Thursday at 2pm. It is an accessible, open and welcoming fellowship to men and women of all ages,  interests and backgrounds. We have varied evenings following a four-point programme:-
     - Devotional
    - Christian Service
    - Cultural and Musical
    - Social
    <br />
    Our Motto is ‘one Heart - one Way’
    `,
  },
  {
    title: "Ladies Club ",
    imageUrl: "/images/about-img.jpeg",
    description: `We meet on a Wednesday Afternoon from 1.45pm-3.15pm.
    We are welcoming and friendly with good companionship among our members. This is a very informal club, and we have some vaired and interesting speakers. Good discussions and many laughs.
    Members who have missed a few meetings always feel welcomed when they return.
    We go on outings - often to eat!
    Always open to new ideas and would welcome new members.
    Meetings last about 1½ to 1¾ hours and of course, we have tea and a bisuit (and sometimes cake).
    At the moment we have about 12-15 members.
    (Someone suggested we were a group of middle-aged ladies, until we realised we were anticipating reaching the ripe old age of 12-140!!!)`,
  },
  {
    title: "Carer meeting",
    imageUrl: "/images/about-img.jpeg",
    description: `Evening activities for young people include:
    Beavers, Cubs and Sea Scouts who meet on a Thursday Rainbows, Brownies, Guides and Senior Section (Wednesdays & Fridays)`,
  },
  {
    title: "Alpha Course",
    imageUrl: "/images/about-img.jpeg",
    description: `For the adults there is Women’s Fellowship on a Monday Afternoon.
    The Ladies Club meet on a Wednesday Afternoon.
    Wesley Guild on a Thursday afternoons.`,
  },
];
export function AdultProgrammePage() {
  return (
    <div className="flex flex-col md:pb-16 gap-24">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col gap-5 md:gap-10 md:flex-row`}
        >
          <div className="w-full md:w-1/2 h-48 md:h-96">
            <img
              src={item.imageUrl}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
