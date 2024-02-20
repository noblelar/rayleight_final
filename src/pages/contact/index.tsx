import { ChurchMap } from "@/components/church-map";
import { Hero } from "@/components/hero";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Hero title="Contact Us" backgroundImage="/images/contact_image.jpeg" />
      <section>
        <div className="container mx-auto px-4">
          <h2 className="my-7 font-tegomin text-primaryColor text-center text-2xl md:text-3xl lg:text-4xl">
            Rayleigh Methodist Church
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] gap-6 md:bg-[#E7E7E7] rounded-lg">
            <div className="px-4 py-6 w-[min(100%,540px)]">
              <ContactForm />
            </div>
            <div className="space-y-8 md:border md:border-primaryColor px-4 py-4 md:rounded-e-lg">
              <div>
                <p className="font-bold">General Enquires:</p>
                <p>78 Eastwood Road Rayleigh SS6 7JP</p>
                <p>01268 781896</p>
                <p className="text-primaryColor">
                  Email: 
                  <Link href="mailto:manager@rayleightmethodistchurch.org.uk">
                    manager@rayleightmethodistchurch.org.uk
                  </Link>
                </p>
              </div>
              <div>
                <p className="font-bold">For any general questions, </p>
                <p>
                  Call Margaret Flintham at{" "}
                  <Link href={"tel:07411289469"}>07411 289 469</Link>
                </p>
                <p>01268 781896</p>
                <p className="text-primaryColor break-words">
                  Email: 
                  <Link href="mailto:manager@rayleightmethodistchurch.org.uk">
                    margaretflintham@yahoo.org.uk
                  </Link>
                </p>
                <p>
                  Call Jo at <Link href={"tel07873396032"}>07873396032</Link>
                </p>
                <p className="text-primaryColor break-words">
                  Email:{" "}
                  <Link href="mailto:joanna.lee@rayleighmethodistchurch.org.uk">
                    joanna.lee@rayleighmethodistchurch.org.uk
                  </Link>
                </p>
              </div>
              <div>
                <p className="font-bold">Weddings, Baptisms, or Funerals: </p>
                <p>
                  Reach out to Rev Dr. Calvin Samuel at{" "}
                  <Link href={"tel:07411289469"}>07411 289 469</Link>
                </p>
                <p className="text-primaryColor break-words">
                  Email:{" "}
                  <Link href="mailto:calvin.samuel@methodist.org.uk">
                    calvin.samuel@methodist.org.uk
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-10 lg:mt-20">
        <ChurchMap />
      </div>
    </div>
  );
};

export default Contact;

function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert("Send email");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className=" grid gap-5">
        <div>
          <label htmlFor="name">Name</label>
          <Input name="name" id="name" placeholder="Enter name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div>
          <label htmlFor="telephone">Telephone</label>
          <Input
            name="telephone"
            id="telephone"
            type="tel"
            placeholder="Enter telephone"
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comment or Question</label>
          <Textarea
            name="comment"
            id="comment"
            placeholder="Write comment or question..."
            required
            className="min-h-[120px]"
          />
        </div>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}
