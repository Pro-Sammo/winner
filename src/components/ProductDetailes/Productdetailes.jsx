"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CldImage } from "next-cloudinary";
import CardItem from "../CardItem/CardItem";
import Link from "next/link";

const ProductDetails = ({ params }) => {
  const [item, setItem] = useState(null);
  const [id, setId] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true); // Loader for related products

  useEffect(() => {
    const fetchAsyncData = async () => {
      try {
        const response = await axios.get(
          `/api/v1/admin/getitembyid/${params.id}`
        );
        const result = response.data;
        setItem(result);
        setId(result?.images[0]?.publicId || "");
        setSearchCategory(result.category?.name || "");
      } catch (error) {
        toast.error("Failed to fetch product data");
      } finally {
        setLoading(false);
      }
    };

    fetchAsyncData();
  }, [params.id]);

  useEffect(() => {
    if (!searchCategory) return;

    const fetchAsyncCategory = async () => {
      try {
        const response = await axios.post(
          `/api/v1/admin/categorywiseitem?category=${searchCategory}`
        );
        setData(response.data);
      } catch (error) {
        toast.error("Failed to fetch related products");
      } finally {
        setRelatedLoading(false); // Done loading related products
      }
    };

    fetchAsyncCategory();
  }, [searchCategory]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full pt-24">
      <div className="gap-4 px-4 py-6 md:px-10 xl:px-20 flex flex-col lg:flex-row lg:justify-center">
        {/* Product Image Section */}
        <div className="w-full h-fit">
          <div className="px-4 py-4">
            {id && (
              <CldImage
                src={id}
                className="w-[35rem] h-[30rem] object-contain mx-auto"
                width={200}
                height={550}
                alt="product image"
              />
            )}
          </div>
          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-scroll w-full mt-4 md:overflow-visible md:grid md:grid-cols-4 lg:grid-cols-5 md:gap-4">
            {item?.images?.map((obj) => (
              <CldImage
                key={obj.publicId}
                src={obj.publicId}
                className="w-[4rem] h-[4rem] object-contain cursor-pointer bg-white md:w-[6rem] md:h-[6rem] lg:w-[8rem] lg:h-[8rem] mx-2 rounded-md transition-all duration-200 ease-in-out hover:scale-110"
                width={200}
                height={550}
                alt="product image"
                onClick={() => setId(obj.publicId)}
              />
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full h-fit">
          <div style={{ fontFamily: "Cabinet" }} className="w-full flex flex-col gap-2">
            <h1 className="font-semibold text-3xl md:text-4xl">{item?.model}</h1>
            <h2 className="font-medium text-xl">{item?.shortDescription}</h2>
            <p className="font-medium">{item?.longDescription}</p>

            {/* Product Specifications */}
            <div className="flex flex-col gap-1">
              {[ // Product Specifications Map
                { label: "Model", value: item?.model },
                { label: "Size", value: item?.size },
                { label: "Voltage", value: item?.voltage ? `${item.voltage}V` : "" },
                { label: "Power", value: item?.power ? `${item.power}KW` : "" },
                { label: "Temperature", value: item?.temperature ? `${item.temperature}°C` : "" },
                { label: "Time", value: item?.time ? `${item.time}s` : "" },
                { label: "Average Speed", value: item?.averageSpeed ? `${item.averageSpeed}rpm` : "" },
              ].map(
                (spec, index) =>
                  spec.value && (
                    <div key={index} className="w-72 flex justify-center items-center gap-1">
                      <span className="bg-[#54A2D5] w-1/2 text-center py-2 font-semibold">
                        {spec.label}
                      </span>
                      <span className="bg-gray-300 w-1/2 py-2 text-center">{spec.value}</span>
                    </div>
                  )
              )}
            </div>

            {/* Call Button */}
            <div className="flex flex-col md:flex-row gap-4 mt-3">
              <button className="px-6 py-3 rounded bg-[#54A2D5] hover:text-[#54A2D5] hover:bg-white border shadow-lg transition duration-250 text-white font-bold text-lg w-full md:w-auto">
                <a href="tel:+8801818261224" className="block text-center">Call For Price: +8801818-261224</a>
              </button>

              <button className="px-6 py-3 rounded bg-[#54A2D5] hover:text-[#54A2D5] hover:bg-white border shadow-lg transition duration-250 text-white font-bold text-lg w-full md:w-auto">
                <a href="tel:+8801919361224" className="block text-center">Call For Price: +8801919-361224</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="w-full">
        <div className="md:ml-20 ml-10 text-2xl font-bold">Related Products</div>
        {/* Show loading spinner until related products are fetched */}
        {relatedLoading ? (
          <div className="h-64 flex justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          <div className="min-h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16 py-8 px-10 md:px-20">
            {data.map((relatedItem) => {

              return (
                <Link key={relatedItem._id} href={`/product/${relatedItem._id}`}>
                  <CardItem
                    id={relatedItem._id}
                    public_id={relatedItem.images[0]?.publicId}
                    size={relatedItem.size}
                    shortDescription={relatedItem.shortDescription}
                    title={relatedItem.model}
                  />
                </Link>
              )


            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
