"use client";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { Roboto_Slab } from "next/font/google";

const RobotoSlabFont = Roboto_Slab({ weight: "400",
  subsets:["latin"]
 });

const Hero = () => {
  return (
    <>
      <div
        id="bgImage"
        className="h-screen w-full flex gap-8 flex-col md:flex-row  md:items-center justify-center md:justify-between  relative"
      >
        <div className="w-full h-full bg-[#b9d8edba]">
          <div className="flex flex-col gap-8 justify-center items-center h-full -mt-10">
            <motion.div
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              style={{ fontFamily: "General" }}
              className=" font-bold tracking-wider text-4xl md:text-5xl text-white"
            >
              Welcome To
            </motion.div>
            <motion.h1
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{ duration: 1, delay: 1 }}
              style={{ fontFamily: "General" }}
              id="textShadow"
              className=" opacity-0 text-4xl  lg:text-6xl tracking-wider text-[#F3903E]"
            >
              WINNER MACHINERIES
            </motion.h1>
            <motion.div
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{ duration: 1, delay: 3 }}
            >
              <button
                className={`${RobotoSlabFont.className} text-white border-[#4F8DD2] bg-[#4F8DD2] hover:bg-white hover:text-[#73A5DB] font-bold duration-250 px-12 py-3 outline-none border shadow-xl rounded-full tracking-wider transition-all ease-in-out`}
              >
                Visit
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            y: -20,
            opacity: 0,
            rotate: 90,
          }}
          transition={{ duration: 1, delay: 4 }}
          className="text-white absolute bottom-24 right-1 rotate-90 tracking-wider flex items-center gap-1"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ x: 10 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            <MoveRight color="white" size={18} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
