"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {EffectFade, Navigation, Pagination ,Autoplay} from 'swiper/modules';

import Image from 'next/image';

import sliderImage01 from "../../../public/01.jpg"
import sliderImage02 from "../../../public/02.jpg"
import sliderImage03 from "../../../public/03.jpg"


 const Hero =()=> {
  return (
    <>
      <Swiper
        dir="ltr"
        loop
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay ,EffectFade]}
        className="mySwiper w-full h-fit mt-[4.5rem]"
      >
        <SwiperSlide className='w-screen h-screen object-cover'><Image src={sliderImage01}/></SwiperSlide>
        <SwiperSlide className='w-screen h-screen object-cover'><Image src={sliderImage02}/></SwiperSlide>
        <SwiperSlide className='w-screen h-screen object-cover'><Image src={sliderImage03}/></SwiperSlide>



      </Swiper>
    </>
  );
}


export default Hero