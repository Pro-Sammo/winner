"use client";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";
import axios from "axios";
import { CldImage } from "next-cloudinary";
import { toast } from "sonner";

const Page = ({ params }: { params: { slug: string } }) => {
  const [resource, setResource] = useState();
  console.log(resource);
  const id = params.id;

  const handleUploadImage = async () => {
    try {
      const response = await axios.post(
        `/api/v1/admin/uploadimage/${id}`,
        {
          public_id: resource,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResource("");
      const result = response.data
      toast(result?.message)
    } catch (error) {
      toast(error?.response?.data?.message ?? "An error occurred");

    }
  };

  return (
    <>
      <div className="w-full h-[90vh] flex justify-center flex-col items-center">
        {resource && (
          <CldImage
          className="px-4 object-contain"
            width="300"
            height="300"
            src={resource}
            sizes="100vw"
            alt="Winner Machineries Images"
          />
        )}
        {!resource && (
          <CldUploadWidget
            uploadPreset="sammo_cloudinary"
            onSuccess={(result, { widget }) => {
              setResource(result?.info?.public_id);
            }}
          >
            {({ open }) => {
              return (
                <button
                  className="px-6 bg-blue-300 w-fit mx-auto py-3 rounded-md"
                  onClick={() => open()}
                >
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>
        )}
        {resource && (
          <button className="px-6 mt-6 bg-yellow-300 w-fit mx-auto py-3 rounded-md" onClick={handleUploadImage}>
            submit
          </button>
        )}
      </div>
    </>
  );
};

export default Page;
