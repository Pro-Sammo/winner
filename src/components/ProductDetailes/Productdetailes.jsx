"use client";


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CldImage } from "next-cloudinary";


const Productdetailes = ({ params }) => {
  const [item, setItem] = useState();
  const [id, setId] = useState("");
  const fetchAsyncData = async () => {
    try {
      const response = await axios.get(
        `/api/v1/admin/getitembyid/${params.id}`
      );
      const result = response.data;
      setItem(result);
      setId(result?.images[0]?.publicId);
    } catch (error) {
      toast("Data fetch failed");
    }
  };
  useEffect(() => {
    fetchAsyncData();
  }, []);

  return (
      <div
        className="min-h-screen bg-cover bg-center bg-transparent w-full gap-4 px-10 py-11 md:px-20 xl:px-48 flex flex-col lg:flex-row lg:justify-center "
      >
        <div className="w-full h-fit">
          <div className="px-8 py-8 ">
            <CldImage
              src={id}
              className="w-[35rem] h-[30rem]  object-contain"
              width={200}
              height={550}
              alt="product image"
            />
          </div>
          <div className="flex gap-2  overflow-x-scroll w-full mt-4">
            {item?.images.map((obj) => {
              return (
                <CldImage
                  src={obj.publicId}
                  className=" w-[6rem] h-[6rem] object-contain cursor-pointer bg-white"
                  width={200}
                  height={550}
                  alt="product image"
                  onClick={() => setId(obj.publicId)}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full h-fit">
          <div
            style={{ fontFamily: "Cabinet" }}
            className="w-full flex flex-col gap-2"
          >
            <div>
              <h1 className="font-semibold text-3xl md:text-4xl">
                {item?.model}
              </h1>
            </div>
            <div>
              <h2 className="font-medium text-xl">{item?.shortDescription}</h2>
            </div>
            <div>
              <p className="font-medium">{item?.longDescription}</p>
            </div>
            <div className="flex flex-col gap-1">
              <div>
                {item?.model && (
                  <div>
                    <div className="w-72 flex flex-row justify-center items-center gap-1">
                      <span className=" bg-orange-300 w-1/2 text-center py-2 font-semibold">
                        Model
                      </span>
                      <span className=" bg-blue-400 w-1/2 py-2 text-center ">
                        {item?.model}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {item?.size && (
                  <div>
                    <div className="w-72 flex flex-row justify-center items-center gap-1">
                      <span className=" bg-orange-300 w-1/2 text-center py-2 font-semibold">
                        Size
                      </span>
                      <span className=" bg-blue-400 w-1/2 py-2 text-center">
                        {item?.size}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {item?.voltage && (
                  <div>
                    <div className="w-72 flex flex-row justify-center items-center gap-1">
                      <span className=" bg-orange-300 w-1/2 text-center py-2 font-semibold">
                        Voltage
                      </span>
                      <span className=" bg-blue-400 w-1/2 py-2 text-center">
                        {item?.voltage}V
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {item?.power && (
                  <div>
                    <div className="w-72 flex flex-row justify-center items-center gap-1">
                      <span className=" bg-orange-300 w-1/2 text-center py-2 font-semibold">
                        Power
                      </span>
                      <span className=" bg-blue-400 w-1/2 py-2 text-center">
                        {item?.power}KW
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {item?.temperature && (
                  <div>
                    <div className="w-72 flex flex-row justify-center items-center gap-1">
                      <span className=" bg-orange-300 w-1/2 text-center py-2 font-semibold">
                        Temperature
                      </span>
                      <span className=" bg-blue-400 w-1/2 py-2 text-center">
                        {item?.temperature}°C
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {item?.time && (
                  <div>
                    <div className="w-72 flex flex-row justify-center items-center gap-1">
                      <span className=" bg-orange-300 w-1/2 text-center py-2 font-semibold">
                        Time
                      </span>
                      <span className=" bg-blue-400 w-1/2 py-2 text-center">
                        {item?.time}s
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {item?.averageSpeed && (
                  <div>
                    <div className="w-72 flex flex-row justify-center items-center gap-1">
                      <span className=" bg-orange-300 w-1/2 text-center py-2 font-semibold">
                        Average Speed
                      </span>
                      <span className=" bg-blue-400 w-1/2 py-2 text-center">
                        {item?.averageSpeed}rpm
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <button className="px-4 py-2 rounded bg-orange-400 mt-3 hover:text-orange-400 hover:bg-white border shadow-lg shadow-orange-200 hover:border-orange-400 duration-250 text-white font-bold text-lg">
                <a href="tel:+8801818261224">Call For Price</a>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Productdetailes;
