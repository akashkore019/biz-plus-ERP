import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
    author: "RAYHAN CURRAN",
    image: "/images/testimonial1.jpg"
  },
  {
    quote: "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    author: "KAYLEY FRAME",
    image: "/images/testimonial2.jpg"
  },
  {
    quote: "The most important part of the Startup Framework is the samples",
    author: "GENE WHITFIELD",
    image: "/images/testimonial3.jpg"
  },
  {
    quote: "I've built my website with Startup just in one day, and it was ready-to-go.",
    author: "ALLAN KIM",
    image: "/images/testimonial4.jpg"
  },
  {
    quote: "BizPlus ERP has completely revolutionized our workflow. The automation features save us hours every day.",
    author: "JESSICA MARTINEZ",
    image: "/images/testimonial5.jpg"
  },
  {
    quote: "The reporting capabilities are outstanding. We can now make data-driven decisions with confidence.",
    author: "ROBERT CHEN",
    image: "/images/testimonial6.jpg"
  },
  {
    quote: "Implementation was smooth and the training provided was exceptional. Our team was up and running in no time.",
    author: "EMILY THOMPSON",
    image: "/images/testimonial7.jpg"
  },
  {
    quote: "The integration with our existing systems was seamless. This platform truly understands business needs.",
    author: "DAVID PATEL",
    image: "/images/testimonial8.jpg"
  },
  {
    quote: "Customer support is always responsive and helpful. They go above and beyond to ensure our success.",
    author: "SOPHIA RODRIGUEZ",
    image: "/images/testimonial9.jpg"
  },
  {
    quote: "The mobile app keeps us connected and productive even when we're away from the office.",
    author: "JAMES WILSON",
    image: "/images/testimonial10.jpg"
  },
  {
    quote: "Our efficiency has increased by 40% since implementing BizPlus ERP. Couldn't be happier with the results.",
    author: "OLIVIA ANDERSON",
    image: "/images/testimonial11.jpg"
  },
  {
    quote: "The customization options allowed us to tailor the system perfectly to our unique business processes.",
    author: "WILLIAM BROWN",
    image: "/images/testimonial12.jpg"
  },
  {
    quote: "Security features are top-notch. We feel confident that our sensitive data is well protected.",
    author: "AVA JOHNSON",
    image: "/images/testimonial13.jpg"
  },
  {
    quote: "The dashboard gives us real-time insights that help us stay ahead of potential issues.",
    author: "ETHAN DAVIS",
    image: "/images/testimonial14.jpg"
  },
  {
    quote: "Collaboration across departments has never been easier. Everyone is on the same page now.",
    author: "MIA TAYLOR",
    image: "/images/testimonial15.jpg"
  },
  {
    quote: "Best investment we've made for our business. The ROI was evident within the first quarter.",
    author: "NOAH GARCIA",
    image: "/images/testimonial16.jpg"
  }
];

function TestimonialCard({ quote, author, image }) {
  return (
    <div className="border border-white rounded-2xl p-8 bg-transparent backdrop-blur-sm flex flex-col" style={{ minHeight: '240px', maxHeight: '240px' }}>
      <div className="flex items-start gap-6 mb-6 flex-1 overflow-hidden">
        <img 
          src={image} 
          alt={author}
          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect width="64" height="64" fill="%23334155"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="24" font-family="Arial"%3E' + author.charAt(0) + '%3C/text%3E%3C/svg%3E';
          }}
        />
        <div className="flex-1 overflow-hidden">
          <p className="text-white text-base leading-relaxed" style={{ 
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>{quote}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto flex-shrink-0">
        <p className="text-gray-400 text-sm font-medium tracking-wider">{author}</p>
        <div className="flex items-center gap-1">
          <span className="text-gray-400 text-sm">16 reviews</span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const autoPlayInterval = 5000; // 5 seconds

  // Auto-play functionality for desktop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [totalPages]);

  // Auto-play functionality for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, []);

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextMobile = () => {
    setCurrentMobileIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevMobile = () => {
    setCurrentMobileIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#00264C' }}>
      {/* Curved lines background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="curves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path 
                d="M 0 100 Q 50 50 100 100 T 200 100" 
                stroke="#A1A1A1" 
                strokeWidth="1" 
                fill="none"
              />
              <path 
                d="M 0 150 Q 50 100 100 150 T 200 150" 
                stroke="#A1A1A1" 
                strokeWidth="1" 
                fill="none"
              />
              <circle cx="100" cy="100" r="80" stroke="#A1A1A1" strokeWidth="1" fill="none" />
              <circle cx="150" cy="50" r="60" stroke="#A1A1A1" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#curves)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Happy Clients</h2>
        </div>

        {/* Desktop View - Navigation Arrows with Grid */}
        <div className="hidden md:flex items-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={prevPage}
            className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-white bg-transparent hover:bg-white/10 transition-colors flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              {getCurrentTestimonials().map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextPage}
            className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-white bg-transparent hover:bg-white/10 transition-colors flex items-center justify-center"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet View - Carousel with peek */}
        <div className="md:hidden relative">
          {/* Carousel Container */}
          <div className="overflow-hidden relative">
            {/* Gradient Overlay on Right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#00264C] to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentMobileIndex * 95}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-[95%] pr-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow - Positioned over content */}
          <button
            onClick={prevMobile}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white bg-[#00264C]/80 backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center justify-center z-20"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow - Positioned over content */}
          <button
            onClick={nextMobile}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white bg-[#00264C]/80 backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center justify-center z-20"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots - Desktop */}
        <div className="hidden md:flex justify-center gap-2 mt-12">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentPage === index ? 'bg-white' : 'bg-white/30'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Pagination Dots - Mobile */}
        <div className="md:hidden flex justify-center gap-2 mt-12">
          {(() => {
            const totalDots = testimonials.length;
            const maxVisibleDots = 4;
            let startIndex = Math.max(0, Math.min(currentMobileIndex - 1, totalDots - maxVisibleDots));
            let endIndex = Math.min(startIndex + maxVisibleDots, totalDots);
            
            // Adjust if we're at the end
            if (endIndex - startIndex < maxVisibleDots) {
              startIndex = Math.max(0, endIndex - maxVisibleDots);
            }
            
            return testimonials.slice(startIndex, endIndex).map((_, index) => {
              const actualIndex = startIndex + index;
              return (
                <button
                  key={actualIndex}
                  onClick={() => setCurrentMobileIndex(actualIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentMobileIndex === actualIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${actualIndex + 1}`}
                />
              );
            });
          })()}
        </div>
      </div>
    </section>
  );
}