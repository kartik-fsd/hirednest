"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    position: "HR Director",
    content:
      "HiredNest's comprehensive payroll solutions have revolutionized how we manage our workforce. Their platform's accuracy in handling complex salary structures and automated compliance has reduced our processing time by 60%. The seamless integration with our existing systems made the transition effortless.",
    rating: 5,
  },
  {
    name: "David Patterson",
    position: "Chief Operations Officer",
    content:
      "As a scaling business, managing a growing gig workforce was challenging until we discovered HiredNest. Their end-to-end platform handles everything from worker onboarding to payments flawlessly. The automated attendance tracking and real-time performance analytics have been game-changers for our operations.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    position: "Operations Manager",
    content:
      "HiredNest has transformed how we handle our affiliate marketing program. The platform's ability to track commissions, automate payouts, and provide transparent reporting has significantly improved our relationships with partners. Their dedication to security and compliance gives us complete peace of mind.",
    rating: 5,
  },
];

export default function ModernTestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentTestimonial(
      (prev) =>
        (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 min-h-screen">
      {/* Responsive padding container */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-30 overflow-hidden">
          <div className="absolute top-0 left-0 w-36 sm:w-48 md:w-64 lg:w-72 h-36 sm:h-48 md:h-64 lg:h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-0 w-36 sm:w-48 md:w-64 lg:w-72 h-36 sm:h-48 md:h-64 lg:h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-36 sm:w-48 md:w-64 lg:w-72 h-36 sm:h-48 md:h-64 lg:h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-[90rem] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-950">
                What Our Clients Say
              </h2>
              <div className="w-12 sm:w-16 md:w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Real experiences from professionals who have transformed their
                business operations with our solutions
              </p>
            </motion.div>
          </div>

          {/* Testimonial Container */}
          <div className="relative max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
            {/* Decorative Quotes - Responsive visibility */}
            <div className="hidden md:block absolute -top-4 sm:-top-6 md:-top-8 lg:-top-10 -left-4 sm:-left-6 md:-left-8 lg:-left-10 text-emerald-200">
              <Quote className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </div>
            <div className="hidden md:block absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 -right-4 sm:-right-6 md:-right-8 lg:-right-10 text-emerald-200">
              <Quote className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            </div>

            {/* Testimonial Slider */}
            <div className="relative h-[28rem] sm:h-[24rem] md:h-[20rem] lg:h-[18rem]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full h-full cursor-grab active:cursor-grabbing"
                >
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg h-full">
                    <div className="h-full flex flex-col justify-between">
                      {/* Stars and Content */}
                      <div className="space-y-3 sm:space-y-4 md:space-y-6">
                        <div className="flex gap-1 text-emerald-500">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-current"
                            />
                          ))}
                        </div>
                        <blockquote className="relative">
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                            &quot;{testimonials[currentTestimonial].content}
                            &quot;
                          </p>
                        </blockquote>
                      </div>

                      {/* Author Info */}
                      <div className="mt-4 flex items-center justify-between">
                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                            {testimonials[currentTestimonial].name}
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-emerald-600 font-medium">
                            {testimonials[currentTestimonial].position}
                          </p>
                        </div>
                        <div className="text-emerald-500">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                          >
                            <div className="w-full h-full rounded-full border-2 border-emerald-500 flex items-center justify-center">
                              <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="rounded-full border-2 border-emerald-600 p-2 sm:p-3 md:p-4 text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="rounded-full border-2 border-emerald-600 p-2 sm:p-3 md:p-4 text-emerald-600 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 md:mt-8">
              {testimonials.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full ${
                    currentTestimonial === index
                      ? "bg-emerald-600"
                      : "bg-emerald-200"
                  }`}
                  animate={{ scale: currentTestimonial === index ? 1.5 : 1 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
