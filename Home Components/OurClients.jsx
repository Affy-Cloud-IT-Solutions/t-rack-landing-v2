
"use client"
import React from "react";
import { motion } from "framer-motion";
import '../app/globals.css';
import Image from "next/image";


const clients = [
  {
    logo: "/mitsubishiElectric.jpg",
    name: "Mitsubishi Electric",
    tagline: "Streamline Support, Maximize Efficiency",
  },
  {
     logo: "/onex.jpg",
    name: "Onex",
    tagline: "Empower Your Workflow with Smart Ticketing Solutions!",
  },
  {
    
    logo: "/razorbackBrew.png",
    name: "Razorback Brew",
    tagline: "Automate Support Tickets for Instant Resolution!",
  },
  {
    logo: "/mitsubishiElectric.jpg",
    name: "Mitsubishi Electric",
    tagline: "Streamline Support, Maximize Efficiency",
  },
   {
     logo: "/onex.jpg",
    name: "Onex",
    tagline: "Empower Your Workflow with Smart Ticketing Solutions!",
  },
  {
    
    logo: "/razorbackBrew.png",
    name: "Razorback Brew",
    tagline: "Automate Support Tickets for Instant Resolution!",
  },
  {
    logo: "/mitsubishiElectric.jpg",
    name: "Mitsubishi Electric",
    tagline: "Streamline Support, Maximize Efficiency",
  },
  {
     logo: "/onex.jpg",
    name: "Onex",
    tagline: "Empower Your Workflow with Smart Ticketing Solutions!",
  },
];

const OurClients = () => {

  return (
    <div id="clientspage"  className=" py-4 scroll-smooth pb-6 bg-blue-50 overflow-hidden">
      <h2 className="md:text-3xl text-2xl text-[#125A88] font-bold text-center mb-1">Our Customer Success Stories</h2>
      <p className="md:text-sm text-xs md:px-0 px-8 mb-6 text-black text-center">Explore real-world testimonials of businesses that have transformed their support operations with T-Rack.</p>
      <div className="relative w-full overflow-x-hidden">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center min-w-[250px] md:min-w-[300px] lg:min-w-[350px]"
            >
              <Image width={200} height={200} src={client.logo}  alt={client.name} className="h-28 mb-2 rounded-lg object-contain" />
              <h3 className="text-xl font-semibold">{client.name}</h3>
              <p className="text-gray-700 text-xs md:text-base font-medium">
                "{client.tagline}"
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurClients;