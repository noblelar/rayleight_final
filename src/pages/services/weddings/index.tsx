import MyTypewrite from "@/components/typewrite/typewriter";
import React from "react";

let list = [" TURNING DREAMS INTO REALITY"];


const Index = () => {
  return (
    <div className=" min-h-[500px]  ">
      {/* ==================== Introductory Image Area ========= */}
      <div className=" bg-[url('/images/weddingimg.png')] w-full bg-cover  top-0 -z-20 bg-no-repeat -mt-[8rem] ">
        <div className=" flex justify-center justify-items-center max-sm:min-h-[150vh] m-auto ">
          <div className=" max-md:mt-[3rem] md:my-[3rem] text-textColor  ">
            <div className=" pt-[10rem] max-sm:pt-[15rem] ">
              <p className="font-playfair font-extrabold italic text-[4rem] text-center max-md:leading-[4rem] ">
                Wedding Services
              </p>
              <div className=" !font-kalnia typewriter text-[1.5rem] text-center pt-[1.5rem] text-weddingText ">
                <MyTypewrite list={list} />
              </div>
              <p className=" m-auto p-8 text-center font-opensans text-[1.5rem] max-w-[55rem] ">
                Wives, in the same way submit yourselves to your own husbands so
                that, if any of them do not believe the word, they may be won
                over without words by the behavior of their wives, when they see
                the purity and reverence of your lives.
                <br />
                <br />
                <span className=" font-kalnia italic font-extrabold ">
                  1 Peter 3:1-5
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =================== Congrats ============= */}
      <div className=" m-auto ">
        <div className="container m-auto">
          <div className=" m-auto w-full my-12">
            <p className=" text-center w-full font-playfair text-textColor font-semibold text-[2rem] italic lg:text-[2.6rem] ">
              CONGRATULATIONS!
            </p>
            <p className=" text-center w-full py-4 text-[1.5rem] px-4 font-kalnia">
              LET&apos;S MAKE YOUR DAY SPECIAL
            </p>
          </div>
        </div>
      </div>

      {/* ==================== Wedding Message 1 =============== */}
      <div className=" bg-wedding  ">
        <div className="container m-auto min-h-[50rem] ">
          <div className="lg:flex">
            <div className=" lg:w-[50%] m-auto ">
              <div className=" m-auto p-8 text-textColor text-[1.2rem] ">
                <p className=" m-auto text-center py-8 font-playfair text-[2rem] ">
                  A Message to the couple
                </p>
                <p className=" font-kalnia py-3 ">Dear Engaged Couple,</p>
                <p className=" text-justify ">
                  Congratulations on your engagement! We are thrilled to share
                  in the joy of this special moment in your lives and extend our
                  warmest wishes as you embark on the journey toward a lifetime
                  of love and partnership. <br /> We are delighted to inform you
                  that Rayleigh Methodist Church is honored to host and
                  facilitate your marriage ceremony, providing you with a
                  beautiful and meaningful setting to celebrate your union.
                  <br /> To ensure a smooth and organized process for your
                  upcoming wedding, it is important to be aware of the
                  registration procedure. In accordance with Methodist Church
                  practices, weddings are conducted based on certificates.
                  <br /> <br /> Therefore, it becomes the responsibility of the
                  couple to initiate the registration process by visiting the
                  Registry Office and applying for the necessary certificates.
                  This step is a crucial part of the preparations, and we are
                  here to guide you through this process to make it as seamless
                  as possible. Should you have any questions or require
                  assistance at any stage, please do not hesitate to reach out.
                  We are committed to making your wedding experience at Rayleigh
                  Methodist Church a joyous and memorable occasion. <br />{" "}
                  <br /> Once again, congratulations on this wonderful
                  milestone, and we look forward to being a part of your journey
                  towards a beautiful and blessed marriage. <br />
                </p>
                <p className=" font-kalnia py-3 leading-[3rem] ">
                  Warm regards, <br /> Rayleigh Methodist Church
                </p>
              </div>
            </div>
            <div className=" lg:w-[50%] bg-[url('/images/wedding1.png')] bg-cover min-h-[50rem] "></div>
          </div>
        </div>
      </div>

      {/* ==================== Wedding Message 2 =============== */}
      <div className=" bg-wedding  ">
        <div className="container m-auto min-h-[50rem] ">
          <div className="lg:flex lg:flex-row-reverse">
            <div className=" lg:w-[50%] m-auto ">
              <div className=" m-auto p-8 text-textColor text-[1.2rem] ">
                <p className=" m-auto text-center py-8 font-playfair text-[2rem] ">
                  Introduction
                </p>

                <p className=" text-justify ">
                  The intending couple must schedule a legal interview at the
                  Registrar&apos;s Office, attending separately with required
                  documents and paying a £40 fee for each certificate. After a
                  successful interview, their NOTICE OF MARRIAGE is displayed
                  for three weeks to address potential legal objections. <br />{" "}
                  <br />
                  Following this period, the couple receives &apos;Blue
                  Forms&apos; (wedding authorities). It&apos;s their
                  responsibility to schedule the legal interview, and until they
                  receive the &apos;Blue Forms,&apos; their church booking is
                  provisional. <br /> <br /> Upon receipt, the couple verifies
                  certificate information and informs the Minister. The
                  certificates are securely stored in the church safe until the
                  wedding day. Loss or destruction necessitates restarting the
                  process. <br /> <br />
                  Post-wedding, certificates are returned to the General
                  Registry Office with Marriage Returns, completing the full
                  Marriage Certificate.
                </p>
                <p className=" font-kalnia py-3 leading-[3rem] ">
                  For any clarifications, please feel free to contact us.
                </p>
              </div>
            </div>
            <div className=" lg:w-[50%] bg-[url('/images/wedding2.png')] bg-cover min-h-[50rem] "></div>
          </div>
        </div>
      </div>

      {/* ==================== Wedding Message 3 =============== */}
      <div className=" bg-wedding  ">
        <div className="container m-auto min-h-[50rem] ">
          <div className="lg:flex ">
            <div className=" lg:w-[50%] m-auto ">
              <div className=" m-auto p-8 text-textColor text-[1.2rem] ">
                <p className=" m-auto text-center py-8 font-playfair text-[2rem] ">
                  Pre-Wedding Ceremony
                </p>
                {/* <p className=" font-kalnia py-3 ">Dear Engaged Couple,</p> */}
                <p className=" text-justify ">
                  Preparing for your wedding at our church involves four
                  meetings with the Minister, culminating in the final meeting,
                  which serves as the wedding rehearsal. <br /> <br /> Please
                  note that there is a cost associated with weddings at the
                  church please see below, and various options are available to
                  meet your preferences and requirements. <br /> <br /> Feel
                  free to enquire for further details.
                </p>

                <div>
                  <table className="table-fixed m-auto  ">
                    <tbody>
                      <tr>
                        <td> Church Fees </td>
                        <td> 150 </td>
                      </tr>
                      <tr>
                        <td> Church Fees </td>
                        <td> 150 </td>
                      </tr>
                      <tr>
                        <td> Church Fees </td>
                        <td> 150 </td>
                      </tr>
                      <tr>
                        <td> Church Fees </td>
                        <td> 150 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className=" text-justify ">
                  The Church may offer some reduction in fees, where there is a
                  financial difficulty. <br /> <br /> The Minister will
                  collaborate with the couple to discuss the service content and
                  wording choices. If you wish to record your marriage service,
                  please sign a separate form.
                </p>
              </div>
            </div>
            <div className=" lg:w-[50%] bg-[url('/images/wedding3.png')] bg-cover min-h-[50rem] "></div>
          </div>
        </div>
      </div>

      {/* ==================== Wedding Message 4 =============== */}
      <div className=" bg-wedding  ">
        <div className="container m-auto min-h-[50rem] ">
          <div className="lg:flex lg:flex-row-reverse">
            <div className=" lg:w-[50%] m-auto ">
              <div className=" m-auto p-8 text-textColor text-[1.2rem] ">
                <p className=" m-auto text-center py-8 font-playfair text-[2rem] ">
                  Hymns & Music
                </p>

                <p className=" text-justify ">
                  We offer a diverse selection of hymns and Christian songs for
                  weddings, available in our range of books. The lyrics can be
                  provided on a song sheet or projected onto a screen. For
                  popular hymn choices. <br /> <br />
                  Our Organist is available to provide guidance on a broad
                  spectrum of wedding music, encompassing traditional options
                  and unique selections for the bride&apos;s entrance and the
                  coupl&apos;s exit. Additionally, music can be played through
                  CD or iPod.
                </p>
              </div>
              <div className=" m-auto p-8 text-textColor text-[1.2rem] ">
                <p className=" m-auto text-center py-8 font-playfair text-[2rem] ">
                  Co - creating your Wedding Day
                </p>

                <p className=" text-justify ">
                  The Minister is delighted to collaborate with the couple in
                  co-creating a personalized service, incorporating hymns, bible
                  readings, prayers, and additional elements like music, poems,
                  or solos based on the couple&apos;s preferences. <br /> <br /> 
                  The choice of having two rings for both or just one for the
                  bride is entirely up to the couple. While at least one bible
                  reading is required, the couple has the flexibility to choose
                  a reading that holds personal significance from the options
                  provided.
                </p>
              </div>
            </div>
            <div className=" lg:w-[50%] bg-[url('/images/wedding4.png')] bg-cover min-h-[50rem] overflow-x-auto "></div>
          </div>
        </div>
      </div>

      {/* max-md:bg-contain max-md:bg-no-repeat  max-md:m-auto */}

      {/* ==================== Wedding Message 4 =============== */}
      <div className=" min-h-[2.2rem] lg:min-h-[6rem] "></div>
    </div>
  );
};


export default Index;
