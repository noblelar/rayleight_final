import Image from "next/image";
import { MinisterCard } from "./minister-card";
import { TwoColumnSplit } from "../two-column-split";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const ministers = [
  {
    name: "Rev Dr Calvin Samuel",
    phone: "07411 289 469",
    email: "calvin.samuel@methodist.org.uk",
    imageUrl: "/images/ministers/rev-dr-calvin-samuel.png",
    position: "Minister",
  },
  {
    name: "Rev Dr Calvin Samuel",
    phone: "07411 289 469",
    email: "calvin.samuel@methodist.org.uk",
    imageUrl: "/images/rev-dr-calvin-samuel.png",
    position: "Minister",
  },
  {
    name: "Rev Dr Calvin Samuel",
    phone: "07411 289 469",
    email: "calvin.samuel@methodist.org.uk",
    imageUrl: "/images/rev-dr-calvin-samuel.png",
    position: "Minister",
  },
  {
    name: "Rev Dr Calvin Samuel",
    phone: "07411 289 469",
    email: "calvin.samuel@methodist.org.uk",
    imageUrl: "/images/rev-dr-calvin-samuel.png",
    position: "Minister",
  },
];

export function AboutPage() {
  return (
    <div>
      <div className="border border-gray-100 rounded-md px-4 py-2">
        <h3 className="text-center text-lg  md:text-xl lg:text-2xl mb-4">
          Introduction
        </h3>

        <p className="text-center text-gray-400">
          Church is not about buildings. Yes, we own and use to the full a set
          of buildings, but Rayleigh Methodist Church is a group of people. We
          are a group of people that seek to love Jesus, and gather together in
          our common love. We are a group of people that recognise that we are
          not perfect, but we know that we are loved by God, and we believe we
          can know that love in practice.
          <br />
          We gather together for worship, fellowship, communion, meals, and meet
          to discuss the mission and practicalities of being a church. We want
          our church to be a beacon of love in the community, and to help share
          God's love to all God's people.
        </p>
      </div>

      <div className="my-12">
        <h3 className="text-center text-lg  md:text-xl lg:text-2xl mb-5">
          Ministers
        </h3>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministers.map((m, ind) => {
            return (
              <li key={ind}>
                <MinisterCard key={ind} {...m} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="my-10 lg:my-20">
        <TwoColumnSplit
          left={
            <div>
              <h3 className="text-lg  md:text-xl lg:text-2xl mb-5">
                About leadership
              </h3>
              <p className="text-gray-400">
                Our church is run by a leadership team consisting of our
                minister,stewards, treasurer and a few church members. We have
                monthlymeetings and also meet with a wider group from the church
                to getopinions and make bigger decisions. The leadership team
                also haveaway days to pray and discuss what God is calling us to
                do in the future.
              </p>
            </div>
          }
          right={
            <Image
              src="/images/church_img.png"
              alt=""
              width={589}
              height={521}
            />
          }
        />
      </div>
      <div className="my-10 lg:my-20">
        <TwoColumnSplit
          left={
            <Image
              src="/images/church_img.png"
              alt=""
              width={589}
              height={521}
            />
          }
          right={
            <div>
              <h3 className="text-lg  md:text-xl lg:text-2xl mb-5">
                Methodism & What we believe
              </h3>
              <p className="text-gray-400 my-4">
                If you would like to know what is disctinctive about the
                Methodist Church, and what we believe  have a look at the main
                church website.
              </p>
              <Link href={"/"} className={buttonVariants({ size: "xl" })}>
                National methodist website
              </Link>
              <p className="text-gray-400 my-4">
                Rayleigh Methodist Church is a member Church of the Southend &
                Leigh Methodist Circuit. (Our churches are organised into
                circuits, following John Wesley's organisation from his travels
                around his Methodist Societies, when he visited each society in
                a circuit tour on horseback). The Southend and Leigh Circuit is
                part of the Beds, Herts and Essex District.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}
