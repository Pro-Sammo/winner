"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

const CardItem = ({ id, public_id, title, shortDescription }: any) => {
  return (
    <motion.div
      id={id}
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="group"
    >
      <div className="w-80 min-h-fit bg-[#73A5DB]  pb-6 border  duration-250  hover:shadow-md rounded-lg cursor-pointer flex flex-col justify-center items-center">
        <div className="py-8">
          <h1
            style={{ fontFamily: "Cabinet" }}
            className="text-center text-white font-bold text-xl "
          >
            {title}
          </h1>
          <p
            style={{ fontFamily: "GeneralSans" }}
            className="text-center text-white text-sm"
          >
            {shortDescription}
          </p>
        </div>
        <div className="flex justify-center">
          <CldImage
            src={public_id}
            className="w-5/6"
            width={200}
            height={550}
            alt="product image"
          />
        </div>
        <div className="w-[70%] h-[1px] mx-auto my-4 bg-gray-200"></div>
        <button className="font-medium mt-2 px-8 py-3 rounded-full border duration-250 group-hover:border-[#2072A9] border-gray-200 bg-white">
          visit
        </button>
      </div>
    </motion.div>
  );
};

export default CardItem;
