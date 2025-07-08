"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sectionFade = (x = 0) => ({
  hidden: { opacity: 0, x },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
});

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 mt-10 to-white pt-16 py-4 px-4 md:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-[#125A88]">
          What makes our tool stand out!
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          T-Rack is the trusted choice for organizations worldwide, offering
          customer-focused ticketing solutions that are reliable, scalable, and
          efficient.
        </p>
      </motion.div>


      {/* <motion.span
        initial={{ opacity: 0, y: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="absolute top-48 right-6 bg-[#329CE6] text-white text-sm px-3 py-1 rounded-full shadow-md"
      >
        ⚡ AI Ticket Generation
      </motion.span> */}

      {/* Dashboard Reports */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade(-60)}
      >
        <div className="flex-1 relative">
          <img
            src="https://t-racktool.com/images/system1.png"
            alt="Dashboard"
            className="w-full md:max-w-md max-w-sm mx-auto"
          />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#125A88] mb-4">
            Dashboard Reports
          </h3>
          <ul className="list-disc md:text-lg text-sm pl-5 space-y-3 text-gray-700">
            <li><b className="text-[#329CE6]">Real-Time Insights:</b> Live view of support operations.</li>
            <li><b className="text-[#329CE6]">Performance Tracking:</b> Analyze team productivity & trends.</li>
            <li><b className="text-[#329CE6]">Custom Reports:</b> Data-informed decisions using analytics.</li>
          </ul>
        </div>
      </motion.div>

      {/* Analytics Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:-mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade(60)}
      >
        <div className="flex-1 px-10 relative">
          <img
            src={"analyticsImg.png"}
            alt="Analytics"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#125A88] mb-4">
            Advanced Analytics
          </h3>
          <ul className="list-disc md:text-lg text-sm pl-5 space-y-3 text-gray-700">
            <li><b className="text-[#329CE6]">Interactive Charts:</b> Visualize support KPIs easily.</li>
            <li><b className="text-[#329CE6]">Historical Trends:</b> Identify performance patterns over time.</li>
            <li><b className="text-[#329CE6]">Data Filters:</b> Drill down into specific timeframes and metrics.</li>
          </ul>
        </div>
      </motion.div>

      {/* Reports Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-4 md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade(-60)}
      >
        <div className="flex-1 px-10 relative">
          <img
            src={"reportsImg.png"}
            alt="Reports"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#125A88] mb-4">
            Reports & Logs
          </h3>
          <ul className="list-disc md:text-lg text-sm pl-5 space-y-3 text-gray-700">
            <li><b className="text-[#329CE6]">Automated Reporting:</b> Schedule and email regular reports.</li>
            <li><b className="text-[#329CE6]">Detailed Logs:</b> Maintain historical data for audits.</li>
            <li><b className="text-[#329CE6]">Export Options:</b> Download reports in Excel, PDF & CSV's.</li>
          </ul>
        </div>
      </motion.div>

      {/* Notification Section */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade(60)}
      >
        <div className="flex-1 px-10 relative">
          <img
            src={"notificationImg.png"}
            alt="Notifications"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#125A88] mb-4">
            Smart Notifications
          </h3>
          <ul className="list-disc md:text-lg text-sm pl-5 space-y-3 text-gray-700">
            <li><b className="text-[#329CE6]">Priority Alerts:</b> Immediate attention to high-priority tickets.</li>
            <li><b className="text-[#329CE6]">Multichannel Delivery:</b> Alerts via email, SMS, and in-app.</li>
            <li><b className="text-[#329CE6]">Custom Triggers:</b> Configure rules for personalized notifications.</li>
          </ul>
        </div>
      </motion.div>

     

      {/* Timezone Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-10 md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionFade(-60)}
      >
        <div className="flex-1 px-10 relative rounded-xl">
          <img
            src={"timezoneImg.png"}
            alt="Timezone Settings"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="flex-1 text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#125A88] mb-4">
            Timezone & Localization
          </h3>
          <ul className="list-disc md:text-lg text-sm pl-5 space-y-3 text-gray-700">
            <li><b className="text-[#329CE6]">Global Support:</b> Set timezone preferences for global teams.</li>
            <li><b className="text-[#329CE6]">Auto-adjustments:</b> Tickets reflect accurate local timestamp.</li>
            <li><b className="text-[#329CE6]">Localized Formats:</b> Regional date and time display support.</li>
          </ul>
        </div>
      </motion.div>

        <motion.div
        className="flex flex-col md:flex-row-reverse md:pb-2 pb-8 items-center justify-between gap-4 md:-mt-20"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex-1 px-10 relative">
          <img
            src={"ticketImg.png"}
            alt="AI Ticket Creation"
            className="w-full max-w-md mx-auto"
          />
        </div>

        <div className="flex-1 text-left">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#125A88] mb-4">
            AI-Powered Ticket Creation
          </h3>
          <ul className="list-disc md:text-lg text-sm pl-5 space-y-3 text-gray-700">
            <li>
              <span className="font-bold text-[#329CE6]">
                Automatic Ticket Generation:
              </span>{" "}
              T-Rack’s AI instantly analyzes requests, extracts critical
              information.
            </li>
            <li>
              <span className="font-bold text-[#329CE6]">
                Accuracy and Consistency:
              </span>{" "}
              Maintain precision and uniformity in ticket handling with
              AI-driven automations.
            </li>
            <li>
              <span className="font-bold text-[#329CE6]">
                Faster Resolution Time:
              </span>{" "}
              The entire ticket lifecycle by reducing manual input
              and routing tickets to the right teams.
            </li>
          </ul>
        </div>
      </motion.div>

    </section>
  );
};

export default Features;
