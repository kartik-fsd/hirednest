import React from "react";
import {
  Cog,
  ArrowRight,
  IndianRupeeIcon,
  BriefcaseBusiness,
  UsersIcon,
  PiggyBankIcon,
  UserCheck2Icon,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <BriefcaseBusiness className="h-5 w-5 text-green-900" />,
    title: "Flexible Workforce Solutions",
    link: "/services/flexible-workforce",
    description:
      "Connecting skilled gig workers with tailored job opportunities that fit their skills, availability, and preferences.",
  },
  {
    icon: <UsersIcon className="h-5 w-5 text-green-900" />,
    title: "Customer & Merchant Acquisition",
    link: "/services/customer-merchant-acquisition",
    description:
      "Accelerating business growth through targeted acquisition strategies and data-driven marketing approaches.",
  },
  {
    icon: <PiggyBankIcon className="h-5 w-5 text-green-900" />,
    title: "Financial Product Distribution",
    link: "/services/flexible-workforce",
    description:
      "Offering comprehensive financial products including insurance policies, investment opportunities, and banking services.",
  },
  {
    icon: <UserCheck2Icon className="h-5 w-5 text-green-900" />,
    title: "Talent Recruitment & Staffing",
    link: "/services/talent-recruitment",
    description:
      "Delivering seamless recruitment process combining AI-powered matching with human expertise.",
  },
  {
    icon: <IndianRupeeIcon className="h-5 w-5 text-green-900" />,
    title: "Comprehensive Payroll Solutions",
    link: "/services/payroll-solutions",
    description:
      "Providing full-service payroll management from salary calculations to regulatory compliance and reporting.",
  },
  {
    icon: <Cog className="h-5 w-5 text-green-900" />,
    title: "Business Process Outsourcing",
    link: "/services/business-process-outsourcing",
    description:
      "Streamlining operations with scalable BPO services across customer support, back-office, and IT services.",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="relative group">
      {/* Shadow Card */}
      <div className="absolute inset-0 bg-black/90 rounded-2xl transform translate-x-3 translate-y-3" />

      {/* Main Card */}
      <div className="relative bg-white rounded-2xl p-6 border border-gray-900">
        {/* Icon Circle */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
            {service.icon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6">{service.description}</p>

        <div className="absolute bottom-6 right-6">
          <Link
            href={service.link}
            className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group hover:underline"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function CleanServiceCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="space-y-2 sm:space-y-4">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold
              bg-gradient-to-r from-green-900 to-green-950 bg-clip-text text-transparent
                leading-tight sm:leading-tight md:leading-tight py-1"
            >
              Empowering Business{" "}
              <span className="inline-block mt-1 sm:mt-2 relative">
                {/* Abstract Background */}
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 rounded transform -rotate-1 scale-105" />

                {/* Decorative Elements */}
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.1)_0%,transparent_50%)]" />

                {/* Text */}
                <span className="relative text-white font-bold">Growth</span>

                {/* Additional decorative dots */}
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full opacity-50" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full opacity-50" />
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              Comprehensive business solutions designed to streamline
              operations, maximize efficiency, and drive sustainable success
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CleanServiceCards;
