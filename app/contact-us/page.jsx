"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });
      setFormData({
        name: "",
        email: "",
        companyName: "",
        companyWebsite: "",
        phoneNumber: "",
        message: "",
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
          access_key: "24f48edc-3ead-4bf0-8860-c68447a0cf4e", // Replace with your Web3Forms access key
          ...formData,
          subject: `New contact from ${formData.name} - ${formData.companyName}`,
        }),
      });

      const json = await response.json();
      if (json.success) {
        handleServerResponse(
          true,
          "Thank you for reaching out! We&apos;ll get back to you soon."
        );
      } else {
        handleServerResponse(
          false,
          json.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      handleServerResponse(false, "An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re here to help and answer any question you might have. We
            look forward to hearing from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status.submitting}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status.submitting}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        disabled={status.submitting}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="companyWebsite"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company Website
                      </label>
                      <input
                        type="url"
                        id="companyWebsite"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                        disabled={status.submitting}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      disabled={status.submitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status.submitting}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    ></textarea>
                  </div>

                  {/* Form Status Messages */}
                  {status.info.error && (
                    <div className="p-4 bg-red-50 text-red-500 rounded-md">
                      Error: {status.info.msg}
                    </div>
                  )}
                  {status.submitted && (
                    <div className="p-4 bg-green-50 text-green-500 rounded-md">
                      {status.info.msg}
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={status.submitting}
                      className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status.submitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone
                      className="flex-shrink-0 h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                    <div className="ml-3 text-base text-gray-500">
                      +91 9158780986
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail
                      className="flex-shrink-0 h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                    <div className="ml-3 text-base text-gray-500">
                      business@hirednest.com
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin
                      className="flex-shrink-0 h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                    <address className="ml-3 text-base text-gray-500">
                      <p>Phone: 9158780986</p>
                      <p> SN-34/1, KHARADI ROAD, MAHAPALIKEMADHYE SAMAVISHTA</p>
                      <p> SHREE DATTA HOTEL, YASHWANT NAGAR</p>
                      <p>MAHARASHTRA PUNE CITY, PIN: 411014</p>
                    </address>
                  </div>
                  <div className="flex items-center">
                    <Globe
                      className="flex-shrink-0 h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                    <div className="ml-3 text-base text-gray-500">
                      www.hirednest.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
