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
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });

const Carousel = () => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className=" md:px-12 py-6 md:py-8 my-52  md:mx-20 lg:mx-40 xl:mx-80 mx-4 rounded-md flex justify-center items-center">
      <div className="w-full px-11">
        <div className="w-full ">
        <div className={`${oswald.className} ${'text-center text-2xl md:text-3xl lg:text-4xl mb-14 lg:mb-20 '}`}>Videos</div>
        </div>
        <div className="h-full mb-10 w-full">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            loop
            breakpoints={{
              380: {
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
            <ArrowLeft
              color="#68ACD9"
              className="cursor-pointer z-20"
              size={30}
              onClick={goPrev}
            />

            <ArrowRight
              color="#68ACD9"
              className="cursor-pointer"
              size={30}
              onClick={goNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
