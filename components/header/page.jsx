"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Users,
  Target,
  Wallet,
  UserPlus,
  Calculator,
  BarChart3,
} from "lucide-react";
import ServicesDropdown from "./dropdown";
import Link from "next/link";
import HiredNestIcon from "@/public/hirednest";

const mobileServices = [
  {
    title: "Flexible Workforce Solutions",
    href: "/services/flexible-workforce",
    description: "Connecting skilled gig workers with opportunities",
    icon: Users,
  },
  {
    title: "Customer & Merchant Acquisition",
    href: "/services/customer-merchant-acquisition",
    description: "Accelerating business growth strategies",
    icon: Target,
  },
  {
    title: "Financial Product Distribution",
    href: "/services/financial-product-distribution",
    description: "Comprehensive financial solutions",
    icon: Wallet,
  },
  {
    title: "Talent Recruitment & Staffing",
    href: "/services/talent-recruitment",
    description: "Professional recruitment services",
    icon: UserPlus,
  },
  {
    title: "Comprehensive Payroll Solutions",
    href: "/services/payroll-solutions",
    description: "Full-service payroll management",
    icon: Calculator,
  },
  {
    title: "Business Process Outsourcing",
    href: "/services/business-process-outsourcing",
    description: "Scalable BPO solutions",
    icon: BarChart3,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handler function to close mobile menu
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-green-50 shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="sr-only">Hired Nest</span>
          <Link href="/" className="group flex items-center space-x-2">
            <HiredNestIcon className="h-16 w-auto transition-all duration-300" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
          >
            About
          </Link>
          <ServicesDropdown />
          <Link
            href="/jobs"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
          >
            Jobs
          </Link>
          <Link
            href="/contact-us"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
          >
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Hired Nest</span>
              <HiredNestIcon className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
              onClick={handleMobileMenuClose}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="mb-4">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-gray-900 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <span>Our Services</span>
                        <ChevronDownIcon
                          className={`${
                            open ? "rotate-180" : ""
                          } h-5 w-5 text-gray-500 transition-transform duration-200`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {mobileServices.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={handleMobileMenuClose}
                              className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex-shrink-0 p-1 rounded-lg bg-green-50 text-green-600">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">
                                  {service.title}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Jobs
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
