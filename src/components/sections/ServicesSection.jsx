import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { title: "Reports & Analytics", description: "Get smart insights with visual dashboards and KPIs." },
  { title: "Cloud Based Access", description: "Access your data securely from anywhere, anytime. Built with enterprise-grade security." },
  { title: "Easy Integration", description: "Seamlessly integrate with CRM, accounting & inventory systems." },
  { title: "Inventory Management", description: "Track and manage inventory in real-time with automated alerts." },
  { title: "Financial Reporting", description: "Comprehensive financial reports and analytics for better decision making." },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      nextService();
    }, autoScrollInterval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextService = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prevService = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="servicePattern" x="0" y="0" width="500" height="500" patternUnits="userSpaceOnUse">
              <path d="M 0 100 L 100 100 L 100 150 L 200 150" stroke="#00264C" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 200 150 L 200 250 L 300 250" stroke="#00264C" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 300 250 L 400 250 L 400 200 L 500 200" stroke="#00264C" strokeWidth="2" fill="none" opacity="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#servicePattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#01A8DB]">SERVICES</h2>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center overflow-hidden max-w-7xl mx-auto">
          {/* Left & Right Buttons */}
          <button onClick={prevService} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hover:opacity-70">
            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="#00264C" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center justify-center relative w-full h-[400px]">
            <AnimatePresence>
              {services.map((service, index) => {
                const offset = (index - currentIndex + services.length) % services.length;

                // Show only prev, current, next
                if (offset > 2 && offset < services.length - 2) return null;

                let scale = 0.7;
                let opacity = 0.4;
                let zIndex = 0;
                let gradient = "linear-gradient(to right, rgba(255,255,255,0.3), rgba(0,38,76,0.1))";

                if (offset === 0) {
                  scale = 1;
                  opacity = 1;
                  zIndex = 10;
                  gradient = "#5dd9ff"; // Solid clean background for center card

                } else if (offset === 1 || offset === services.length - 1) {
                  scale = 0.85;
                  opacity = 0.7;
                  zIndex = 5;
                  gradient = "linear-gradient(145deg, rgba(1,168,219,0.4), rgba(0,38,76,0.2))";
                }

                // spacing magic ✨
                const xValue =
                  offset === 0
                    ? 0
                    : offset === 1
                    ? 550 // right side spacing
                    : offset === services.length - 1
                    ? -550 // left side spacing
                    : 0;

                return (
                  <motion.div
                    key={index}
                    className="absolute flex-shrink-0 w-[350px] md:w-[550px]"
                    animate={{
                      x: xValue,
                      scale,
                      opacity,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ zIndex }}
                  >
                    <div
                      className="rounded-3xl p-10 text-center shadow-xl backdrop-blur-md"
                      style={{
                        background: gradient,
                        minHeight: "350px",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#00264C]">
                        {service.title}
                      </h3>
                      <div className="w-20 h-1 bg-[#00264C] mx-auto mb-6"></div>
                      <p className="text-lg md:text-xl text-[#00264C]">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <button onClick={nextService} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hover:opacity-70">
            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="#00264C" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 space-x-3">
          {services.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#00264C]" : "bg-gray-300"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
