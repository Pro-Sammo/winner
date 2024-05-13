"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import CardItem from "@/components/CardItem/CardItem";
import Link from "next/link";

const Page = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [searchCategory,setSearchCategory] = useState("")



  const fetchAsyncData = async () => {
    try {
      const response = await axios.post(`/api/v1/admin/product?category=${searchCategory}`);
      const result = await response.data;
      setData(result);
    } catch (error) {
      toast("Product fetch failed");
    }
  };

  

  const getAllCategory = async () => {
    try {
      const res = await axios.post("/api/v1/admin/getcategory");
      const result = res.data;
      setCategory(result);
    } catch (error) {
      toast("Category fetch failed");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  useEffect(() => {
    fetchAsyncData();
  }, [searchCategory]);

  return (
    <div className=" min-h-screen flex flex-col pt-20  px-8">
      <div className="flex gap-3 justify-center flex-wrap mx-auto">
        {category?.map((ctg) => {
          return (
            <>
              <div className="min-w-fit bg-[#8BBEDF] p-2 rounded text-white select-none" onClick={()=>setSearchCategory(ctg.name)}>{ctg?.name}</div>
            </>
          );
        })}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:gap-16 lg:gap-10 md:flex-row  gap-8 py-8 mx-auto">
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
  );
};

export default Page;
