"use client"

import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div className=" min-h-screen w-full relative flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
