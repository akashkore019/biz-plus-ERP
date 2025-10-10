import React from 'react'
import { motion } from 'framer-motion'
import dashboardImageSrc from "../../assets/images/hero-right.png";
import heroImageSrc from "../../assets/images/service-circle.png";
import BlinkingCircles from '../common/BlinkingCircles';

export default function HeroSection() {
  return (
    <>
      <style>
        {`
          @keyframes blink-faded {
            0%, 100% { opacity: 0; transform: scale(0.9) translate(0, 0); }
            50% { opacity: 0.3; transform: scale(1.1) translate(10px, -10px); }
          }
          .animate-blink-faded {
            animation: blink-faded var(--animation-duration) ease-in-out infinite;
          }
          .headline-style {
            text-shadow: 2px 3px 6px rgba(0, 0, 0, 0.4);
          }
          @keyframes rotate-smoothly {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-rotate-smoothly {
            animation: rotate-smoothly 20s linear infinite;
            transform-origin: center center;
          }
        `}
      </style>

      <section
        id="home"
        className="bg-gradient-to-r from-[#5dd9ff] to-[#b3eaff] overflow-hidden relative min-h-screen flex items-center"
      >
        <BlinkingCircles />

        <div className="mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6 flex flex-col mt-60 text-left"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 headline-style text-[#ffff]">
                Empower Your Business with BizPlus ERP
              </h1>
              <p className="text-lg md:text-xl mb-8 text-[#00264C]/90 max-w-2xl">
                A modern cloud enterprise solution to streamline operations, improve productivity, 
                and make smarter decisions anytime, anywhere.A modern cloud enterprise solution to streamline operations, improve productivity, 
                and make smarter decisions anytime, anywhere.A modern cloud enterprise solution to streamline operations, improve productivity, 
                and make smarter decisions anytime, anywhere.A modern cloud enterprise solution to streamline operations, improve productivity, 
                and make smarter decision
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  style={{ color: '#043873', borderColor: 'white' }}
                  className="bg-white text-blue-600 px-8 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg no-underline hover:no-underline"
                >
                  Get Started
                </a>

                <a
                  href="#pricing"
                  style={{ color: '#043873', borderColor: 'white' }}
                  className="border-2 border-white  px-8 py-2 rounded-lg font-semibold hover:bg-white/20 transition-all shadow-lg no-underline hover:no-underline"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative md:col-span-5 flex justify-start items-center"
            >
              {/* Soft blur background */}
              <div className="absolute -left-32 top-20 w-[500px] h-[500px] rounded-full bg-[#009adf]/40 blur-3xl -z-20"></div>

              {/* Rotating background circle (always square and centered) */}
              <div className="relative flex items-center justify-center w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
                <img
                  src={heroImageSrc}
                  alt="Service Circle"
                  className="w-full h-full animate-rotate-smoothly"
                  style={{
                    objectFit: 'contain',
                    aspectRatio: '1 / 1',
                  }}
                />
              </div>

              {/* Dashboard image (in front) */}
              <div className="relative w-[150%] overflow-hidden -mr-[720px]" style={{ marginTop: '200px', zIndex: 5 }}>
                <img
                  src={dashboardImageSrc}
                  alt="About BizPlus ERP"
                  className="w-full h-auto object-cover relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}