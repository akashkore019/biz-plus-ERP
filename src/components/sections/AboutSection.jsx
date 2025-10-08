import React from 'react';
import { motion } from 'framer-motion';
import mobileImageAbout from "../../assets/images/mobile-image-about.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-[#5dd9ff] to-[#b3eaff] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start relative"
          >
            <div className="absolute -left-10 top-10 w-[400px] h-[400px] rounded-full bg-[#009adf]/40 blur-3xl -z-10"></div>
            <img
              src={mobileImageAbout}
              alt="About BizPlus ERP"
              className="w-[80%] md:w-[70%] lg:w-[65%] drop-shadow-2xl"
            />
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ABOUT US
            </h2>

            <p className="text-lg text-[#00264C] mb-8 leading-relaxed">
              BizPlus ERP is an all-in-one enterprise solution designed for businesses of every size.
              It helps streamline operations, improve productivity, and make smarter decisions with 
              real-time analytics and automation.
            </p>

            {/* Features */}
            <div className="space-y-5">
              {[
                'Secure Data Storage',
                'Modular & Customizable',
                'Real-Time Reports & Analytics',
                'Cloud-based & Accessible Anytime, Anywhere',
                'Easy Integration with CRM, Accounting & Inventory',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center rounded-full py-3 px-6 text-[#00264C] font-semibold shadow-md transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(to right, #ffffff 10%, rgba(1,168,219,0.35) 100%)',
                    boxShadow:
                      '-8px 0 25px rgba(1,168,219,0.45), 0 5px 15px rgba(0,38,76,0.1)',
                  }}
                >
                  <span className="text-base md:text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
