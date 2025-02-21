import React from "react";
import { MapPinIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Logo from "../../../public/logo.png";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
        {/* Logo Section */}
        <div className="flex justify-center sm:justify-start object-contain">
          <Image src={Logo} width={300} alt="Company Logo" className="object-contain" />
        </div>



        {/* Address Section */}
        <div className="flex items-center gap-4 ">
          <div className="flex-1">
            <MapPinIcon size={40} className="text-orange-500 " />
          </div>
          <div>
            <h3 className="font-semibold text-lg flex-1">Factory</h3>
            <p className="text-gray-600 text-sm"> Kha/97, 1-E, North Bishil, Diyabari, Beribadh Road, Mirpur-1, Dhaka-1216.</p>
          </div>
        </div>
        

        {/* Mail Section */}
        <div className="flex items-center gap-4">
          <Mail size={40} className="text-orange-500" />
          <div>
            <h3 className="font-semibold text-lg">Email Us</h3>
            <p className="text-gray-600 text-sm">
              <a href="mailto:winnermachineries@gmail.com" className="hover:underline">
                winnermachineries@gmail.com
              </a>
            </p>
          </div>
        </div>


        {/* Phone Section */}
        <div className="flex items-center gap-4 ">
          <Phone size={40} className="text-orange-500" />
          <div>
            <h3 className="font-semibold text-lg">Phone Us</h3>
            <p className="text-gray-600 text-sm">+8801818-261224</p>
            <p className="text-gray-600 text-sm">+8801919-361224</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
