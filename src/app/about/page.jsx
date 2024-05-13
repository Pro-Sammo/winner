import React from "react";
import Image from "next/image";
import AboutImage from "../../../public/aboutimage.jpg";


const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col w-full">
        <div className=" w-full flex-1 bg-[#68ACD9] flex justify-center items-center flex-col relative">
          <div className="font-bold text-3xl text-white">About Us</div>
          <Image
            src={AboutImage}
            className="absolute md:-bottom-40 -bottom-28 w-[20rem] md:w-[30rem]"
          />
        </div>
        <div className="flex-1 text-center w-full flex flex-col justify-center items-center relative">
          <div className=" md:w-[30rem] w-[26rem] text-center font-semibold font-mono text-[#68ACD9]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam iusto
            ipsam illum, deleniti repudiandae a dignissimos autem animi tenetur
            ullam! Veritatis vero dolorum rem itaque magnam repellat dolorem
            numquam amet repellendus cum.
          </div>
          
        </div>
      </div>
    </>
  );
};

export default page;
