import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Blinking gradient circles background (center #5DD9FF, edge white, transparent border)
const BLINK_CIRCLE_COUNT = 5;
const BLINK_DURATION = 3; // seconds

function BlinkingCircles() {
  const [circles, setCircles] = useState(
    Array.from({ length: BLINK_CIRCLE_COUNT }, (_, i) => ({
      id: i,
      size: Math.random() * 180 + 180, // 180px to 360px (bigger circles)
      top: Math.random() * 80,
      left: Math.random() * 80,
      visible: false,
      delay: Math.random() * BLINK_DURATION,
    }))
  );

  useEffect(() => {
    const timers = circles.map((circle, idx) => {
      const blink = () => {
        setCircles((prev) =>
          prev.map((c, i) =>
            i === idx
              ? { ...c, visible: true }
              : c
          )
        );
        setTimeout(() => {
          setCircles((prev) =>
            prev.map((c, i) =>
              i === idx
                ? {
                    ...c,
                    visible: false,
                    size: Math.random() * 180 + 180, // 180px to 360px
                    top: Math.random() * 80,
                    left: Math.random() * 80,
                  }
                : c
            )
          );
        }, BLINK_DURATION * 1000);
      };
      const interval = setInterval(blink, BLINK_DURATION * 2000 + idx * 500);
      setTimeout(blink, circle.delay * 1000);
      return interval;
    });
    return () => timers.forEach(clearInterval);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {circles.map((circle) => (
        <div
          key={circle.id}
          style={{
            position: "absolute",
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            background: `radial-gradient(circle, #5DD9FF 0%, white 60%, transparent 100%)`,
            opacity: circle.visible ? 0.45 : 0,
            borderRadius: "50%",
            transition: `opacity ${BLINK_DURATION}s cubic-bezier(.4,0,.2,1)`,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}

// Animated grid squares with blinking accent
function AnimatedGridSquares() {
  const totalRows = 6;
  const totalCols = 10;
  const totalSquares = totalRows * totalCols;
  const accentCount = 4;

  // Store accent indexes and trigger blink
  const [accentIndexes, setAccentIndexes] = useState([24, 15, 36, 47]);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick random accent squares
      const newIndexes = [];
      while (newIndexes.length < accentCount) {
        const idx = Math.floor(Math.random() * totalSquares);
        if (!newIndexes.includes(idx)) newIndexes.push(idx);
      }
      setBlink(false);
      setTimeout(() => {
        setAccentIndexes(newIndexes);
        setBlink(true);
      }, 200); // short fade out before new accent
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Accent colors for gradient borders
 const accentColors = [
    "#00264C",
    "#23406A",
    "#3B5A8C",
    "#4C6CA3",
    "#5DD9FF",
    "#A1B8D8",
    "#B3C7E6",
    "#D6E6F2",
    "#7A90B4",
    "#405A7F",
  ];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 640"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="borderBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5DD9FF" />
          <stop offset="100%" stopColor="#B388FF" />
        </linearGradient>
        <linearGradient id="borderPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B388FF" />
          <stop offset="100%" stopColor="#5DD9FF" />
        </linearGradient>
      </defs>
      {[...Array(totalRows)].map((_, row) =>
        [...Array(totalCols)].map((_, col) => {
          const idx = row * totalCols + col;
          const accent = accentIndexes.includes(idx);
          const color = accent ? accentColors[idx % accentColors.length] : "#f3f6fa";
          return (
            <rect
              key={`sq-${row}-${col}`}
              x={col * 100 + 50}
              y={row * 100 + 40}
              rx="24"
              ry="24"
              width="90"
              height="90"
              fill="#fff"
              stroke={color}
              strokeWidth={accent ? "2.5" : "1"}
              opacity={accent ? (blink ? "1" : "0.3") : "0.7"}
              style={{
                transition: "stroke 0.8s, opacity 0.5s",
              }}
            />
          );
        })
      )}
    </svg>
  );
}

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
    <section
      id="services"
      className="py-20 relative overflow-hidden"
      style={{
        background: "#fff", // white base
      }}
    >
      {/* Animated Grid Pattern Background with Gradient Borders */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <AnimatedGridSquares />
      </div>

      {/* Blinking Gradient Circles Overlay */}
      <BlinkingCircles />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5DD9FF] drop-shadow-lg">
            SERVICES
          </h1>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center overflow-hidden mx-auto">
          {/* Left Button */}
          <button
            onClick={prevService}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hover:opacity-70 transition-opacity"
          >
            <svg
              className="w-10 h-10 md:w-14 md:h-14"
              fill="none"
              stroke="#00264C"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
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
                let className = "rounded-3xl p-8 md:p-10 text-center backdrop-blur-md transition-all duration-500";

                if (isCurrent) {
                  xValue = "0%";
                  scale = 1;
                  opacity = 1;
                  zIndex = 10;
                  gradient = "#5DD9FF";
                  className += " shadow-2xl border border-gray-100";
                } else if (isPrev) {
                  xValue = "-100%";
                  scale = 0.85;
                  opacity = 0.6;
                  zIndex = 5;
                  gradient = "linear-gradient(to left, #5dd9ff, transparent)";
                } else if (isNext) {
                  xValue = "100%";
                  scale = 0.85;
                  opacity = 0.6;
                  zIndex = 5;
                  gradient = "linear-gradient(to right, #5dd9ff, transparent)";
                } else {
                  return null;
                }

                return (
                  <motion.div
                    key={index}
                    className="absolute flex-shrink-0 w-[300px] md:w-[500px] cursor-pointer"
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
                      <p className="text-lg md:text-xl text-[#00264C] pb-4">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Button */}
          <button
            onClick={nextService}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hover:opacity-70 transition-opacity"
          >
            <svg
              className="w-10 h-10 md:w-14 md:h-14"
              fill="none"
              stroke="#00264C"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
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