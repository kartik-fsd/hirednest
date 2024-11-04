"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ExpandableSection = ({
  number,
  title,
  description,
  isOpen,
  toggleOpen,
}) => (
  <div className="border-t border-gray-200 py-6">
    <div
      className="flex justify-between items-center cursor-pointer"
      onClick={toggleOpen}
    >
      <div className="flex items-center">
        <span className="text-green-500 font-bold mr-4">{number}</span>
        <h3 className="text-xl font-semibold text-gray-700">{title}</h3>
      </div>
      <ChevronDown
        className={`w-6 h-6 transition-transform ${
          isOpen ? "transform rotate-180" : ""
        }`}
      />
    </div>
    {isOpen && <p className="mt-4 text-gray-600 pl-10">{description}</p>}
  </div>
);

const WhyChooseUs = () => {
  const [openSection, setOpenSection] = useState(null);
  const pros = [
    {
      title: "Comprehensive Workforce Management",
      description:
        "Streamline your gig workforce operations with our end-to-end platform featuring automated attendance tracking, performance analytics, and seamless onboarding. Handle everything from worker documentation to payment processing in one unified solution.",
    },
    {
      title: "Advanced Affiliate Program Tools",
      description:
        "Transform your affiliate marketing with our sophisticated tracking system. Automate commission calculations, manage multiple payment structures, and provide real-time performance insights to your marketing partners through our transparent dashboard.",
    },
    {
      title: "Real-Time Performance Analytics",
      description:
        "Gain valuable insights through our comprehensive analytics dashboard. Track workforce productivity, monitor payroll expenses, analyze affiliate performance, and generate detailed reports for better business decision-making in real-time.",
    },
    {
      title: "Flexible Payment Solutions",
      description:
        "Handle diverse payment needs with our versatile payment system. Whether it's processing bulk salary transfers, managing affiliate commissions, or handling contractor payments, our platform ensures timely and accurate disbursements.",
    },
  ];

  return (
    <section className="py-16 px-4 lg:py-24 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row space-x-5 items-center mb-16">
          <h2 className="text-gray-700 text-4xl lg:text-5xl font-bold mb-6 lg:mb-0 lg:w-1/2">
            Unleash Creativity with Hired Nest
          </h2>
          <p className="text-gray-600 lg:w-1/3">
            Hired Nest revolutionizes the gig economy by providing innovative
            solutions that empower both businesses and freelancers.
          </p>
        </div>
        <div>
          {pros.map((feature, index) => (
            <ExpandableSection
              key={index}
              number={`0${index + 1}`}
              title={feature.title}
              description={feature.description}
              isOpen={openSection === index}
              toggleOpen={() =>
                setOpenSection(openSection === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
