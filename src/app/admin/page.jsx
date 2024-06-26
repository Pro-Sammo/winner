"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import AdminCardItem from "@/components/CardItem/AdminCardItem";

const Dashboad = () => {
  const [data, setData] = useState([]);

  const fetchAsyncData = async () => {
    try {
      const response = await axios.post("/api/v1/admin/getitem", {});
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
    <div className="w-full min-h-screen flex justify-center pb-6 md:pb-10 pt-32">
      <div className="md:w-4/6 py-6 rounded-lg ">
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {data?.map((item) => (
            <AdminCardItem
              fetchAsyncData={fetchAsyncData}
              product_id={item._id}
              public_id={item.images[0]?.publicId}
              size={item.size}
              shortDescription={item.shortDescription}
              title={item.model}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboad;
