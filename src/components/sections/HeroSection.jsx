import React from 'react';
import BlinkingCircles from '../common/BlinkingCircles';
import heroImageSrc from "../../assets/images/service-circle.png";
// Add your new image to assets/images and import here
import dashboardImageSrc from "../../assets/images/hero-right.png"; // Update path if needed

export default function HeroSection() {
  return (
    <>
      {/* Custom Tailwind keyframes for the blinking animation, headline style, and image rotation */}
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
          animation: rotate-smoothly 20s linear infinite; /* 20s for one full rotation, linear for constant speed */
        }
        `}
      </style>

      <section id="home" className="min-h-screen flex items-center text-white relative" style={{ backgroundColor: '#5DD9FF' }}>
        <BlinkingCircles />
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center py-16 md:py-0">
            {/* Left Content Column */}
            <div className="md:w-1/2 fade-in">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight headline-style">
                Empower Your Business with BizPlus ERP
              </h1>
              <p className="text-xl mb-8 text-white/90">
                A modern cloud enterprise solution to streamline operations, improve productivity, 
                and make smarter decisions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
                >
                  Get Started
                </a>
                <a
                  href="#pricing"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all shadow-lg"
                >
                  View Pricing
                </a>
              </div>
            </div>

            {/* Right Image Column: Adjusted for top alignment and rotation */}
            {/* Added 'items-start' to align content to the top within this flex container */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-start items-start"> 
              <div className="relative w-full h-[520px] md:h-[620px] flex items-end justify-end">
                {/* Service circle image (original size and position) */}
                <img
                  src={heroImageSrc}
                  alt="Service Circle"
                  className="absolute animate-rotate-smoothly"
                  style={{
                    top: '0',
                    left: '0',
                    width: '120px',
                    height: '120px',
                    zIndex: 1,
                    opacity: 1,
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/120x120/3498db/FFFFFF?text=Circle+Error";
                  }}
                />
                {/* Hero right image (big, flush right and bottom) */}
                <img
                  src={dashboardImageSrc}
                  alt="Dashboard Overview"
                  className="object-contain drop-shadow-2xl"
                  style={{
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    maxWidth: '520px',
                    maxHeight: '620px',
                    zIndex: 2,
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/520x620/3498db/FFFFFF?text=Dashboard+Error";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}