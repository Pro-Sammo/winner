"use client";

import React, { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });
const Card = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const fetchAsyncData = async () => {
    try {
      const response = await axios.get("/api/v1/admin/getitem");
      const result = response.data;
      setData(result);
    } catch (error) {
      toast("Data fetch failed");
    }
  };
  useEffect(() => {
    fetchAsyncData();
  }, []);
  return (
    <div className=" md:px-12 py-6 md:py-8 my-52  md:mx-20 lg:mx-40 xl:mx-80 mx-4 rounded-md flex justify-center items-center">
      <div className=" w-full py-6 rounded-lg px-10">
        <div className="w-full ">
        <div className={`${oswald.className} ${'text-center text-2xl md:text-3xl lg:text-4xl mb-14 lg:mb-20 '}`}>Product Store</div>
        </div>
        <div className="py-8 flex flex-wrap -ml-2 md:ml-0 xl:gap-16 lg:gap-10 md:gap-20 gap-8">
          {data?.map((item) => (
            <Link href={`/product/${item._id}`}>
              <CardItem
                public_id={item.images[0]?.publicId}
                size={item.size}
                shortDescription={item.shortDescription}
                title={item.model}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
