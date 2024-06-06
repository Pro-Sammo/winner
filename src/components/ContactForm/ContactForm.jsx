"use client";

import React from "react";
import axios from "axios";
import { toast } from "sonner";
import { Oswald } from "next/font/google";
const oswald = Oswald({ weight: ["600"], subsets: ["cyrillic"] });

const ContactForm = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const cleanForm = () =>{
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setAddress("")
    setMessage("")
  }

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/v1/admin/contact",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          address: address,
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      toast(result?.message);
      setLoading(false);
      cleanForm()
    } catch (error) {
      console.log(error);
      toast(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="px-2 md:px-12 py-6 md:py-8 my-52 md:mx-20 lg:mx-40 xl:mx-64 mx-2 ">
        <div className="w-full">
          <div
            className={`${
              oswald.className
            } ${"text-center text-2xl md:text-3xl lg:text-4xl mb-14 lg:mb-20 "}`}
          >
            Contact Us
          </div>
        </div>
        <form
          className="flex flex-col justify-center bg-[#68ACD9] p-6 md:p-11 rounded-lg"
          onSubmit={(e) => handleContactFormSubmit(e)}
        >
          <div>
            <div className="grid md:grid-cols-2 gap-3 ">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                type="text"
                placeholder="First Name*"
                style={{ fontFamily: "Cabinet" }}
                className="bg-gray-100 border-white h-12 border focus:border-[#73A5DB] placeholder:text-[#73A5DB] rounded-md pl-6 outline-none"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                type="text"
                placeholder="Last Name*"
                style={{ fontFamily: "Cabinet" }}
                className="bg-gray-100 border-white h-12 border focus:border-[#73A5DB] placeholder:text-[#73A5DB] rounded-md pl-6 outline-none"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                style={{ fontFamily: "Cabinet" }}
                className="bg-gray-100 border-white h-12 border focus:border-[#73A5DB] placeholder:text-[#73A5DB] rounded-md pl-6 outline-none"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="text"
                placeholder="Phone*"
                style={{ fontFamily: "Cabinet" }}
                className="bg-gray-100 border-white h-12 border focus:border-[#73A5DB] placeholder:text-[#73A5DB] rounded-md pl-6 outline-none"
              />
            </div>
            <div className="w-full ">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                type="text"
                placeholder="Address*"
                style={{ fontFamily: "Cabinet" }}
                className="bg-gray-100 mt-3 border-white w-full h-12 border focus:border-[#73A5DB] placeholder:text-[#73A5DB]  rounded-md pl-6 outline-none"
              />
              <textarea
                maxLength={255}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="Type you message here"
                style={{ fontFamily: "Cabinet" }}
                className="bg-gray-100 border-white mt-3 w-full h-24 border pt-4  focus:border-[#73A5DB] placeholder:text-[#73A5DB]  rounded-md pl-6 outline-none"
              />
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            style={{ fontFamily: "Cabinet" }}
            className="px-12 py-3 bg-blue-400 text-white rounded-full mt-3 w-fit font-bold tracking-wide duration-250 hover:border-blue-400 hover:bg-white hover:text-black border hover:shadow-xl hover:shadow-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
