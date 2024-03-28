"use client"

import React, { useEffect, useState } from "react";
import CardItem from "../CardItem/CardItem";
import axios from 'axios'
import { toast } from "sonner";
import Link from "next/link";

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
    <div className="w-full max-h-fit flex justify-center pb-6 md:pb-10">
      <div className="md:w-5/6 py-6 rounded-lg px-11">
        <div>
          <h1 style={{fontFamily:"Cabinet"}} className="font-medium text-2xl pb-1">Store</h1>
          <div className="h-[1px] w-full bg-blue-500"></div>
        </div>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-16 lg:gap-10 md:gap-20 gap-8">
        {data?.map((item) => (
            <Link href={`/admin/uploadImage/${item._id}`}>
            <CardItem
              public_id={item.images[0]?.publicId}
              size={item.size}
              shortDesctiption={item.shortDesctiption}
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
