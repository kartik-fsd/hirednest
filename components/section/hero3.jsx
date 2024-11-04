"use client";
import Image from "next/image";
import { useEffect, useState, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Building,
  BarChart3,
  IndianRupeeIcon,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import hero from "@/app/assets/images/hero.jpg";
import Link from "next/link";

// Reusable components
const GradientText = memo(({ children, className = "" }) => (
  <motion.span
    className={`bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.span>
));

GradientText.displayName = "GradientText";

const FeatureCard = memo(({ icon: Icon, text }) => (
  <div className="group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
    <div className="relative flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl border border-green-100/50 shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className="text-sm font-medium text-gray-800">{text}</span>
    </div>
  </div>
));

FeatureCard.displayName = "FeatureCard";

// Reusable InfoCard component for floating cards
const InfoCard = memo(
  ({
    position,
    icon: Icon,
    gradient,
    title,
    subtitle,
    value,
    animation = {},
  }) => (
    <motion.div {...animation} className={`absolute ${position} z-20`}>
      <div className="relative group">
        <div
          className={`absolute inset-0 ${gradient} rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300`}
        />
        <div className="relative bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-green-100/50 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="relative">
              <div
                className={`absolute inset-0 ${gradient} blur-lg opacity-40`}
              />
              <div
                className={`relative w-12 h-12 ${gradient} rounded-xl flex items-center justify-center shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="space-y-1">
              {value && (
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {value}
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                </div>
              )}
              <div className="text-sm font-medium text-gray-800">{title}</div>
              {subtitle && (
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  {subtitle}
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
);

InfoCard.displayName = "InfoCard";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  const imageScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    { icon: Building, text: "Payroll Management" },
    { icon: BarChart3, text: "Affiliate Marketing" },
    { icon: IndianRupeeIcon, text: "Gig Workforce" },
  ];

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-8 py-20">
            <div className="h-12 bg-green-100 rounded-xl w-2/3" />
            <div className="h-8 bg-green-100 rounded-xl w-1/2" />
            <div className="h-32 bg-green-100 rounded-2xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10  relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200/50 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">
                  Leading Workforce & Payroll Solutions
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="block text-gray-900"
                >
                  Empowering
                </motion.span>
                <GradientText className="block font-extrabold">
                  Workforce Transformation
                </GradientText>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="block text-gray-800"
                >
                  & Business Success
                </motion.span>
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl text-gray-600 max-w-xl"
              >
                Empowering enterprises with cutting-edge solutions for growth,
                talent optimization, and sustainable success in the digital age.
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <Link
                href={"/#contact-form"}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2">
                  Transform Your Business
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <div className="hidden lg:block relative">
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 mix-blend-overlay z-10" />
                <motion.div
                  className="relative w-full h-full"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={hero}
                    alt="Modern Business Solutions"
                    fill
                    priority
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Floating Cards */}
                  <InfoCard
                    position="bottom-[-2rem] left-1/2 transform -translate-x-1/2 w-[280px]"
                    icon={TrendingUp}
                    gradient="bg-gradient-to-r from-green-500 to-emerald-500"
                    title="Business Growth"
                    subtitle="Successful partnerships"
                    value="50K+"
                  />

                  <InfoCard
                    position="left-[-2rem] top-1/4 w-[260px]"
                    icon={Target}
                    gradient="bg-gradient-to-r from-emerald-500 to-teal-500"
                    title="Active Projects"
                    subtitle="Success rate"
                    value="95%"
                  />

                  <InfoCard
                    position="right-[-1rem] top-8 w-[160px]"
                    icon={Users}
                    gradient="bg-gradient-to-r from-teal-500 to-green-500"
                    title="1K+ Talents"
                    animation={floatingAnimation}
                  />
                </motion.div>
              </div>

              {/* Background Accents */}
              <div className="absolute -inset-4 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl transform -rotate-2" />
                <div className="absolute inset-0 bg-gradient-to-l from-green-100 to-emerald-100 rounded-2xl transform rotate-1" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
