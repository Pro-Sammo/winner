"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import CardItem from "@/components/CardItem/CardItem";
import Link from "next/link";

const Dashboad = () => {
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
      <div className="md:w-4/6 py-6 rounded-lg ">
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.map((item) => (
            <Link href={`/admin/uploadImage/${item._id}`}>
            <CardItem
              public_id={item.images[0]?.publicId}
              size={item.size}
              description={item.shortDesctiption}
              title={item.model}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboad;
