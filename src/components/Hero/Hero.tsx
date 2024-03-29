"use client";

import Press from "../../../public/press.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className="md:mb-10 md:px-24 px-4 w-full h-screen md:flex-row  flex md:justify-between justify-center  md:gap-0 gap-14  items-center  flex-col">
        <div className="flex flex-col items-start gap-5  md:gap-10 md:w-2/4 md:mt-12 ">
          <div
            className="text-3xl text-blue-400 -mt-24 md:text-4xl xl:text-5xl font-bold "
            style={{ fontFamily: "GeneralSans" }}
          >
            Unleash Precision with Our Machinery
          </div>
          <p style={{ fontFamily: "Cabinet" }} className="text-slate-600 md:w-4/5">
            Experience the difference with our state-of-the-art technology,
            designed to deliver flawless results with every press. From garment
            decoration to promotional products, sublimation to heat transfer
            vinyl, our machinery offers versatility and reliability to bring
            your creative vision to life.
          </p>
          <button className="px-10 py-3 bg-orange-400 shadow-xl shadow-orange-300 text-white rounded-full cursor-pointer border-1 border-orange-400 duration-250 hover:border-orange-400 hover:bg-white hover:text-orange-400 ">visit</button>
        </div>
        <div className="md:w-3/4 md:-mr-20 w-full">
          <Image src={Press} className="object-contain w-full filter  drop-shadow-2xl" alt="vector" />
        </div>
      </div>
    </>
  );
};

export default Hero;
