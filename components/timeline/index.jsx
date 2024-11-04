"use client";

import {
  Search,
  Users,
  BarChart2,
  CircleDollarSign,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Select Services",
    description:
      "Select from our wide range of gig services and choose the services that suit your necessity.",
    color: "emerald",
    highlight: "60% faster onboarding",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Curation",
    description:
      "We curate a team of best-fit trained gig workers who are all set to perform the given task at hand.",
    color: "emerald",
    highlight: "95% match accuracy",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Track Progress",
    description:
      "Access, train and track the progress of your task in real-time through our AI-based customized dashboards.",
    color: "emerald",
    highlight: "Real-time insights",
  },
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
    title: "Pay for Outcomes",
    description:
      "We help you track the efficiency of the task completed and ensure that you pay only for the outcome.",
    color: "emerald",
    highlight: "100% transparent",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 via-emerald-50/30 to-white">
      {/* Enhanced Background Pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 shadow-sm mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Simplified Process
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Your Journey to Success
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Four simple steps to transform your workforce management
            </p>
          </motion.div>
        </div>

        {/* Enhanced Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connection Lines */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 -right-4 w-8 z-0">
                  <motion.div
                    className="h-0.5 w-full bg-gradient-to-r from-emerald-300 to-emerald-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </div>
              )}

              {/* Step Card */}
              <motion.div
                className="relative bg-white rounded-2xl p-8 border border-emerald-100/50 shadow-lg shadow-emerald-100/20 hover:shadow-xl hover:shadow-emerald-200/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold transform -rotate-3">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-xl blur-xl" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-emerald-50 to-white rounded-xl flex items-center justify-center text-emerald-600 shadow-inner">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-xs font-medium text-emerald-700">
                    {step.highlight}
                  </span>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="p-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 text-white shadow-lg">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            <Link
              href={"/#contact-form"}
              className="relative flex items-center gap-2"
            >
              Get Started Today
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
