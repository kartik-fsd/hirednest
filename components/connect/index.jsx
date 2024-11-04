"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  MessageSquare,
  Phone,
  ArrowRight,
  Globe,
} from "lucide-react";

export default function MainCTASection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
    service_interest: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setFormState({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
        service_interest: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "24f48edc-3ead-4bf0-8860-c68447a0cf4e",
          ...formState,
          subject: `New business inquiry from ${formState.name} - ${formState.service_interest}`,
        }),
      });

      const json = await response.json();
      if (json.success) {
        handleServerResponse(
          true,
          "Thank you! Our team will contact you shortly to discuss how we can support your business needs."
        );
      } else {
        handleServerResponse(
          false,
          json.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      handleServerResponse(
        false,
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          id="contact-form"
        >
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Empower Your Business{" "}
              <span className="text-emerald-500">Growth</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Partner with Hired Nest for innovative workforce solutions that
              drive sustainable growth. From comprehensive payroll management to
              flexible staffing solutions, wer&apos;e here to support your
              business success.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Streamlined Payroll Management",
                "On-Demand Workforce Solutions",
                "Merchant Acquisition Services",
                "Affiliate Marketing Expertise",
                "Comprehensive Staffing Solutions",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="relative col-span-2 sm:col-span-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="Full Name"
                      required
                      disabled={status.submitting}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative col-span-2 sm:col-span-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="Business Email"
                      required
                      disabled={status.submitting}
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative col-span-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                      placeholder="Phone Number"
                      required
                      disabled={status.submitting}
                    />
                  </div>

                  {/* Company Website Input */}
                  <div className="relative col-span-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        name="website"
                        value={formState.website}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                        placeholder="Company Website"
                        disabled={status.submitting}
                      />
                    </div>
                  </div>

                  {/* Service Interest Dropdown */}
                  <div className="relative col-span-2">
                    <select
                      name="service_interest"
                      value={formState.service_interest}
                      onChange={handleChange}
                      className="block w-full pl-3 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
                      required
                      disabled={status.submitting}
                    >
                      <option value="">Select Service Interest</option>
                      <option value="Payroll Management">
                        Payroll Management
                      </option>
                      <option value="On-Demand Gig Workforce">
                        On-Demand Gig Workforce
                      </option>
                      <option value="Merchant Acquisition">
                        Merchant Acquisition Services
                      </option>
                      <option value="Affiliate Marketing">
                        Affiliate Marketing Solutions
                      </option>
                      <option value="Staffing Solutions">
                        Comprehensive Staffing Solutions
                      </option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="relative col-span-2">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={3}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                      placeholder="Tell us about your business needs and how we can help..."
                      required
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: status.submitting ? 1 : 1.02 }}
                  whileTap={{ scale: status.submitting ? 1 : 0.98 }}
                  disabled={status.submitting}
                >
                  {status.submitting
                    ? "Sending..."
                    : "Start Your Growth Journey"}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Status Messages */}
                {status.info.error && (
                  <div className="mt-4 p-4 bg-red-50 text-red-500 rounded-xl">
                    Error: {status.info.msg}
                  </div>
                )}
                {status.submitted && (
                  <div className="mt-4 p-4 bg-emerald-50 text-emerald-500 rounded-xl">
                    {status.info.msg}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
