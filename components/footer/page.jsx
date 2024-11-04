import Link from "next/link";

import HiredNestIcon from "@/public/hirednest";

export default function Footer() {
  const services = [
    {
      title: "Flexible Workforce Solutions",
      link: "/services/flexible-workforce",
    },
    {
      title: "Customer & Merchant Acquisition",
      link: "/services/customer-merchant-acquisition",
    },
    {
      title: "Financial Product Distribution",
      link: "/services/flexible-workforce",
    },
    {
      title: "Talent Recruitment & Staffing",
      link: "/services/talent-recruitment",
    },
    {
      title: "Comprehensive Payroll Solutions",
      link: "/services/payroll-solutions",
    },
    {
      title: "Business Process Outsourcing",
      link: "/services/business-process-outsourcing",
    },
  ];

  return (
    <footer className="bg-green-50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-12 space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <HiredNestIcon className="h-16 w-auto transition-all duration-300" />
          </Link>
          <p className="text-sm text-green-700 text-center max-w-md">
            Revolutionizing the gig economy with comprehensive solutions for
            businesses and talent alike
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-green-800">
              About Hired Nest
            </h2>
            <p className="text-sm text-green-700">
              At Hired Nest, we&apos;re revolutionizing the gig economy by
              offering a comprehensive suite of services tailored to both gig
              workers and businesses alike. Whether you&apos;re a freelancer
              seeking opportunities or a company in need of top talent,
              we&apos;ve got you covered.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-green-800">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {[
                "Home",
                "About Us",
                "Contact",
                "Join as Freelancer",
                "Hire Talent",
                "FAQs",
                "Blog",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-green-700 hover:text-green-900 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-green-800">
              Our Services
            </h2>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={service.link}
                    className="text-sm text-green-700 hover:text-green-900 transition-colors duration-200 flex items-center gap-2"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-green-800">
              Contact Info
            </h2>
            <address className="not-italic text-sm text-green-700 space-y-1">
              <p>Business Center</p>
              <p>Bangalore, India</p>
              <p>
                Email:{" "}
                <Link
                  href="mailto:info@hirednest.com"
                  className="hover:text-green-900 transition-colors duration-200"
                >
                  info@hirednest.com
                </Link>
              </p>
              <p>Phone: Contact support for assistance</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-200">
          <p className="text-center text-sm text-green-700">
            © {new Date().getFullYear()} Hired Nest LTD PVT. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
