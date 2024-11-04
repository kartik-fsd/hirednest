import React from "react";
import Image from "next/image";
import { Target, Lightbulb, Eye } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About Hired Nest | Leading the Future of Work",
  description:
    "Hired Nest is revolutionizing the gig economy, connecting talent with opportunities and empowering businesses for growth.",
};

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <Image
          src={
            "https://images.unsplash.com/photo-1519493442754-8eb0a6cec050?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Hired Nest Workplace"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Revolutionizing The Future of Work
            </h1>
            <p className="text-xl md:text-2xl">
              We&apos;re building the bridge between talent and opportunity
              through innovation and human connection
            </p>
          </div>
        </div>
      </div>

      {/* About Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Numbers */}
          <div className="space-y-6 p-8 bg-green-50 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900">Hired Nest</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-bold text-green-600">10K+</p>
                <p className="text-gray-600">Total Acquisitions</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-600">1k+</p>
                <p className="text-gray-600">Freelancers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-600">₹50L+</p>
                <p className="text-gray-600">Earnings Facilitated</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-green-600">98%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="space-y-6 p-8 bg-gray-50 rounded-2xl">
            <Target className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2024, Hired Nest emerged with a vision to revolutionize
              the gig economy. Based in Pune, we&apos;re a team of innovators
              and industry experts dedicated to creating meaningful connections
              between talent and opportunities.
            </p>
          </div>

          {/* Our Approach */}
          <div className="space-y-6 p-8 bg-gray-50 rounded-2xl">
            <Lightbulb className="w-8 h-8 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900">Our Approach</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Select Services</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Team Curation and Track Progress</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                <span>Pay for Outcomes</span>
              </li>
            </ul>
          </div>

          {/* Our Vision */}
          <div className="md:col-span-2 lg:col-span-3 bg-green-600 text-white p-8 rounded-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3">
                <Eye className="w-8 h-8 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg">
                  To be the leading catalyst in shaping the future of work,
                  empowering individuals and businesses to thrive in the
                  evolving gig economy.
                </p>
              </div>
              <div className="md:w-2/3 grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">PAN India Connectivity</h3>
                  <p className="text-sm">
                    Breaking down barriers in talent acquisition
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Innovation First</h3>
                  <p className="text-sm">Leveraging technology for growth</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Inclusive Growth</h3>
                  <p className="text-sm">Creating opportunities for everyone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Future?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Post a query
            </Link>
            <Link
              href="tel:+919158780986"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-600 rounded-lg text-base font-medium text-green-600 bg-transparent hover:bg-green-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
