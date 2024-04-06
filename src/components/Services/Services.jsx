"use client";

import React from "react";
import { Flag } from "lucide-react";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });

const Services = () => {
  return (
    <>
      <motion.div className="  md:px-12 py-6 md:py-8 my-52  md:mx-20 lg:mx-40 xl:mx-80 mx-4 rounded-md flex flex-col justify-center items-center">
        <div
          className={`${
            oswald.className
          } ${"text-center text-2xl md:text-3xl lg:text-4xl mb-14 lg:mb-20 "}`}
        >
          Servies
        </div>
        <div className=" h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <motion.div
            initial={{
              y: 30,
              opacity: 0.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="h-[23rem] w-[16rem] duration-1000 transition-all hover:bg-gradient-to-tr hover:from-indigo-400 hover:to-cyan-400  bg-white  rounded-lg flex flex-col items-start pl-8  justify-center gap-4"
          >
            <div className="pb-10">
              <div className="p-4 bg-green-500 rounded-full h-full">
                <Flag color="white" size={18} />
              </div>
            </div>
            <div
              style={{ fontFamily: "GeneralSans" }}
              className="font-medium text-xl"
            >
              Automated Machine
            </div>
            <div
              className="font-light text-sm w-4/5"
              style={{ fontFamily: "Cabinet" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, quaerat expedita.
            </div>
            <div className="px-6 py-2 border rounded-full border-gray-300 font-semibold duration-250 hover:border-white cursor-pointer text-gray-500 hover:text-black">
              View more
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 30,
              opacity: 0.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="h-[23rem]  duration-1000 transition-all hover:bg-gradient-to-tr hover:from-indigo-400 hover:to-cyan-400 w-[16rem] bg-white rounded-lg flex flex-col items-start pl-8  justify-center gap-4"
          >
            <div className="pb-10">
              <div className="p-4 bg-pink-500 rounded-full h-full">
                <Flag color="white" size={18} />
              </div>
            </div>
            <div
              style={{ fontFamily: "GeneralSans" }}
              className="font-medium text-xl"
            >
              Automated Machine
            </div>
            <div
              className="font-light text-sm w-4/5"
              style={{ fontFamily: "Cabinet" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, quaerat expedita.
            </div>
            <div className="px-6 py-2 border rounded-full border-gray-300 font-semibold duration-250 hover:border-white cursor-pointer text-gray-500 hover:text-black">
              View more
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 30,
              opacity: 0.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="h-[23rem] w-[16rem]  duration-1000 transition-all hover:bg-gradient-to-tr hover:from-indigo-400 hover:to-cyan-400 bg-white rounded-lg flex flex-col items-start pl-8  justify-center gap-4"
          >
            <div className="pb-10">
              <div className="p-4 bg-blue-500 rounded-full h-full">
                <Flag color="white" size={18} />
              </div>
            </div>
            <div
              style={{ fontFamily: "GeneralSans" }}
              className="font-medium text-xl"
            >
              Automated Machine
            </div>
            <div
              className="font-light text-sm w-4/5"
              style={{ fontFamily: "Cabinet" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, quaerat expedita.
            </div>
            <div className="px-6 py-2 border rounded-full border-gray-300 font-semibold duration-250 hover:border-white cursor-pointer text-gray-500 hover:text-black">
              View more
            </div>
          </motion.div>
          <motion.div
            initial={{
              y: 30,
              opacity: 0.5,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="h-[23rem] w-[16rem]  duration-1000 transition-all hover:bg-gradient-to-tr hover:from-indigo-400 hover:to-cyan-400 bg-white rounded-lg flex flex-col items-start pl-8  justify-center gap-4"
          >
            <div className="pb-10">
              <div className="p-4 bg-purple-500 rounded-full h-full">
                <Flag color="white" size={18} />
              </div>
            </div>
            <div
              style={{ fontFamily: "GeneralSans" }}
              className="font-medium text-xl"
            >
              Automated Machine
            </div>
            <div
              className="font-light text-sm w-4/5"
              style={{ fontFamily: "Cabinet" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, quaerat expedita.
            </div>
            <div className="px-6 py-2 border rounded-full border-gray-300 font-semibold duration-250 hover:border-white cursor-pointer text-gray-500 hover:text-black">
              View more
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
