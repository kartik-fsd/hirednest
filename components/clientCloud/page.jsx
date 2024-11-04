"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import Image from "next/image";
import AngelOne from "@/app/assets/svg/AngelOne.svg";
import AxisBank from "@/app/assets/svg/AxisBank.svg";
import Blinkit from "@/app/assets/svg/Blinkit.svg";
import DBS_Bank from "@/app/assets/svg/DBS_Bank.svg";
import HDFC from "@/app/assets/svg/HDFC.svg";
import Kotak from "@/app/assets/svg/KotakBank.svg";
import SBI from "@/app/assets/svg/SBI.svg";
import Swiggy from "@/app/assets/svg/Swiggy.svg";
import Upstox from "@/app/assets/svg/Upstox.svg";
import Zepto from "@/app/assets/svg/Zepto.svg";
import Zomato from "@/app/assets/svg/Zomato.svg";
import ShareMarket from "@/app/assets/svg/Share.Market.svg";

const ClientShowcase = () => {
  // Updated clients array with image paths
  const clients = [
    {
      name: "Anegl One",
      domain: "angelone.in",
      color: "from-purple-500 to-purple-600",
      logo: AngelOne,
    },
    {
      name: "Axis Bank",
      domain: "axisbank.com",
      color: "from-burgundy-500 to-burgundy-600",
      logo: AxisBank,
    },
    {
      name: "Blinkit",
      domain: "blinkit.com",
      color: "from-yellow-500 to-yellow-600",
      logo: Blinkit,
    },
    {
      name: "DBS Bank",
      domain: "dbs.com",
      color: "from-red-500 to-red-600",
      logo: DBS_Bank,
    },
    {
      name: "HDFC Bank",
      domain: "hdfcbank.com",
      color: "from-blue-500 to-blue-600",
      logo: HDFC,
    },
    {
      name: "Kotak Bank",
      domain: "kotak.com",
      color: "from-red-600 to-red-700",
      logo: Kotak,
    },
    {
      name: "State Bank of India",
      domain: "sbi.co.in",
      color: "from-blue-600 to-blue-700",
      logo: SBI,
    },
    {
      name: "Swiggy",
      domain: "swiggy.com",
      color: "from-orange-500 to-orange-600",
      logo: Swiggy,
    },
    {
      name: "Upstox",
      domain: "upstox.com",
      color: "from-teal-500 to-teal-600",
      logo: Upstox,
    },
    {
      name: "Zepto",
      domain: "zepto.com",
      color: "from-purple-600 to-purple-700",
      logo: Zepto,
    },
    {
      name: "Zomato",
      domain: "zomato.com",
      color: "from-red-500 to-red-600",
      logo: Zomato,
    },
    {
      name: "Share.Market",
      domain: "Share.Market.com",
      logo: ShareMarket,
    },
  ];

  // Reusable client card component
  const ClientCard = ({ client, trackIndex, idx }) => (
    <motion.div
      key={`${trackIndex}-${idx}`}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg min-w-[240px] border border-gray-100"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="w-16 h-16 mb-4 relative">
        <Image
          src={client.logo}
          alt={`${client.name} logo`}
          fill
          className="object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.innerHTML = `<span class="absolute inset-0 flex items-center justify-center text-xl font-bold">${client.name[0]}</span>`;
          }}
        />
      </div>
      <p className="font-medium text-gray-800 mb-1">{client.name}</p>
      <p className="text-sm text-gray-500">{client.domain}</p>
    </motion.div>
  );

  // Reusable track component
  const Track = ({ direction = "left", delay = 0 }) => (
    <motion.div
      className="overflow-hidden py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {[...Array(2)].map((_, trackIndex) => (
          <div
            key={`track-${direction}-${trackIndex}`}
            className="flex gap-6 min-w-max"
          >
            {(direction === "left" ? clients : [...clients].reverse()).map(
              (client, idx) => (
                <ClientCard
                  key={`${direction}-${trackIndex}-${idx}`}
                  client={client}
                  trackIndex={trackIndex}
                  idx={idx}
                />
              )
            )}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section className="relative py-6 md:py-10 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(236, 253, 245, 0) 50%, rgba(236, 253, 245, 1) 80%),
            linear-gradient(to bottom, rgba(236, 253, 245, 0) 70%, rgba(236, 253, 245, 1) 80%),
            linear-gradient(to left, #4ade80 1px, transparent 1px),
            linear-gradient(to top, #4ade80 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 30px 30px, 30px 30px",
          opacity: 0.15,
        }}
      />

      {/* Decorative Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 opacity-[0.07]">
          <div className="absolute inset-0 rotate-45 transform scale-110">
            <div
              className="absolute inset-0 rotate-45 bg-gradient-to-r from-green-600 to-emerald-600"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
            />
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-72 h-72">
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 to-gray-600" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-500" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-400" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-[85ch] mx-auto text-center space-y-6 md:space-y-8 mb-5 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gray-100 shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Building2 className="w-4 h-4 text-green-600" />
            <p className="text-sm md:text-base font-medium bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Trusted by 50+ businesses
            </p>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Empowering the Gig Economy
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From innovative startups to established enterprises, our solutions
            power the future of work.
          </p>
        </motion.div>

        {/* Scrolling Tracks */}
        <div className="relative">
          <Track direction="left" delay={0.3} />
          <Track direction="right" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
