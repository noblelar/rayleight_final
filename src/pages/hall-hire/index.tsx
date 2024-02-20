import { Gallery } from "@/components/Sliders/gallery";
import { ChurchMap } from "@/components/church-map";
import { Hero } from "@/components/hero";
import { HallCard } from "@/components/hire-now/hall-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const halls = [
  {
    id: "nash-hall",
    imageUrl: "/images/hallhire_img.jpeg",
    name: "Nash Hall",
    price: "£37.50 / hour",
    description:
      "The Nash Hall is 35ft by 37ft, and is perfect for events like parties or larger group meetings. There is a sound system for playing CDs or audio off a device (given it takes an aux cable).",
  },
  {
    id: "wesley-room",
    imageUrl: "/images/hallhire_img.jpeg",
    name: "Wesley Room",
    price: "£37.50 / hour",
    description:
      "The Nash Hall is 35ft by 37ft, and is perfect for events like parties or larger group meetings. There is a sound system for playing CDs or audio off a device (given it takes an aux cable).",
  },
];

const galleryImages = [
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
  "/images/hallhire_img.jpeg",
];

const HallHirePage = () => {
  return (
    <div>
      <Hero title="Hall Hire" backgroundImage="/images/hallhire_img.jpeg" />
      <section>
        <div className="container mx-auto px-4">
          <h2 className="my-4 text-lg md:text-xl lg:text-2xl text-gray-900">
            Hall Hire
          </h2>
          <p className="text-muted ">
            We rent out our spaces when they're not in use, for one-off events
            such as children's brithday parties and for regular groups meeting
            on a weekly or monthly basis.
            <br />
            The premises is accessible for people with limited mobility, with
            wheelchair access to all rooms and a disabled bathroom. Tables and
            chairs are available and our caretaker, Tom, is on hand should you
            need any help.
            <br />
            Please do get in touch with Margaret Flintham on 07817 202 285 or
            margaretflintham@yahoo.co.uk for more information, enquiries about
            availability or to book a space.
          </p>
          <Link
            href={"/contact"}
            className={buttonVariants({ size: "xl", className: "mt-4" })}
          >
            Enquire Now
          </Link>
        </div>
      </section>
      <section className="my-10">
        <div className="container mx-auto px-4">
          <ul className="grid md:grid-cols-2 gap-4">
            {halls.map((h) => {
              return <HallCard key={h.id} {...h} />;
            })}
          </ul>
        </div>
      </section>

      <section className="my-10 lg:my-20">
        <div className="container mx-auto px-4">
          <h2 className="my-7 font-tegomin text-primaryColor text-center text-2xl md:text-3xl lg:text-4xl">
            Gallery
          </h2>
        </div>
        <div className="overflow-hidden">
          <Gallery>
            {galleryImages.map((h, ind) => {
              return (
                <div key={ind} className="mx-2">
                  <Image src={h} alt="" width={310.51} height={288} />
                </div>
              );
            })}
          </Gallery>
        </div>
      </section>
    </div>
  );
};

export default HallHirePage;
