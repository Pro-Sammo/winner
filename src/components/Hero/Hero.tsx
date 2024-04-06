"use client";
import { MoveRight, Search } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="h-screen w-full flex gap-8 flex-col md:flex-row bg-black md:items-center justify-center md:justify-between px-14 relative">
        <div className="flex flex-col gap-8">
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
          <motion.div
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 1, delay: 1 }}
            style={{ fontFamily: "General" }}
            className="bg-gradient-to-r opacity-0 text-4xl lg:text-6xl tracking-wider from-orange-500 to-blue-600 text-transparent bg-clip-text"
          >
            WINNER MACHINERIES
          </motion.div>
          <motion.div
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 1, delay: 2 }}
            className="relative w-4/5"
          >
            <input
              type="text"
              className="w-full py-2 outline-none px-2 text-white rounded-full border border-white bg-black"
            />
            <Search className="absolute top-2 right-4" color="white" />
          </motion.div>
          <motion.div
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 1, delay: 3 }}
          >
            <button className="text-white bg-gradient-to-r from-orange-500 to-blue-600 hover:bg-gradient-to-l duration-250 px-12 py-3 outline-none border rounded-full tracking-wider transition-all ease-in-out">
              Visit
            </button>
          </motion.div>
        </div>
        <div className="w-full justify-end md:visible hidden">
          <p
            style={{ fontFamily: "Cabinet" }}
            className="text-white  md:w-2/4 text-center md:tracking-widest tracking-wide"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            laudantium ea facilis molestiae, esse harum nobis iusto saepe odit
            quas!
          </p>
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
            animate={{ x: 10}} 
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

{
  /*  */
}

{
  /* <div style={{}} className="md:mb-10 md:px-24 px-4 w-full h-screen md:flex-row  flex md:justify-between justify-center  md:gap-0 gap-14  items-center  flex-col">
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
          <button style={{fontFamily:"GeneralSans"}} className="px-10 py-3 bg-orange-400 shadow-xl shadow-orange-300 text-white rounded-full cursor-pointer border-1 border-orange-400 duration-250 hover:border-orange-400 hover:bg-white hover:text-orange-400 ">visit</button>
        </div>
        <div className="md:w-3/4 md:-mr-20 w-full">
          <Image src={Press} className="object-contain w-full filter  drop-shadow-2xl" alt="vector" />
        </div>
      </div> */
}
