"use client"

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is T-RACK?",
    answer: "T-RACK is a powerful ticketing tool designed to streamline, automate, and manage your support operations efficiently.",
  },
  {
    question: "How does the 7-day free trial work?",
    answer: "You can try all features of T-RACK for 7 days without any charge. No credit card required to start the trial.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription anytime from your account settings.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We prioritize your data security with industry-standard encryption and regular backups.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white px-6 md:py-4 py-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="md:text-3xl text-2xl font-bold mb-6 text-[#125A88]">Frequently Asked Questions ?</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none text-[#329CE6] cursor-pointer font-medium"
                >
                  {faq.question}
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={"faqImg.jpg"}
            alt="T-RACK Illustration"
            className="w-auto rounded-lg h-[28vh] md:mt-4 md:h-[72vh]"
          />
        </div>
      </div>
    </section>
  );
}
