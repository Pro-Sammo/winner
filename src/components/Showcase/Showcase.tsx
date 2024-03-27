import React from "react";
import Image from "next/image";
import Image5 from "../../../public/image5.jpg";

const Showcase = () => {
  return (
    <div className="w-full min-h-fit flex justify-center mb-12">
      <div className="w-full flex flex-col md:flex-row justify-center gap-8 items-center px-4">
        <div className="shadow hover:shadow-xl duration-300">
          <Image src={Image5} alt="showcase Image" />
        </div>
        <div className="shadow hover:shadow-xl duration-300">
          <Image src={Image5} alt="showcase Image" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
