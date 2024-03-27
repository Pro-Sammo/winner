"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import Image1 from "../../../public/image1.jpg";
// import Image2 from "../../../public/image2.jpg";
// import Image3 from "../../../public/image3.png";
// import Image4 from "../../../public/image4.jpg";
// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   EffectFade,
//   Autoplay,
// } from "swiper/modules";
import machinerievector from "../../../public/machinerievector.jpg"
import HeatPress from "../../../public/heatpress.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="mb-10 w-full h-screen  flex justify-center items-center bg-[#FAFAF9]">
        <div className="text-xl -mt-24 md:text-4xl xl:text-5xl font-semibold" style={{ fontFamily: "GeneralSans" }}>Unleash Precision with Our Machinery</div>
        <div>
          <Image src={HeatPress} alt="vector"/>
        </div>
      </div>
    </>
  );
};

export default Hero;

{
  /* <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectFade,
          ]}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={true}
          effect="fade"
        >
          <SwiperSlide>
            <Image src={Image1} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image2} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image3} alt="image" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image4} alt="image" />
          </SwiperSlide>
        </Swiper> */
}
