"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChartBar,
  Users,
  BadgeCheck,
  BarChart3,
  Check,
  Building,
  TrendingUp,
  Target,
} from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 min-h-[90vh] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#22c55e 0.75px, transparent 0.75px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-200 transform -skew-x-12"></div>
      </div>
      <div className="absolute inset-0">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Check className="w-4 h-4" />
                Trusted Business Solutions
              </motion.div>

              {/* Heading */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-900 leading-normal mb-6">
                Building Future of
                <span className="block text-green-700 mt-2">
                  Business Solutions
                </span>
              </h1>

              <h2 className="text-lg text-gray-600 mb-8 leading-relaxed">
                Empowering businesses and professionals with comprehensive
                solutions for growth, talent, and financial success.
              </h2>

              {/* Feature List */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm mb-8">
                {[
                  { icon: Building, text: "Talent Solutions" },
                  { icon: BarChart3, text: "Business Growth" },
                  { icon: Users, text: "BPO Services" },
                  { icon: Check, text: "Financial Services" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    //  className="flex items-center gap-2 text-gray-700"
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-green-700 
                    shadow-sm border border-green-100"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <feature.icon className="w-5 h-5 text-green-600" />
                    <span>{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
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

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  width={600}
                  height={500}
                  src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Business Solutions"
                  className="w-full h-full object-cover"
                />

                {/* Stats Card */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-green-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        50K+
                      </div>
                      <div className="text-sm font-medium text-gray-800">
                        Business Growth
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Successful partnerships
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Achievement Card */}
                <motion.div
                  className="absolute -left-6 top-1/4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-green-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02, x: 2 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="text-sm font-semibold text-gray-800">
                          Active Projects
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-green-600 mt-1">
                        95%
                      </div>
                      <div className="text-xs text-gray-500">Success rate</div>
                    </div>
                  </div>
                </motion.div>

                {/* Mini Info Card */}
                <motion.div
                  className="absolute -right-4 top-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-green-100"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02, y: 2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-800">
                      1M+ Talents
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Background Accent */}
              <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-green-100 to-emerald-50 rounded-2xl transform -rotate-2" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
