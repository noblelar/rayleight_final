import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// const DramaClub = () => {
//   return (
//     <div className="m-auto my-8 lg:w-[40%]  ">
//       <div className=" max-lg:mx-4 w-[200px] ">
//         <Image
//           className=" w-full h-full "
//           src={"/images/drama_club.png"}
//           alt={"drama_club"}
//           width={400}
//           height={400}
//           quality={100}
//         />
//       </div>
//     </div>
//   );
// };

// const DramaClub_Text = () => {
//   return (
//     <div className="m-auto my-8 lg:w-[60%] ">
//       <div className=" max-lg:mx-4 w-[200px] ">
//         Who: Children in school years 3-6 When: Tuesdays 3:30pm to 4:30m, during
//         term time Where: Nash Hall – please use the side entrance of the
//         building Sign-Up?: Please email
//         joanna.lee@rayleighmethodistchurch.org.uk to book your child’s place in
//         drama club Cost: This club is free!
//       </div>
//     </div>
//   );
// };

export default class OneSideSlide extends Component {
  render() {
    const settings = {
      className: "slider variable-width !-z-10",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      speed: 2000,
      initialSlide: 1,
      autoplay: true,
      autoplaySpeed: 4000, 
    };
    return (
      <div>
        <h2>Variable width</h2>
        <Slider {...settings}>
          
        </Slider>
      </div>
    );
  }
}
