import React from "react";

const Advantages = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 md:py-2 pb-8 bg-white">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <img
          src="https://micronet.work/demo/wp-content/uploads/2023/03/hero2.png"
          alt="Advantage"
          className="w-auto md:h-[80vh] h-[40vh] object-cover rounded-xl"
        />
      </div>

      <div className="w-full md:w-1/2 md:pl-7">
        <h2 className="text-2xl md:text-3xl font-bold text-[#125A88] leading-tight mb-4">  What makes our tool special?
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base mb-6 space-y-2">
            <li><strong className="text-[#329CE6]" >Feedback-Driven Features:</strong> We prioritize features based on client feedback, ensuring T-Rack evolves with your needs.</li>
            <li><strong className="text-[#329CE6]">Seamless User Experience:</strong> Our interface is intuitive and user-friendly, reducing onboarding time for new users.</li>
            <li><strong className="text-[#329CE6]">Scalability:</strong> T-Rack adapts to support teams of any size, from small businesses to large enterprises.</li>
            <li><strong className="text-[#329CE6]">Continuous Platform Enhancements:</strong> We continuously refine T-Rack to exceed industry standards.</li>
            <li><strong className="text-[#329CE6]">Dedicated Support:</strong> Our support team is always ready to assist, ensuring you maximize the potential of T-Rack.</li>
          </ul>

        {/* <div className="flex flex-col md:flex-row gap-6 mb-6">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Intense research</h3>
            <p className="text-gray-400 max-w-xs">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border border-orange-300 rounded-lg p-4 w-28 h-28">
            <p className="text-pink-600 font-bold text-2xl">5</p>
            <p className="text-pink-600 text-center text-sm mt-1 leading-snug">Active<br />Projects</p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">Audience segmentation</h3>
            <p className="text-gray-400 max-w-xs">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div> */}

        <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-lg p-4 w-full max-w-xl">
          <input
            type="email"
            placeholder="Enter email to subscribe"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-[#329CE6]"
          />
          <button className="bg-[#329CE6] cursor-pointer text-white px-6 py-2 rounded-md text-sm hover:bg-[#125A88] transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advantages;