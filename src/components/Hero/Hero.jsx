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

import sliderImage01 from "../../../public/001.jpg"
import sliderImage02 from "../../../public/002.jpg"
import sliderImage04 from "../../../public/004.jpg"
import sliderImage05 from "../../../public/005.jpg"
import sliderImage06 from "../../../public/006.jpg"

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
        <SwiperSlide className='w-screen h-screen object-cover'><Image src={sliderImage04}/></SwiperSlide>
        <SwiperSlide className='w-screen h-screen object-cover'><Image src={sliderImage05}/></SwiperSlide>
        <SwiperSlide className='w-screen h-screen object-cover'><Image src={sliderImage06}/></SwiperSlide>


      </Swiper>
    </>
  );
}


export default Hero