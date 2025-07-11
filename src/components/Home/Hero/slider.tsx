import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { features } from "@/app/api/data";
import Image from "next/image";

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className="overflow-x-hidden lg:mt-16 mt-16">
      <Slider {...settings}>
        {features.map((item, index) => (
          <div key={index} className="overflow-x-hidden pr-6">
            <div className="px-5 py-6 bg-dark_grey/80 rounded-xl">
              <div className="flex items-center gap-3">
                <Image
                  src={item.icon}
                  alt="icon"
                  width="32"
                  height="32"
                />
                <p className="text-white text-xs font-normal ">
                  <span className="text-16 font-bold mr-2">{item.title}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
