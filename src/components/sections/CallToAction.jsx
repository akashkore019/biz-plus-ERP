import React, { useState } from 'react'

export default function CallToAction() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleLearnMore = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Lines */}
        <div className="absolute inset-0 flex justify-between">
          {[...Array(10)].map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="w-px h-full"
              style={{ backgroundColor: '#5DD9FF' }}
            />
          ))}
        </div>
        {/* Horizontal Lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(8)].map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="h-px w-full"
              style={{ backgroundColor: '#5DD9FF' }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!isExpanded ? (
          // Normal View - Two Columns
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Video Box */}
            <div>
              <div 
                className="w-full h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden relative bg-gray-100"
                style={{ 
                  boxShadow: 'inset 15px 15px 30px rgba(0, 0, 0, 0.2), inset -15px -15px 30px rgba(0, 0, 0, 0.2), inset 0 15px 30px rgba(0, 0, 0, 0.2), inset 0 -15px 30px rgba(0, 0, 0, 0.2)' 
                }}
              >
                {/* Video Placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center transition cursor-pointer" style={{ backgroundColor: '#043873' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#032d5e'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#043873'}
                  >
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 pt-1">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 transform rotate-180" style={{ color: '#043873' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold flex-1 leading-tight" style={{ color: '#043873' }}>
                  Better design for your content
                </h2>
                <div className="flex-shrink-0 pt-1">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16" style={{ color: '#043873' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
                Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support.
              </p>

              <button 
                onClick={handleLearnMore}
                className="px-8 py-3 border-2 rounded-full transition-all duration-300 font-semibold text-base sm:text-lg"
                style={{ borderColor: '#043873', color: '#043873' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#043873'
                  e.target.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.color = '#043873'
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        ) : (
          // Expanded View - Video Centered, Content Below
          <div className="max-w-5xl mx-auto">
            {/* Centered Video Box */}
            <div className="mb-8">
              <div 
                className="w-full h-72 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden relative bg-gray-100"
                style={{ 
                  boxShadow: 'inset 15px 15px 30px rgba(0, 0, 0, 0.2), inset -15px -15px 30px rgba(0, 0, 0, 0.2), inset 0 15px 30px rgba(0, 0, 0, 0.2), inset 0 -15px 30px rgba(0, 0, 0, 0.2)' 
                }}
              >
                {/* Video Placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center transition cursor-pointer" style={{ backgroundColor: '#043873' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#032d5e'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#043873'}
                  >
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Below Video */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0 transform rotate-180" style={{ color: '#043873' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#043873' }}>
                  Better design for your content
                </h2>
                <svg className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0" style={{ color: '#043873' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              <div className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
                <p className="mb-4">
                  Our platform provides you with all the tools you need to create stunning, professional websites that look amazing on any device. With built-in responsive design features and optimized assets, your content will always appear crisp and clear.
                </p>
                <p className="mb-4">
                  We've carefully crafted every component to ensure pixel-perfect rendering on high-resolution displays. From typography to images, everything is optimized for retina screens, giving your users the best possible viewing experience.
                </p>
                <p>
                  Join thousands of satisfied customers who have already discovered the power of our framework. Start building beautiful, modern websites today and see the difference that quality design makes.
                </p>
              </div>

              <button 
                onClick={handleLearnMore}
                className="px-8 py-3 border-2 rounded-full transition-all duration-300 font-semibold text-base sm:text-lg"
                style={{ borderColor: '#043873', color: '#043873' }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#043873'
                  e.target.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent'
                  e.target.style.color = '#043873'
                }}
              >
                Show Less
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
