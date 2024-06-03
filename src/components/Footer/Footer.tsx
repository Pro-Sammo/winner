import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="h-fit py-9 w-full bg-[#02122b] flex md:flex-row flex-col pl-6 xl:gap-20 justify-center items-start gap-8 text-white">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 bg-yellow-300"></div>
            <div className="font-bold text-xl ">Out Location</div>
          </div>
          <p className="w-60">
            Shop no. 192. Misco Super Market, 4 Darussalam Road,Mirpur-1 ,
            Dhaka-1216, Bangladesh
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 bg-yellow-300"></div>
            <div className="font-bold text-xl ">Out Company</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <ArrowRight size={20} />
              <div>About Us</div>
            </div>
            <div className="flex gap-2 items-center">
              <ArrowRight size={20} />
              <div>Videos</div>
            </div>
            <div className="flex gap-2 items-center">
              <ArrowRight size={20} />
              <div>Contact Us</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 bg-yellow-300"></div>
            <h1 className="font-bold text-xl ">Social Links</h1>
          </div>
          <div className="flex gap-2 items-center">
            <ArrowRight size={20} />
            <div className="cursor-pointer"><a href="https://www.facebook.com/profile.php?id=100057395593720" target="_blank">Facebook</a></div>
          </div>
          <div className="flex gap-2 items-center">
            <ArrowRight size={20} />
            <div className="cursor-pointer">Instagram</div>
          </div>
          <div className="flex gap-2 items-center">
            <ArrowRight size={20} />
            <div className="cursor-pointer">Youtube</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-5 w-1 bg-yellow-300"></div>
            <h1 className="font-bold text-xl ">Out Store</h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.6615851720488!2d90.35301106962096!3d23.79560492576342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c109d67754f9%3A0xe677b6438167cedc!2sMisco%20super%20market!5e0!3m2!1sbn!2sbd!4v1715368344128!5m2!1sbn!2sbd"
            width="300"
            height="300"
            loading="lazy"
            
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Footer;
