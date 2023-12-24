/* eslint-disable react/jsx-key */
import React from "react";
import Faqlink from "./faqlink";

const faqs = [
  "How many services do you have in a day?",
  "Can I get a one on one councilling sercive with the pastor or priest?",
  " How many services do you have in a day?",
  "Can I get a one on one councilling sercive with the pastor or priest?",
  "How many services do you have in a day?",
  "Can I get a one on one councilling sercive with the pastor or priest?",
  "Can I get a one on one councilling sercive with the pastor or priest?",
];

const Faq = () => {
  const faql = faqs.length;
  const faqshare = faql / 2;

  let share1: number, share2;

  if (faql % 2 == 1) {
    share1 = Math.round(faqshare);
    share2 = Math.round(faqshare) - 1;
  } else {
    share1 = share2 = faqshare;
  }

  return (
    <section className="my-8">
      <div className=" m-auto text-center text-[2rem] font-playfair font-extrabold ">
        Frequently Asked Questions
      </div>
      <div className=" lg:flex text-textColor text-[1.2rem] ">
        <div className="lg:w-[50%] p-8 lg:border-r-2 ">
          {faqs.map((faq, fq) => {
            if (fq < share1) {
              return <Faqlink key={fq} question={`${faqs[fq]}`} fqa={0} />;
            }
          })}
        </div>
        <div className="lg:w-[50%] p-8 max-lg:pt-0 ">
          {faqs.map((faq, fq) => {
            if (fq >= share1) {
              return <Faqlink key={faq} question={`${faqs[fq]}`} fqa={0} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
