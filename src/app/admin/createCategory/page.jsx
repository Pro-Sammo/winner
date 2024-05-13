import dynamic from "next/dynamic";
import React from "react";

const Categorysection = dynamic(()=> import('../../../components/CreateCategory/CreateCategory'))


const page = () => {
  return <>
    <Categorysection/>
  </>;
};

export default page;
