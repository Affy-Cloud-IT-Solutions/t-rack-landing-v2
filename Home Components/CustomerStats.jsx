"use client";

import { useEffect, useState } from "react";

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

const CustomerStats = () => {
  return (
    <div className="bg-white md:pt-0 pt-0 pb-12 relative overflow-hidden">
      <div className="relative mx-auto max-w-8xl bg-[#7dbfed] px-4 py-10 md:py-11.5">
        <div className="relative z-20 max-w-5xl mx-auto text-white">
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-snug mb-2 text-center md:text-left">
            We love our customers <br className="hidden md:block" /> and they
            love us too.
          </h2>

          <img
            src="https://micronet.work/demo/wp-content/uploads/2023/04/happy_girl.png"
            alt="Girl celebrating"
            className="
              block 
              md:absolute 
              md:-top-10 
              md:-right-50 
              md:h-[454px] 
              h-[160px] 
              object-contain 
              z-10 
              mx-auto 
              -mt-4 
              md:mt-1 
              md:translate-y-[-10%]
            "
          />

          <p className="text-sm sm:text-base md:text-lg font-medium mb-6 max-w-[550px] text-center md:text-left mx-auto md:mx-0">
            We love our customers and they love us too. It is a long established
            fact that a reader will be distracted. It is a long established fact
            that a reader will be distracted.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-4 mb-8">
            <div className="flex -space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User1"
                className="w-auto h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User2"
                className="w-auto h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User3"
                className="w-auto h-12 rounded-full border-2 border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="User4"
                className="w-auto h-12 rounded-full border-2 border-white"
              />
            </div>

            <div className="w-full md:ml-8 md:-mt-2 flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex gap-4 w-full md:w-auto justify-center">
                <div className="bg-gradient-to-br from-white/40 to-black/20 backdrop-blur-lg text-white w-[100px] h-[60px] rounded-2xl flex flex-col items-center justify-center shadow-lg">
                  <div className="text-2xl font-bold">
                    <AnimatedCounter target={300} />
                  </div>
                  <div className="mt-1 text-sm">Tasks</div>
                </div>

                <div className="bg-gradient-to-br from-white/40 to-black/20 backdrop-blur-lg text-white w-[100px] h-[60px] rounded-2xl flex flex-col items-center justify-center shadow-lg">
                  <div className="text-2xl font-bold">
                    <AnimatedCounter target={80} />
                  </div>
                  <div className="mt-1 text-sm">Projects</div>
                </div>
              </div>

              <div className="flex justify-center w-full md:w-auto">
                <div className="bg-gradient-to-br from-white/40 to-black/20 backdrop-blur-lg text-white w-[100px] h-[60px] rounded-2xl flex flex-col items-center justify-center shadow-lg">
                  <div className="text-2xl font-bold">
                    <AnimatedCounter target={120} />
                  </div>
                  <div className="mt-1 text-sm">Members</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:-mt-6 mt-0 md:text-left">
            <button className="px-4 py-1.5 border border-white rounded-full text-white text-[14px] hover:bg-white hover:text-black cursor-pointer transition">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerStats;
