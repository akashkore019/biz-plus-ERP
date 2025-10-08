import React, { useState, useEffect } from 'react';

const services = [
  {
    title: "Reports & Analytics",
    description: "Get smart insights with visual dashboards and KPIs."
  },
  {
    title: "Cloud Based Access",
    description: "Access your data securely from anywhere, anytime. Built with enterprise-grade security."
  },
  {
    title: "Easy Integration",
    description: "Seamlessly integrate with CRM, accounting & inventory systems."
  },
  {
    title: "Inventory Management",
    description: "Track and manage inventory in real-time with automated alerts."
  },
  {
    title: "Financial Reporting",
    description: "Comprehensive financial reports and analytics for better decision making."
  }
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollInterval = 5000; // 5 seconds

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, autoScrollInterval);

    return () => clearInterval(timer);
  }, []);

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[currentIndex];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Modern Futuristic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="servicePattern" x="0" y="0" width="500" height="500" patternUnits="userSpaceOnUse">
              {/* Tech Circuit Lines */}
              <path d="M 0 100 L 100 100 L 100 150 L 200 150" stroke="#00264C" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 200 150 L 200 250 L 300 250" stroke="#00264C" strokeWidth="2" fill="none" opacity="0.7" />
              <path d="M 300 250 L 400 250 L 400 200 L 500 200" stroke="#00264C" strokeWidth="2" fill="none" opacity="0.7" />
              
              {/* Angular Geometric Shapes */}
              <polygon points="50,50 100,50 125,100 100,150 50,150 25,100" stroke="#00264C" strokeWidth="1.5" fill="none" opacity="0.6" />
              <polygon points="350,350 400,350 425,400 400,450 350,450 325,400" stroke="#00264C" strokeWidth="1.5" fill="none" opacity="0.5" />
              
              {/* Concentric Circles - Tech Nodes */}
              <circle cx="100" cy="150" r="8" stroke="#00264C" strokeWidth="2" fill="none" />
              <circle cx="100" cy="150" r="12" stroke="#00264C" strokeWidth="1" fill="none" opacity="0.5" />
              <circle cx="300" cy="250" r="8" stroke="#00264C" strokeWidth="2" fill="none" />
              <circle cx="300" cy="250" r="12" stroke="#00264C" strokeWidth="1" fill="none" opacity="0.5" />
              
              {/* Dotted Grid */}
              <circle cx="150" cy="300" r="2" fill="#00264C" opacity="0.4" />
              <circle cx="450" cy="100" r="2" fill="#00264C" opacity="0.4" />
              <circle cx="250" cy="400" r="2" fill="#00264C" opacity="0.4" />
              
              {/* Angular Brackets - Code Style */}
              <polyline points="380,100 400,120 380,140" stroke="#00264C" strokeWidth="2" fill="none" opacity="0.6" />
              <polyline points="120,380 100,400 120,420" stroke="#00264C" strokeWidth="2" fill="none" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#servicePattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#01A8DB' }}>
            SERVICES
          </h2>
        </div>

        {/* Service Carousel - Center Focus with Side Previews */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow - Aligned to Edge */}
          <button
            onClick={prevService}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 hover:opacity-70 transition-opacity"
            aria-label="Previous service"
          >
            <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="#00264C" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow - Aligned to Edge */}
          <button
            onClick={nextService}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 hover:opacity-70 transition-opacity"
            aria-label="Next service"
          >
            <svg className="w-16 h-16 md:w-20 md:h-20" fill="none" stroke="#00264C" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="relative overflow-hidden mx-20">
            {/* Left Gradient - Only on Previous Card */}
            <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-gray-50 via-gray-50/70 to-transparent z-20 pointer-events-none"></div>
            
            {/* Right Gradient - Only on Next Card */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-gray-50 via-gray-50/70 to-transparent z-20 pointer-events-none"></div>

            {/* Service Cards - Center Current, Show Sides */}
            <div className="relative flex items-center justify-center">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ 
                  transform: `translateX(calc(50% - ${currentIndex * 100}% - ${currentIndex * 700}px - 350px))`,
                }}
              >
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 px-8 transition-all duration-700"
                    style={{ 
                      width: '700px'
                    }}
                  >
                    <div 
                      className="rounded-3xl p-12 relative overflow-hidden"
                      style={{ 
                        backgroundColor: 'rgba(1, 168, 219, 0.5)',
                        backdropFilter: 'blur(10px)',
                        minHeight: '350px',
                        maxHeight: '350px'
                      }}
                    >
                      <div className="relative z-10 text-center flex flex-col justify-center h-full">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#00264C' }}>
                          {service.title}
                        </h3>
                        
                        {/* Horizontal Line */}
                        <div className="w-24 h-1 bg-[#00264C] mx-auto mb-6"></div>
                        
                        <p 
                          className="text-lg md:text-xl line-clamp-3" 
                          style={{ color: '#00264C' }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}