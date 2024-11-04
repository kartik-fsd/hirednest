import React, { Fragment } from "react";
import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import {
  Users,
  Target,
  Wallet,
  UserPlus,
  Calculator,
  BarChart3,
} from "lucide-react";

const services = [
  {
    title: "Flexible Workforce Solutions",
    href: "/services/flexible-workforce",
    description:
      "Connecting skilled gig workers with tailored job opportunities",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Customer & Merchant Acquisition",
    href: "/services/customer-merchant-acquisition",
    description: "Accelerating business growth through targeted strategies",
    icon: Target,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "Financial Product Distribution",
    href: "/services/flexible-workforce",
    description: "Comprehensive range of insurance and investment options",
    icon: Wallet,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Talent Recruitment & Staffing",
    href: "/services/talent-recruitment",
    description: "Seamless recruitment services for top-tier talent",
    icon: UserPlus,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Comprehensive Payroll Solutions",
    href: "/services/payroll-solutions",
    description: "Full-service payroll management with compliance",
    icon: Calculator,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    title: "Business Process Outsourcing",
    href: "/services/business-process-outsourcing",
    description: "Cost-effective and scalable BPO solutions",
    icon: BarChart3,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="flex items-start p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
    >
      <div
        className={`${service.bgColor} ${service.color} p-2 rounded-lg mr-4 mt-1 group-hover:scale-110 transition-transform duration-200`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-medium text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {service.description}
        </p>
      </div>
    </Link>
  );
};

export default function ServicesDropdown() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <PopoverButton className="group inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-green-950 hover:text-green-900 focus:outline-none">
            Our Services
            <ChevronDownIcon
              className={`h-5 w-5 text-green-950 group-hover:text-green-900 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </PopoverButton>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <PopoverPanel className="absolute left-1/2 z-50 mt-5 w-screen max-w-max -translate-x-1/2 transform">
              <div className="w-[800px] overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-200">
                <div className="relative grid grid-cols-2 gap-x-6 gap-y-1 p-6">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 -mt-3 -mr-3 h-12 w-12 bg-green-50 rounded-full blur-xl opacity-50" />
                  <div className="absolute bottom-0 left-0 -mb-3 -ml-3 h-12 w-12 bg-blue-50 rounded-full blur-xl opacity-50" />

                  <div className="col-span-2 mb-6 border-b pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-lg font-medium text-gray-900">
                          Our Comprehensive Services
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                          Discover how we can help transform your business
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full">
                          6 Services
                        </span>
                      </div>
                    </div>
                  </div>

                  {services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute left-1/2 -top-2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white border-t border-l ring-1 ring-gray-200" />
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
