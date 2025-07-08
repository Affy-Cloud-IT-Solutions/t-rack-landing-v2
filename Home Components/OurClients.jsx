
"use client"
import React from "react";
import { motion } from "framer-motion";
import '../app/globals.css';


const clients = [
  {
   
    logo: "https://t-racktool.com/static/media/eleganza.f380c3061daff31748a7.png",

    name: "Eleganza",
    tagline: "Streamline Support, Maximize Efficiency",
  },
  {
     logo: "https://t-racktool.com/static/media/Estetico.1cf05e96d1090d9bac24.png",
    name: "Estetico",
    tagline: "Empower Your Workflow with Smart Ticketing Solutions!",
  },
  {
    
    logo: "https://t-racktool.com/static/media/threads.12306634ff255ebf6f0c.png",
    name: "Threads",
    tagline: "Automate Support Tickets for Instant Resolution!",
  },
  {
    logo: "https://t-racktool.com/static/media/StockMint.04f4f0ca934fd14a199b.jpg",
    name: "Stock Mint",
    tagline: "Optimize Your Ticketing System for Peak Performance!",
  },
    {
   
    logo: "https://t-racktool.com/static/media/eleganza.f380c3061daff31748a7.png",

    name: "Eleganza",
    tagline: "Streamline Support, Maximize Efficiency",
  },
  {
     logo: "https://t-racktool.com/static/media/Estetico.1cf05e96d1090d9bac24.png",
    name: "Estetico",
    tagline: "Empower Your Workflow with Smart Ticketing Solutions!",
  },
  {
    
    logo: "https://t-racktool.com/static/media/threads.12306634ff255ebf6f0c.png",
    name: "Threads",
    tagline: "Automate Support Tickets for Instant Resolution!",
  },
  {
    logo: "https://t-racktool.com/static/media/StockMint.04f4f0ca934fd14a199b.jpg",
    name: "Stock Mint",
    tagline: "Optimize Your Ticketing System for Peak Performance!",
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
              <img src={client.logo} alt={client.name} className="h-28 mb-2 rounded-lg object-contain" />
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