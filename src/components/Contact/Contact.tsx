import React from "react";
import { MapPinIcon } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import Logo from "../../../public/logo.png";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="min-h-fit md:py-8 py-8 w-full bg-[#F3F3F3] flex flex-col md:flex-row md:justify-center gap-10 md:gap-20 pl-4 md:pl-0 md:items-center">
        <div>
          <div className="h-24 flex items-center">
        <Image src={Logo} width={400}  alt="logo"/>
        </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <MapPinIcon color="#FFA500" />
            <div>
              <p className="font-bold text-lg">Out Main Branch</p>
              <p>Mirpur-1, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Mail color="#FFA500" />
            <div>
              <p className="font-bold text-lg">Email Us</p>
              <p><a href="mailTo:winnermachineries@gmail.com">winnermachineries@gmail.com</a></p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Phone color="#FFA500" />
            <div>
              <p className="font-bold text-lg">Phone Us</p>
              <p>+8801818261224</p>
              <p>+8801918261224</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
