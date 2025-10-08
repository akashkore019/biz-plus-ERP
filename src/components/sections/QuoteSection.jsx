import React from 'react';

export default function QuoteSection() {
  const quote = "Transform your business with BizPlus ERP - The complete solution for modern enterprises • Streamline operations and boost productivity • Real-time insights for better decisions";

  return (
    <section className="py-2 bg-white overflow-hidden">
      <div className="relative">
        {/* Scrolling Quote Container */}
        <div className="relative overflow-hidden py-1">
          {/* Left Gradient Overlay - White to Transparent */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Right Gradient Overlay - Transparent to White */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Text - Right to Left */}
          <div className="flex animate-scroll whitespace-nowrap">
            <span className="text-lg md:text-xl text-gray-800 inline-block pr-12" style={{ fontFamily: 'Syncopate, sans-serif', fontWeight: 700 }}>
              {quote}
            </span>
            <span className="text-lg md:text-xl text-gray-800 inline-block pr-12" style={{ fontFamily: 'Syncopate, sans-serif', fontWeight: 700 }}>
              {quote}
            </span>
            <span className="text-lg md:text-xl text-gray-800 inline-block pr-12" style={{ fontFamily: 'Syncopate, sans-serif', fontWeight: 700 }}>
              {quote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
