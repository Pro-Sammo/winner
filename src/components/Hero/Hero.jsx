"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import sliderImage01 from "../../../public/01.jpg";
import sliderImage02 from "../../../public/02.jpg";
import sliderImage03 from "../../../public/03.jpg";

const Hero = () => {
  return (
    <Swiper
      loop
      effect="fade"
      fadeEffect={{ crossFade: true }}
      centeredSlides={true}
      autoplay={{ delay: 3000, disableOnInteraction: true }}
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      className="mySwiper w-full h-fit mt-[4.5rem]"
    >
      <SwiperSlide className='w-screen h-screen object-cover'><Image src={sliderImage01} className='object-cover'/></SwiperSlide>
        <SwiperSlide className='w-screen h-screen object-cover'><Image src={sliderImage02} className='object-cover'/></SwiperSlide>
        <SwiperSlide className='w-screen h-screen object-cover'><Image src={sliderImage03} className='object-cover'/></SwiperSlide>
    </Swiper>
  );
};

export default Hero;
