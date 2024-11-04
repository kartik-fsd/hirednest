"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, CreditCard } from "lucide-react";

export const HeroSection4 = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize(containerRef.current.offsetWidth);
    }
  }, []);

  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const iconVariants = {
    animate: {
      rotate: -360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const radius = containerSize / 2 - 40; // Adjust this value to position icons closer to or further from the edge

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      {/* Background elements remain unchanged */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-200 transform -skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-300 transform skew-x-12"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between space-x-6">
          {/* Text content remains unchanged */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-800 mb-6 relative">
              Redefining Opportunities
              <span className="block text-green-600">for Businesses</span>
              <span className="block text-green-600">and Workers</span>
              <div className="absolute -left-4 top-0 w-2 h-full bg-yellow-400 hidden lg:block"></div>
            </h1>
            <p className="text-lg sm:text-xl text-green-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Hired Nest: Empowering workers and businesses with innovative
              solutions for the future of work.
            </p>
            <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 flex items-center mx-auto lg:mx-0">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            <div
              ref={containerRef}
              className="w-72 h-72 sm:w-80 sm:h-80 mx-auto relative"
            >
              <div className="absolute inset-0 bg-white rounded-full shadow-2xl" />
              <div className="absolute inset-4 bg-green-100 rounded-full flex items-center justify-center">
                <div className="text-green-800 font-bold text-lg">
                  Hired Nest
                </div>
              </div>
              <motion.div
                className="absolute inset-0"
                animate="animate"
                variants={containerVariants}
              >
                {[Briefcase, Users, CreditCard].map((Icon, index) => {
                  const angle = (index * 2 * Math.PI) / 3 - Math.PI / 2; // Start from top
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <motion.div
                      key={index}
                      className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full shadow-lg flex items-center justify-center"
                      style={{
                        top: `calc(40% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate="animate"
                      variants={iconVariants}
                    >
                      <Icon className="text-green-600" size={24} />
                    </motion.div>
                  );
                })}
              </motion.div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
