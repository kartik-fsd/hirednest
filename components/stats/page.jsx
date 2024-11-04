"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, IndianRupeeIcon, Star } from "lucide-react";

const StatItem = ({ stat, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseDelay = 0.2;

  const IconComponent = {
    "Total Acquisitions": TrendingUp,
    Freelancers: Users,
    "Earnings Facilitated": IndianRupeeIcon,
    "Client Satisfaction": Star,
  }[stat.label];

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: baseDelay + index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center p-8 rounded-2xl bg-gray-700/50 backdrop-blur-sm border border-gray-600 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
        <div className="relative w-48 h-48 mb-6">
          {/* Background Circle */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#374151"
              strokeWidth="8"
              className="transition-all duration-300 group-hover:stroke-gray-600"
            />
            {/* Animated Progress Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#10B981"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={inView ? { pathLength: stat.percentage / 100 } : {}}
              transition={{ duration: 1.5, delay: baseDelay + index * 0.1 }}
              className="transition-all duration-300 group-hover:stroke-green-400"
            />
          </svg>

          {/* Icon and Value in Center */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <IconComponent className="w-8 h-8 mb-2 text-green-500 group-hover:text-green-400 transition-colors duration-300" />
            <motion.span
              className="text-3xl font-bold text-gray-100 font-mono"
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {stat.value}
            </motion.span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-100 text-center mb-3 group-hover:text-green-400 transition-colors duration-300">
          {stat.label}
        </h3>

        <motion.p
          className="text-sm text-gray-300 text-center leading-relaxed max-w-xs"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {stat.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const VisualStatsSection = () => {
  const stats = [
    {
      value: "10K+",
      label: "Total Acquisitions",
      description:
        "Successfully connecting businesses with talent across our platform.",
      percentage: 100,
    },
    {
      value: "1K+",
      label: "Freelancers",
      description:
        "Expert professionals ready to tackle your next big project.",
      percentage: 75,
    },
    {
      value: "₹50L+",
      label: "Earnings Facilitated",
      description:
        "Empowering our freelancer community with sustainable income.",
      percentage: 85,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description:
        "Consistently delivering excellence and exceeding expectations.",
      percentage: 96,
    },
  ];

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-gray-100 mb-6">
            Driving the <span className="text-green-500">Gig Economy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming how businesses and freelancers connect, collaborate,
            and succeed together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualStatsSection;
