
const Homepage = () => {

  return (
    <div className="relative bg-white md:overflow-hidden pt-4 w-screen pb-2">
      <div className="absolute top-29 left-[85%] w-6 h-6 bg-purple-500 rounded-full opacity-40" />
       <div className="absolute top-28 left-[55%] w-6 h-6 bg-purple-500 rounded-full opacity-40 md:block hidden" />
      <div className="absolute top-[12%] left-[62%] w-2 h-2 bg-green-400 rounded-full opacity-40" />
      <div className="absolute top-[70%] left-[4%] w-2 h-2 bg-green-400 rounded-full opacity-40" />
      <div className="absolute top-[65%] left-[25%] w-2 h-2 bg-red-300 rounded-full" />
      <div className="absolute top-[80%] left-[20%] w-2 h-2 bg-green-200 rounded-full" />
      <div className="absolute top-[90%] left-[10%] w-2 h-2 bg-green-100 rounded-full" />
      <div className="absolute top-[10%] left-[15%] w-3 h-3 bg-pink-300 rounded-full opacity-70" />
      <div className="absolute top-[14%] left-[17%] w-1.5 h-1.5 bg-purple-300 rounded-full" />
      <div className="absolute top-[40%] left-[70%] w-4 h-4 bg-blue-300 rounded-full opacity-60" />
      <div className="absolute top-[55%] left-[85%] w-2 h-2 bg-yellow-300 rounded-full" />
      <div className="absolute top-[60%] left-[30%] w-2.5 h-2.5 bg-pink-200 rounded-full" />
      <div className="absolute top-[75%] left-[65%] w-2 h-2 bg-purple-200 rounded-full" />
      <div className="absolute top-[85%] left-[50%] w-1.5 h-1.5 bg-green-100 rounded-full" />
      <div className="absolute top-[95%] left-[80%] w-2 h-2 bg-blue-100 rounded-full opacity-80" />

       <div className="absolute top-[12%] left-[60%] w-2 h-2 bg-green-100 rounded-full" />
      <div className="absolute top-[18%] left-[25%] w-3 h-3 bg-pink-300 rounded-full opacity-70" />
      <div className="absolute top-[45%] left-[55%] w-1.5 h-1.5 bg-purple-300 rounded-full" />
      <div className="absolute top-[46%] left-[40%] w-4 h-4 bg-blue-300 rounded-full opacity-60" />
      <div className="absolute top-[59%] left-[55%] w-2 h-2 bg-yellow-300 rounded-full" />
      <div className="absolute top-[64%] left-[38%] w-2.5 h-2.5 bg-pink-200 rounded-full" />
      <div className="absolute top-[84%] left-[60%] w-2 h-2 bg-purple-200 rounded-full" />
      <div className="absolute top-[97%] left-[70%] w-1.5 h-1.5 bg-green-100 rounded-full" />
      <div className="absolute top-[5%] left-[90%] w-2 h-2 bg-blue-100 rounded-full opacity-80" />
      

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-18 pb-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 mt-2 md:mt-10">
          <h1 className="text-2xl md:text-[34px] font-bold leading-snug text-[#125A88]">
            T-Rack: India’s Best Task Tracking <br />
            <span >& Project Management Tool</span>
          </h1>
          <h2 className="mt-1 text-xl sm:text-2xl font-semibold text-gray-900">
            Plan, Track and Organise your work.
          </h2>
          <h2 className="mt-1 text-xl md:text-2xl font-medium text-gray-900">
            {" "}
            Your tickets, automated and accelerated.
          </h2>
          <p className="mt-2 text-gray-700 text-base sm:text-lg max-w-xl">
            "Optimize and streamline your IT operations with T-Rack's robust and intuitive ticketing system—designed for speed, efficiency & seamless user experience. Whether you're managing internal support or customer queries, T-Rack empowers your team with real-time tracking & insightful analytics to resolve issues faster and smarter."
          </p>
          <button className="mt-4 cursor-pointer text-base px-4 py-1.5 bg-gray-900 text-white hover:bg-gray-800 rounded-md">
            Show More
          </button>
        </div>

        <div className="relative w-full h-full md:mt-0 -mt-10 md:py-0 py-6 flex justify-center items-center">
          <div className="absolute top-0 right-0 z-0">
            <div className="absolute top-28 left-[55%] w-6 h-6 bg-purple-500 rounded-full opacity-40" />
            <div className="absolute top-[12%] left-[68%] w-2 h-2 bg-green-400 rounded-full opacity-40" />
            <div className="absolute top-[70%] left-[15%] w-2 h-2 bg-green-400 rounded-full opacity-40" />
            <div className="absolute top-[65%] left-[25%] w-2 h-2 bg-red-300 rounded-full" />
            <div className="absolute top-[80%] left-[20%] w-2 h-2 bg-green-200 rounded-full" />
            <div className="absolute top-[90%] left-[10%] w-2 h-2 bg-green-100 rounded-full" />
          </div>

          <img
            src={"heroImg1.jpg"}
            alt="Girl"
            className="relative z-10 md:max-h-[500px] mt-14 object-contain"
          />

          {/* <div className="absolute top-4 right-0 bg-white shadow-lg border-2 border-yellow-300 rounded-xl px-4 py-2 flex items-center gap-2 z-20">
            <div className="w-8 h-8 rounded-full bg-red-300 flex justify-center items-center">
              <div className="w-4 h-4 border-t-4 border-r-4 border-white transform rotate-45"></div>
            </div>
            <div>
              <p className="font-bold text-md">65%</p>
              <p className="text-xs text-gray-500">Growth Rate</p>
            </div>
          </div>

          <div className="absolute md:mt-98 mt-70 left-10 bg-white shadow-lg border-2 border-lime-400 rounded-xl px-4 py-3 flex items-center gap-3 z-20">
            <div className="w-10 h-10 rounded-full bg-cyan-400 text-white flex items-center justify-center font-bold text-lg">
              75%
            </div>
            <div>
              <p className="text-sm text-gray-800 font-semibold leading-tight">
                Task Completed
                <br />
                On Time & Within Budget
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
