import React from "react";
import Image from "next/image";
import sliderImage01 from "../../../public/001.jpg";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["400"],
});

const Page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full">
        <div className=" w-full flex-1 bg-[#68ACD9] flex justify-center items-center flex-col relative">
          <div className="font-bold text-3xl text-white">About Us</div>
          <Image
            src={sliderImage01}
            className="absolute md:-bottom-40 -bottom-28 w-[20rem] md:w-[30rem]"
          />
        </div>
        <div className="flex-1 text-center w-full flex flex-col justify-center items-center relative">
          <div
            className={`${
              inter.className
            } ${"md:w-[30rem] w-[26rem] text-center font-semibold text-sm md:text-lg text-[#68ACD9] "}`}
          >
          <h1 className="text-2xl font-bold">Address:</h1>
           <p> Shop no. 192. Misco Super Market, 4 Darussalam Road,<br /> Mirpur-1 ,
            Dhaka-1216, Bangladesh</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
