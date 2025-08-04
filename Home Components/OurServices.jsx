import { FaTrello, FaComments, FaChartLine } from "react-icons/fa";

const OurServices = () => {
  return (
    <section className="bg-[#f8fbfd] max-w-7xl mx-auto py-8 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#125A88] leading-tight">
            See how T-Rack can help you improve{" "}
            <br className="hidden md:block" />
            your systems & productivity.
          </h2>
          <p className="mt-2 text-gray-400 text-base md:text-lg max-w-xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#c8e3f5] rounded-2xl p-6">
            <FaTrello className="text-3xl text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Task Management
            </h3>
            <p className="text-gray-700 mb-3">
              It is a long established fact that a reader will be distracted.
            </p>
            <a href="#" className="text-sm underline text-gray-900 font-medium">
              Learn more →
            </a>
          </div>

          <div className="bg-[#c8e3f5] rounded-2xl p-6">
            <FaComments className="text-3xl text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Team Collaboration
            </h3>
            <p className="text-gray-700 mb-3">
              It is a long established fact that a reader will be distracted.
            </p>
            <a href="#" className="text-sm underline text-gray-900 font-medium">
              Learn more →
            </a>
          </div>

          <div className="bg-[#c8e3f5] rounded-2xl p-6">
            <FaChartLine className="text-3xl text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Project Planning
            </h3>
            <p className="text-gray-700 mb-3">
              It is a long established fact that a reader will be distracted.
            </p>
            <a href="#" className="text-sm underline text-gray-900 font-medium">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
