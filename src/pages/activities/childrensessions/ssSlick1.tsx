import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default class OneSideSlide1 extends Component {
  render() {
    const settings = {
      className: "!-z-10",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 4000,
    };
    return (
      <div>
        {/* <h2>Variable width</h2> */}
        <Slider {...settings}>
          <div className=" w-full ">
            <div className=" flex w-full text-textColor max-lg:flex-col ">
              <div className="m-auto my-8 lg:w-[35%] ">
                <div className=" lg:mx-4 w-full m-auto  text-center ">
                  <Image
                    className=" w-full h-full m-auto "
                    src={"/images/drama_club.png"}
                    alt={"drama_club"}
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
              </div>
              <div className="m-auto my-8 lg:w-[50%] max-lg:w-full flex justify-center items-center bg-children ">
                <div className=" max-lg:mx-4 w-full px-8 font-opensans font-semibold text-center text-[1.2rem] max-lg:p-8 ">
                  Who: Parents & Carers, Toddlers & Babies When: Mondays 1:15pm
                  to 2:45pm, during term time Where: Nash Hall – please use the
                  side entrance of the building Sign-Up?: Not necessary - just
                  come along when you can! Cost: £1.50 for the first child, 50p
                  per additional child If the money is a problem for you, please
                  come along anyway – we won&apos;t turn you away! A lovely group for
                  parents/carers to bring their babies and toddlers to play.
                  There are plenty of toys out, as well as table
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full ">
            <div className=" flex w-full text-textColor max-lg:flex-col-reverse flex-row-reverse ">
              <div className="m-auto my-8 lg:w-[35%] ">
                <div className=" max-lg:mx-4 w-full text-center ">
                  <Image
                    className=" w-full h-full m-auto "
                    src={"/images/children_theater1.png"}
                    alt={"children Theater"}
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
              </div>
              <div className="m-auto my-8 lg:w-[50%] flex justify-center items-center bg-children ">
                <div className=" max-lg:mx-4 w-full px-8 font-opensans font-semibold text-center text-[1.2rem] max-lg:p-8 ">
                  A welcoming space for parents/carers to bring their little
                  ones for playtime. Our setup includes a variety of toys,
                  playdough, puzzles, and a designated baby corner. During the
                  session, children enjoy a snack with fruit, biscuits, and
                  drinks, while adults can have a hot drink. The session
                  concludes with a sing-song featuring nursery rhymes and
                  musical instruments. A welcoming space for parents/carers to
                  bring their little ones for playtime. Our setup includes a
                  variety of toys, playdough, puzzles, and a designated baby
                  corner. During the session, children enjoy a snack with fruit,
                  biscuits, and drinks, while adults can have a hot drink. The
                  session concludes with a sing-song featuring nursery rhymes
                  and musical instruments. Sunbeam Baby & Toddler Group Parents
                  & carers appreciate the change of scene and the opportunity
                  for children to develop social skills like sharing. The group
                  also allows adults to connect with others, providing a social
                  break – if the kids allow them some playtime off. A welcoming
                  space for parents/carers to bring their little ones for
                  playtime. Our setup includes a variety of toys, playdough,
                  puzzles, and a designated baby corner. During the session,
                  children enjoy a snack with fruit, biscuits, and drinks, while
                  adults can have a hot drink. The session concludes with a
                  sing-song featuring nursery rhymes and musical instruments.
                  Sunbeam Baby & Toddler Group Meet new people, play and have
                  breakf
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
