"use client"

import React from "react";
import { CldImage } from "next-cloudinary";

const CardItem = ({
  public_id,
  title,
  shortDescription,
}:any) => {
  console.log(shortDescription)
  return (
   <div className="group">
   <div className="w-80 min-h-fit  pb-6 border border-orange-400 duration-250 group-hover:border-blue-400 shadow-xl rounded-2xl cursor-pointer flex flex-col justify-center items-center">
    <div className="py-8">
      <h1 style={{fontFamily:"Cabinet"}} className="text-center text-gray-700 font-medium text-xl">{title}</h1>
      <p style={{fontFamily:"GeneralSans"}} className="text-center text-slate-400 text-sm">{shortDescription}</p>
    </div>
    <div className="flex justify-center">
      <CldImage src={public_id} className="w-5/6" width={200} height={550} alt="product image"/>
    </div>
    <div className="w-[70%] h-[1px] mx-auto my-4 bg-gray-200"></div>
    <button className="font-medium mt-2 px-8 py-3 rounded-full border duration-250 group-hover:border-blue-400 border-orange-400 bg-white">BUY NOW</button>
   </div>
   </div>
  );
};

export default CardItem;
