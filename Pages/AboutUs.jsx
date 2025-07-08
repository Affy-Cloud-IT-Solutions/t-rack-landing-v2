"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 md:px-20 mt-16 pt-4 bg-gradient-to-b from-blue-50 to-white text-gray-800">
     <h1 className="text-center font-bold mt-3 text-2xl md:text-4xl">What we are?</h1>
      <div className="flex flex-col md:flex-row gap-10 py-4  items-center mb-10">
        
        <div>
          <h2 className="text-xl md:text-3xl font-bold leading-snug">
            We help create connections between{" "}
            <span className="text-[#125A88]">Companies and Customers.</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-700">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted.
          </p>
        </div>
      </div>

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        src="https://micronet.work/demo/wp-content/uploads/2023/04/about-1536x663.png"
        alt="Connections"
        className="w-full rounded-lg shadow-md"
      />

      <div className="flex gap-10 items-center mt-8 mb-12">
        <div>
          <h2 className="text-2xl text-[#125A88] md:text-3xl font-bold leading-snug">
            We Design, we develop and we deliver.
          </h2>
          <p className="mt-3 text-base md:text-lg text-gray-700">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted.
          </p>
          <div className="bg-blue-50 md:p-6 p-3 rounded-xl mt-6">
            <p className="md:text-xl text-base font-semibold leading-relaxed text-gray-900">
              Our goal is to build software that gives customer facing teams at
              SMBs the ability to create fruitful and enduring relationships
              with their clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
