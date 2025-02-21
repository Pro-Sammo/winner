"use client";

import React from "react";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });
import Image from "next/image";
import combinedImage from "../../../public/combinedImage.jpg";
import fbImage1 from "../../../public/fbImage1.jpg";
import fbImage2 from "../../../public/fbImage2.jpg";
import fbImage3 from "../../../public/fbImage3.jpg";
import fbImage4 from "../../../public/fbImage4.jpg";

const Services = () => {
  return (
    <>
      <motion.div className="  md:px-12 py-6 md:py-8 my-5  md:mx-20 lg:mx-40 xl:mx-80 mx-4 rounded-md flex flex-col justify-center items-center">
        <div
          className={`${
            oswald.className
          } ${"text-center text-2xl md:text-3xl lg:text-4xl mb-14 lg:mb-20"}`}
        >
          Gallery
        </div>
        <div className=" h-fit w-full grid grid-cols-4 gap-3">
          <Image src={combinedImage}  className="w-full col-span-4"/>
          <Image src={fbImage1}  className="w-full col-span-2 md:col-span-1"/>
          <Image src={fbImage2}  className="w-full col-span-2 md:col-span-1"/>
          <Image src={fbImage3}  className="w-full col-span-2 md:col-span-1"/>
          <Image src={fbImage4}  className="w-full col-span-2 md:col-span-1"/>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
