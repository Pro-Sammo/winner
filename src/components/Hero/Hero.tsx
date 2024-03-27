"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
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
import HeatPress from "../../../public/press-removebg-preview.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
const Hero = () => {
  return (
    <>
      <div className="mb-10 w-full h-screen  flex justify-center items-center ">
        <div className="text-xl -mt-24 md:text-7xl font-semibold">Unleash Precision with Our Heat Press Machinery</div>
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
