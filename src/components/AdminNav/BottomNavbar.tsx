"use client";

import React from "react";
import { Upload, Trash2, BarChart2, Eye , ClipboardList } from "lucide-react";
import Link from "next/link";

const BottomNavbar = () => {
  return (
    <>
      <div className=" h-12 w-full bg-blue-200 bottom-0 fixed flex justify-evenly items-center">
        <Link href={"/admin"}>
          <div className="flex flex-col justify-center items-center">
            <BarChart2 size={20} />
            <p className="font-light text-sm">Dashboard</p>
          </div>
        </Link>
        <Link href={"/admin/upload"}>
          <div className="flex flex-col justify-center items-center">
            <Upload size={20} />
            <p className="font-light text-sm">Create Product</p>
          </div>
        </Link>
        <Link href={"/admin/createCategory"}>
        <div className="flex flex-col justify-center items-center">
          <ClipboardList size={20} />
          <p className="font-light text-sm">Create Category</p>
        </div>
        </Link>
        <div className="flex flex-col justify-center items-center">
          <Trash2 size={20} />
          <p className="font-light text-sm">Delete</p>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
