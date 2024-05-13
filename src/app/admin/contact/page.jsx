import dynamic from "next/dynamic";
import React from "react";
const ContactDetails = dynamic(() =>
  import("@/components/ContactDetails/ContactDetails")
);
const page = () => {
  return (
    <>
      <ContactDetails />
    </>
  );
};

export default page;
