import Image from "next/image";
import { MinisterCard } from "./minister-card";
import { TwoColumnSplit } from "../two-column-split";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function WeddingsPage() {
  return (
    <div>
      <div className="my-10 lg:my-20">
        <TwoColumnSplit
          right={
            <div>
              <p className="text-gray-400 my-4">
                We would love to be able to conduct your wedding at Rayleigh
                Methodist Church.
              </p>
              <p className="text-gray-400 my-4">
                Congratulations on your engagement, and we hope to be able to
                provide you with a wonderful marriage ceremony at Rayleigh
                Methodist Church. A wedding in a church allows you to make your
                commitment to each other that little bit more special, by making
                your commitment and promises before God.
              </p>
              <p className="text-gray-400 my-4">
                Weddings at a Methodist Church are conducted by certificates. It
                is the responsibility of the Bride and Groom to visit the
                Registry Office and apply for certificates.
              </p>
              <p className="text-gray-400 my-4">
                Both Bride & Groom must attend for a legal interview, by
                appointment, at the Registrar’s Office where they will be
                interviewed separately. They will need to bring certain
                documents and pay for this service which, if successful, will
                result in their NOTICE OF MARRIAGE being displayed at the
                Registrar’s Office for three weeks (in case there is a legal
                objection). The cost of certificates is £40 each and the
                certificates are valid for one year.
              </p>
            </div>
          }
          left={
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
          right={
            <Image
              src="/images/church_img.png"
              alt=""
              width={589}
              height={521}
            />
          }
          left={
            <div>
              <p className="text-gray-400 my-4">
                (We may be able to offer some reduction in fees, where there is
                a financial difficulty).
              </p>
              <p className="text-gray-400 my-4">
                The Minister will discuss with you the content of the service,
                and there are various choices of set words to say. (There are
                certain legal words that have to be said).
              </p>
              <p className="text-gray-400 my-4">
                Music is a very personal choice, but the minister and organist
                will help you make that choice. The church has the facility to
                play pre-recorded music, or videos. Sound amplification for
                soloists can also be provided. We do not insist on you attending
                the church, either before or after your wedding, but you will be
                most welcome. You may choose to visit the church for one of our
                services before your wedding so you can see what it is like, and
                hear the acoustics of the music and the ambience of worship.
              </p>
              <p className="text-gray-400 my-4">
                If you would like to video or sound record your marriage
                service, a separate form will need to be signed.
              </p>
            </div>
          }
        />
      </div>
      <div className="my-10 lg:my-20">
        <TwoColumnSplit
          right={
            <div>
              <h3 className="text-lg  md:text-xl lg:text-2xl mb-5">Hymns</h3>
              <p className="text-gray-400 my-4">
                There are a wide range of hymns and Christian songs that are
                available for weddings. We have a range of books to choose from,
                and can either print out words on a song sheet or project the
                words on our screen.
              </p>
              <Link href={"/"} className={buttonVariants({ size: "xl" })}>
                View popular hymns
              </Link>
            </div>
          }
          left={
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
          right={
            <Image
              src="/images/church_img.png"
              alt=""
              width={589}
              height={521}
            />
          }
          left={
            <div>
              <h3 className="text-lg  md:text-xl lg:text-2xl mb-5">
                Processional and Recessional Music
              </h3>
              <p className="text-gray-400 my-4">
                Our organist will be pleased to offer advice on the wide variety
                of wedding music available, from the traditional to something
                different for the bride to enter, and for your triumphant exit
                as husband & wife. Alternatively suitable music can be played
                via CD or iPod.
              </p>
              <Link href={"/"} className={buttonVariants({ size: "xl" })}>
                View popular music
              </Link>
            </div>
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
                Co-creating a Service
              </h3>
              <p className="text-gray-400 my-4">
                Your Minister will be happy to work with you to co-create a
                service for your special day. We want everyone to get the most
                out of the service, as it is one of the most important days of
                your life.
              </p>
              <p className="text-gray-400 my-4">
                Have a think about what you may want to include in the service.
                Apart from hymns/songs, bible readings and prayers, we can also
                include music, poems, solos…..
              </p>
              <p className="text-gray-400 my-4">
                You will need to think about whether both of you will have
                rings, or just the bride.
              </p>
            </div>
          }
        />
      </div>

      <div className="my-10 lg:my-20">
        <TwoColumnSplit
          right={
            <Image
              src="/images/church_img.png"
              alt=""
              width={589}
              height={521}
            />
          }
          left={
            <div>
              <h3 className="text-lg  md:text-xl lg:text-2xl mb-5">
                Bible Readings
              </h3>
              <p className="text-gray-400 my-4">
                There needs to be at least one bible reading in the service, you
                may wish to choose one from
              </p>
              <Link href={"/"} className={buttonVariants({ size: "xl" })}>
                Choose one below
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
}
