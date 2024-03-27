import React from "react";
import { MapPinIcon } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import Logo from "../../../public/logo.svg";
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
              <p>Mirpur-10, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Mail color="#FFA500" />
            <div>
              <p className="font-bold text-lg">Email Us</p>
              <p>info@winner.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Phone color="#FFA500" />
            <div>
              <p className="font-bold text-lg">Phone Us</p>
              <p>+8801745362847</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
