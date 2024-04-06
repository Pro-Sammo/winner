"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Scrollbar, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
import Client01 from "../../../public/client01.png";
import Client02 from "../../../public/client02.png";
import Client03 from "../../../public/client03.png";
import Client04 from "../../../public/client04.png";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });

const Brand = () => {
  const swiper = useSwiper();
  return (
    <div className=" md:px-12 py-6 md:py-8 my-52  md:mx-20 lg:mx-40 xl:mx-80 mx-4 rounded-md flex flex-col justify-center items-center">
    <div className={`${oswald.className} ${'text-center text-2xl md:text-3xl lg:text-4xl mb-14 lg:mb-20 '}`}>Trusted by 200+ Forward Thinking Companies</div>
      <div className="w-full">
        <Swiper
          modules={[Autoplay, A11y, Scrollbar, Navigation]}
          spaceBetween={20}
          slidesPerView={"auto"}
          loop
          speed={5000}
          autoplay={{
            delay: false,
            disableOnInteraction: false,
          }}
          navigation={false}
          breakpoints={{
            300: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <Image src={Client01} alt="client01" className="opacity-50 cursor-pointer hover:opacity-100 duration-250"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Client02} alt="client01" className="opacity-50 cursor-pointer hover:opacity-100 duration-250"/>
          </SwiperSlide>
          <SwiperSlide> 
            <Image src={Client03} alt="client01" className="opacity-50 cursor-pointer hover:opacity-100 duration-250"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Client04} alt="client01" className="opacity-50 cursor-pointer hover:opacity-100 duration-250"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Client01} alt="client01" className="opacity-50 cursor-pointer hover:opacity-100 duration-250"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Client01} alt="client01" className="opacity-50 cursor-pointer hover:opacity-100 duration-250"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
