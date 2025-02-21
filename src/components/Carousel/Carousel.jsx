"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { Oswald } from "next/font/google";

const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });

const Carousel = () => {
  const swiperRef = useRef(null);
  const [videos, setVideos] = useState([]);

  // Fetch videos from API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.post("/api/v1/admin/getvideo", {});
        setVideos(response.data || []);
      } catch (error) {
        console.error(error);
        toast(error?.response?.data?.message || "Failed to fetch videos");
      }
    };

    fetchVideos();
  }, []);

  const goNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="md:px-12 md:py-8  md:mx-20 lg:mx-40 xl:mx-80 mx-4 rounded-md flex justify-center items-center">
      <div className="w-full px-11">
        <div className="w-full">
          <div className={`${oswald.className} text-center text-2xl md:text-3xl lg:text-4xl mb-14 lg:mb-20`}>
            Videos
          </div>
        </div>

        <div className="h-full mb-10 w-full">
          {videos.length > 0 ? (
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, A11y]}
              spaceBetween={10}
              slidesPerView={3}
              loop
              autoplay={{ delay: 3000 }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <iframe
                    className="w-full h-60"
                    src={video.url}
                    title={`YouTube video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500">No videos available.</p>
          )}

          <div className="flex justify-between mt-4">
            <ArrowLeft color="#68ACD9" className="cursor-pointer z-20" size={30} onClick={goPrev} />
            <ArrowRight color="#68ACD9" className="cursor-pointer" size={30} onClick={goNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
