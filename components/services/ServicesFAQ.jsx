"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ServiceFaqs = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-700/50 rounded-lg border border-gray-600"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-green-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-500" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openFaq === index ? "py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceFaqs;
