"use client"

import React from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";

const CardItem = ({
  public_id,
  title,
  description,
  size,
}:any) => {
  return (
    <div className=" w-64 md:w-52 lg:w-52 xl:w-64 border rounded hover:shadow-md duration-200 cursor-pointer">
      <div>
        <CldImage src={public_id} width="960" height="600" alt="Image" />
      </div>
      <div className="text-center py-6">
        <div>
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <p>Size:{size}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
