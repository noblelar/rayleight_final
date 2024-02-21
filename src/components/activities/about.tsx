/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { MinisterCard } from "./minister-card";
import { TwoColumnSplit } from "../two-column-split";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const items = [
  {
    title: "Sunbeams Baby & Toddler Group",
    imageUrl: "/images/about-img.jpeg",
    description: `MONDAYS 1:15 – 2:45PM (DURING TERM TIME)  -  £1.50 per session – Parents/Carers & Under 5s – No sign up
    <br />
    <br />
     This is a lovely group for parents/carers to bring their babies and toddlers to play. There are plenty of toys out, as well as tables with play dough, puzzles and craft, and a baby corner for our youngest attenders. We also have a snack time where children can have some fruit, a biscuit and a drink, and adult can have a hot drink. At the end of the session there is a little sing-song with nursery rhymes and musical instruments.
     <br />
     <br />
     Parents & carers have said how it’s good to have a change of scene sometimes, and it allows the children to meet other children and learn those all-important social skills like sharing. The group also provides parents/carers with a chance to meet other adults with children and have some social time themselves – if the kids let them off play duty!
     <br />
     <br />
     If the money is a problem for you, please come along anyway – we won’t turn you away!
     `,
  },
  {
    title: "Messy Church",
    imageUrl: "/images/about-img.jpeg",
    description: `Messy Church is a different expression of church – and a much messier one than normal! Each session has a theme. The first hour is spent doing craft activities, sometimes including painting or cooking. After this we head into the main part of the church- we sing some songs and have a short, child-friendly talk about our theme. Then we head back to the hall for food!
    <br />
    <br />
    Next on 25th Feb: Our theme is Lent.`,
  },
  {
    title: "Breakfast Club",
    imageUrl: "/images/about-img.jpeg",
    description: `FRIDAYS 9:30 – 10:45AM (during term time) - £: Minimal Cost for Breakfast – Parents/Carers & Under 5s – No sign up
    <br />
    <br />
    Breakfast club is a group for parents/carers and their young children to come, meet new people, play and have breakfast! We have toys out for the little ones to play with, and tables to sit round and eat. At the end of the session we sing some fun songs together, which is always a highlight.
    <br />
    <br />
    We serve a full English breakfast, with sausages, bacon, beans, egg and hash browns. You can order which items you and your little ones would like, and we have toast and drinks available to help yourself.
    <br />
    <br />
    If the money is a problem for you, please come along anyway – we won’t turn you away! `,
  },
  {
    title: "Drama Club",
    imageUrl: "/images/about-img.jpeg",
    description: `A chance for children to unleash their creative side with games and activities improving their drama
    skills. We’ll be learning to create freezeframes, act out stories and show expressions, along with lots of
    fun. There will be a mix of inspiration from secular stories and songs to Bible ones.
    <br />
    <br />
    Once a term we have ‘Drama Church’ – at our normal time on a Tuesday we’ll go into the main bit of
    the church and invite parents to come and see what we’ve been up to, and maybe join in with a drama
    game or two!`,
  },
];
export function ChildrenPage() {
  return (
    <div className="flex flex-col md:pb-16 gap-24">
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col gap-5 md:gap-10 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
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
