import React from "react";
import Homepage from ".././Home Components/Homepage";
import OurServices from "@/Home Components/OurServices";
import OurClients from "@/Home Components/OurClients";
import CustomerStats from "@/Home Components/CustomerStats";
import Advantages from "@/Home Components/Advantages";
import Faq from "@/Home Components/Faq";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Homepage />
      <OurServices />
      <OurClients />
      <CustomerStats />
      <Advantages />
      <Faq />
    </div>
  );
};

export default page;
