import React from 'react'
import { motion } from 'framer-motion'
import mobileImageAbout from '../../assets/images/mobile-image-about.png'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-[#5dd9ff] to-[#b3eaff] overflow-hidden"
    >
      <div className="mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 ">
          {/* LEFT SIDE IMAGE (cut half, cropped look) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative md:col-span-5 flex justify-start"
          >
            {/* Soft blue blur background */}
            <div className="absolute -left-32 top-10 w-[500px] h-[500px] rounded-full bg-[#009adf]/40 blur-3xl -z-10"></div>

            {/* Half-visible mobile image */}
            <div className="w-[150%] md:w-[130%] overflow-hidden -ml-40 md:-ml-60">
              <img
                src={mobileImageAbout}
                alt="About BizPlus ERP"
                className="w-full h-auto object-cover "
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 md:pl-12 text-left"
          >

              <div className="flex items-center justify-center gap-4 mb-8">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0 transform rotate-180"
                  style={{ color: '#043873' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <h1
                  className="pt-3 text-4xl sm:text-5xl lg:text-7xl font-bold"
                  style={{ color: '#043873' }}
                >
                  About Us
                </h1>
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0"
                  style={{ color: '#043873' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg> 

              </div>
           

            <p className="text-lg text-[#00264C] mb-8 leading-relaxed max-w-2xl">
              BizPlus ERP is an all-in-one enterprise solution designed for
              businesses of every size. It helps streamline operations, improve
              productivity, and make smarter decisions with real-time analytics
              and automation.
            </p>

            {/* Features List */}
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
  )
}
