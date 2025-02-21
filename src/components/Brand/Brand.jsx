"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Typography, Row, Col } from "antd";
import { Oswald } from "next/font/google";

// Import brand images
import AlifGroup from "../../../public/brand/Alif Group.jpg";
import Ananta from "../../../public/brand/Ananta.jpg";
import DBL from "../../../public/brand/DBL-Group.jpg";
import Dekko from "../../../public/brand/Dekko Isho.jpg";
import DFL from "../../../public/brand/DFL.jpg";
import IDS from "../../../public/brand/IDS Group.jpg";
import Karooni from "../../../public/brand/Karooni.jpg";
import Mahmud from "../../../public/brand/Mahmud Group.jpg";
import Pakiza from "../../../public/brand/Pakiza Group.jpg";

const { Title } = Typography;
const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });

// Brand logos array
const brands = [
  AlifGroup,
  Ananta,
  DBL,
  Dekko,
  DFL,
  IDS,
  Karooni,
  Mahmud,
  Pakiza,
];

const Brand = () => {
  return (
    <div className="md:px-12 py-6 md:py-8 my-20 md:mx-20 lg:mx-40 xl:mx-80 mx-4 rounded-md flex flex-col justify-center items-center">
      {/* Title */}
      <Title level={2} className={`${oswald.className} text-center mb-14`}>
        Trusted by 200+ Forward Thinking Companies
      </Title>

      <Row gutter={[16, 16]} justify="center" align="middle" style={{ width: "100%" }}>
        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView="auto"
            loop
            speed={3000} // Smooth animation speed
            autoplay={{
              delay: 0, // No delay for seamless effect
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              300: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}

          >
            {[...brands, ...brands].map((brand, index) => (
              <SwiperSlide key={index} className="px-4 py-4">
              <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 mx-2 my-2">
                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="object-contain h-16 md:h-16 lg:h-16 transition-opacity  duration-250"
                />
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};

export default Brand;
