import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empower Your Business with BizPlus ERP
            </h1>
            <p className="text-xl mb-8 text-blue-50">
              A modern cloud enterprise solution to streamline operations, improve productivity, 
              and make smarter decisions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Get Started
              </a>
              <a
                href="#pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                View Pricing
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg filter blur-xl"></div>
              <img 
                src="/images/dashboard-preview.png" 
                alt="BizPlus Dashboard Preview" 
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}