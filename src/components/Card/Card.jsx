"use client";

import React, { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import { toast } from "sonner";
import Link from "next/link";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });
import axios from "axios";


const Card = () => {
  const [data, setData] = useState([]);

  const fetchAsyncData = async () => {
    try {
      const response = await axios.post("/api/v1/admin/getitem");
      const result = await response.data;
      setData(result);
    } catch (error) {
      toast("Data fetch failed");
    }
  };
  useEffect(() => {
    fetchAsyncData();
  }, []);
  return (
    <div className="  py-6 md:py-8 my-52  mx-auto">
      <div className=" w-full py-6 rounded-lg px-10">
        <div className="w-full ">
          <div
            className={`${
              oswald.className
            } ${"text-center text-2xl md:text-3xl lg:text-4xl mb-14 lg:mb-20 "}`}
          >
            Product Store
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16 lg:gap-10 md:flex-row  gap-8 py-8 mx-auto">
          {data?.map((item) => (
            <Link href={`/product/${item._id}`} id={item._id}>
              <CardItem
                id={item._id}
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
