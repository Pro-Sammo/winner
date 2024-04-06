"use client";

import React, { useEffect } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Trash } from "lucide-react";
import axios from 'axios'

const AdminCardItem = ({
  fetchAsyncData,
  public_id,
  title,
  shortDescription,
  product_id,
}) => {


  const itemDeleteHandler = async () => {
    try {
      const res = await axios.delete(`/api/v1/admin/deleteitem/${product_id}`);
      const result = res.data;
      console.log(result)
      toast("Item Deleted Successfully");
      fetchAsyncData();
    } catch (error) {
      console.log(error)
      toast(error?.response?.data?.message);
    }
  };


  return (
    <div className="group ">
      <div className="w-80 relative min-h-fit  pb-6 border border-orange-400 duration-250 group-hover:border-blue-400 shadow-xl rounded-2xl flex flex-col justify-center items-center">
        <Link href={`/product/${product_id}`}>
          <ExternalLink className="absolute right-3 top-3 cursor-pointer z-50" />
        </Link>

        <Trash
          className="absolute left-3 top-3 cursor-pointer z-50"
          onClick={itemDeleteHandler}
        />

        <div className="py-8">
          <h1
            style={{ fontFamily: "Cabinet" }}
            className="text-center text-gray-700 font-medium text-xl"
          >
            {title}
          </h1>
          <p
            style={{ fontFamily: "GeneralSans" }}
            className="text-center text-slate-400 text-sm"
          >
            {shortDescription}
          </p>
        </div>
        <div className="flex justify-center">
          {!public_id ? (
            <>
              <div className="h-36 text-center pt-14 font-bold text-lg font-serif">
                Empty Image
              </div>
            </>
          ) : (
            <CldImage
              src={public_id}
              className="w-5/6"
              width={200}
              height={550}
              alt="product image"
            />
          )}
        </div>
        <div className="w-[70%] h-[1px] mx-auto my-4 bg-gray-200"></div>
        <Link href={`/admin/uploadImage/${product_id}`}>
          <button className="font-medium mt-2 px-8 py-3 rounded-full border duration-250 group-hover:border-blue-400 border-orange-400 bg-white">
            Upload Image
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminCardItem;
