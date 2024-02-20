import { PropsWithChildren, ReactNode } from "react";
import Slider, { Settings } from "react-slick";

interface GalleryProps {
  customSettings?: Settings;
}

export function Gallery({
  customSettings,
  children,
}: PropsWithChildren<GalleryProps>) {
  const settings = {
    // className: "slider variable-width",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    ...customSettings,
  };

  return <Slider {...settings}>{children}</Slider>;
}
