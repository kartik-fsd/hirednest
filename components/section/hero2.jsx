"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection2 = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 to-green-100/90 backdrop-blur-sm" />

        {/* Dynamic Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
      linear-gradient(to right, #e5e7eb 1px, transparent 1px),
      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
    `,
            backgroundSize: "40px 40px",
            opacity: 0.2,
          }}
        />

        {/* Abstract Shapes */}
        <svg
          className="absolute top-0 right-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C30,20 70,0 100,30 L100,100 L0,100 Z"
            fill="rgba(34, 197, 94, 0.1)"
          />
          <path
            d="M0,20 C40,60 60,40 100,70 L100,100 L0,100 Z"
            fill="rgba(34, 197, 94, 0.05)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-800 mb-6 relative">
                Building Future
                <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  of Business &
                </span>
                <span className="block text-green-700">Talent Solutions</span>
                <div className="absolute -left-4 top-0 w-2 h-full bg-yellow-400 hidden lg:block" />
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-8"
              >
                <p className="text-lg sm:text-xl text-green-700 max-w-xl mx-auto lg:mx-0 mb-4">
                  Empowering businesses and professionals with comprehensive
                  solutions for growth, talent, and financial success.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm">
                  {[
                    "Talent Acquisition",
                    "Financial Services",
                    "BPO Solutions",
                    "Merchant Growth",
                  ].map((service, index) => (
                    <motion.span
                      key={service}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-green-700 shadow-sm border border-green-100"
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.button
                className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 flex items-center mx-auto lg:mx-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Transform Your Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Image Section with Abstract Design */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Abstract Background for Image */}
              <svg
                className="absolute top-0 right-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                {/* Decorative Circles */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  fill="rgba(34, 197, 94, 0.1)"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="rgba(34, 197, 94, 0.05)"
                />
                <circle cx="200" cy="200" r="100" fill="white" />

                {/* Decorative Lines */}
                <path
                  d="M50,200 L350,200"
                  stroke="rgba(34, 197, 94, 0.2)"
                  strokeWidth="1"
                />
                <path
                  d="M200,50 L200,350"
                  stroke="rgba(34, 197, 94, 0.2)"
                  strokeWidth="1"
                />

                {/* Abstract Shapes */}
                <path
                  d="M150,100 Q200,150 250,100"
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="2"
                />
                <path
                  d="M150,300 Q200,250 250,300"
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.3)"
                  strokeWidth="2"
                />
              </svg>

              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-green-200 to-green-100 p-8">
                  <Image
                    src="https://media.istockphoto.com/id/1135670850/photo/group-of-people-on-peak-mountain-climbing-helping-team-work-travel-trekking-success-business.jpg?s=2048x2048&w=is&k=20&c=VN7PBi-VeKm_ux6vZ0iJ9cUkeqwqgp8SQ0tg96AgG_4="
                    alt="Business Solutions"
                    className="w-full h-full object-cover rounded-xl"
                    width={400}
                    height={400}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/10 rounded-full"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400/10 rounded-full"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
