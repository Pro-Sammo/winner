"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { ArrowLeft, ArrowRight } from "lucide-react";


const Carousel = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full max-h-fit flex flex-col items-center">
      <div className="md:w-4/6 w-full px-11">
        <div className="mb-4">
          <h1 className="font-medium text-2xl pb-1">Finishing</h1>
          <div className="h-[1px] w-full bg-blue-900"></div>
        </div>
        <div className="h-full mb-10 w-full">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            loop
            breakpoints={{
              400: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <iframe
                className="w-full h-60"
                src="https://www.youtube.com/embed/kL49aR2kjU8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                className="w-full h-60"
                src="https://www.youtube.com/embed/kL49aR2kjU8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <iframe
                className="w-full h-60"
                src="https://www.youtube.com/embed/kL49aR2kjU8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                className="w-full h-60"
                src="https://www.youtube.com/embed/kL49aR2kjU8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
            <SwiperSlide>
              <iframe
                className="w-full h-60"
                src="https://www.youtube.com/embed/kL49aR2kjU8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-between mt-4">
            <div
              className="cursor-pointer bg-[#2457AA] p-2 rounded-full z-10"
              onClick={goPrev}
            >
              <ArrowLeft size={20} color="white"/>
            </div>
            <div
              onClick={goNext}
              className="cursor-pointer bg-[#2457AA]  p-2 rounded-full"
            >
              <ArrowRight color="white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
