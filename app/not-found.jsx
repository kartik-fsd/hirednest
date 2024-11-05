import React from "react";
import Link from "next/link";
import { HomeIcon, ArrowLeft } from "lucide-react";
import Image from "next/image";
import notfound from "@/app/assets/svg/not-found.svg";

export const metadata = {
  title: "Page Not Found | Hired Nest",
  description:
    "The page you're looking for cannot be found. Return to Hired Nest homepage.",
};

const Custom404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        {/* SVG Illustration */}
        <div className="mb-8">
          <Image
            src={notfound}
            alt="404 Not Found"
            className="h-full w-auto"
            width={300}
            height={400}
          />
        </div>

        {/* Error Content */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Page Not Found</h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Oops! It seems like this nest is empty. The page you&apos;re looking
            for has flown away.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 space-y-4">
          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              About Us
            </Link>
            {/* <Link
              href="/search"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              <Search className="w-5 h-5 mr-2" />
              Search Jobs
            </Link> */}
            {/* Home Button */}
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors w-full sm:w-auto"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              Return Home
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-gray-600">
          <p>Need help? Contact us at</p>
          <a
            href="tel:+919158780986"
            className="text-green-600 hover:underline font-medium"
          >
            +91 91587 80986
          </a>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
