import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../../assets/images/service-bg.png";

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
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, autoScrollInterval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };
  
  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern - Fixed */}
      <div
        className="absolute inset-x-0 top-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center top',
          backgroundSize: '120% auto',
          backgroundRepeat: 'no-repeat',
          height: '120%', // Increased height to prevent cutting
          opacity: '0.2',
          transform: 'translateY(-5%)', // Adjusted to prevent vertical cut
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#01A8DB] drop-shadow-lg">SERVICES</h1>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center overflow-hidden max-w-7xl mx-auto">
          {/* Left & Right Buttons */}
          <button
            onClick={prevService}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hover:opacity-70 transition-opacity"
          >
            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="#00264C" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center justify-center relative w-full h-[450px] md:h-[550px]">
            <AnimatePresence>
              {services.map((service, index) => {
                const isCurrent = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + services.length) % services.length;
                const isNext = index === (currentIndex + 1) % services.length;
                
                let xValue;
                let scale = 0.85;
                let opacity = 0.7;
                let zIndex = 5;
                let gradient;
                let className = "rounded-3xl p-8 md:p-10 text-center backdrop-blur-md";

                if (isCurrent) {
                  xValue = "0%";
                  scale = 1;
                  opacity = 1;
                  zIndex = 10;
                  gradient = "#5DD9FF";
                  className += " shadow-xl border border-gray-100";
                } else if (isPrev) {
                  xValue = "-65%"; // Increased space
                  gradient = "linear-gradient(to left, #5dd9ff, transparent)";
                } else if (isNext) {
                  xValue = "65%"; // Increased space
                  gradient = "linear-gradient(to right, #5dd9ff, transparent)";
                } else {
                  return null;
                }

                return (
                  <motion.div
                    key={index}
                    className="absolute flex-shrink-0 w-[300px] md:w-[550px] cursor-pointer"
                    onClick={() => setCurrentIndex(index)}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{
                      x: xValue,
                      scale: scale,
                      opacity: opacity,
                      zIndex: zIndex,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <div
                      className={`${className} flex flex-col justify-between`}
                      style={{
                        background: gradient,
                        minHeight: "350px",
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold pt-4 text-[#00264C]">
                        {service.title}
                      </h3>
                      <div className="flex-grow flex items-center justify-center">
                        <div className="w-20 h-1 bg-[#00264C] mb-6"></div>
                      </div>
                      <p className="text-lg md:text-xl text-[#00264C] pb-4">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <button
            onClick={nextService}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hover:opacity-70 transition-opacity"
          >
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
              } transition-all duration-300 cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}