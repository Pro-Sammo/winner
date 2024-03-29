"use client"

import React from "react";

const Loading = () => {
  return (
    <div className=" min-h-screen w-full relative flex justify-center items-center">
      <div className="loader relative inset-0">
        <div className="absolute h-12 w-12 rounded-full animate"></div>
      </div>
    </div>
  );
};

export default Loading;
