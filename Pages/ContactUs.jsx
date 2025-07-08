"use client"

import React, { useEffect } from "react";

const ContactUs = () => {

 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen mt-10 bg-blue-50 flex flex-col md:flex-row items-center justify-center md:px-6 px-0 md:pt-6">
   
      <div className="w-full px-6 md:px-2 md:w-1/2 max-w-lg">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center md:text-left">
          Contact us!
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded-md text-lg font-semibold hover:opacity-90 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <div className=" md:flex md:w-1/2 justify-center mt-10 md:mt-0">
        <img
          src={"contactImg.PNG"}
          alt="Contact Us"
          className="w-auto md:h-[78vh] h-[45vh] object-cover"
        />
      </div>
    </div>
  );
};

export default ContactUs;
