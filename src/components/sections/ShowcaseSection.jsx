import React, { useState } from 'react'
import showcaseImage1 from '../../assets/images/showcase-1.png'

export default function Showcase() {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const showcaseItems = [
    {
      id: 1,
      title: 'Quality you can trust',
      description: 'All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.',
      detailedDescription: 'Our comprehensive quality assurance process ensures that every component meets the highest standards. We use industry-leading practices and technologies to deliver solutions that are reliable, scalable, and maintainable. From initial design to final deployment, quality is at the forefront of everything we do. Our team of experts continuously monitors and improves our products to ensure they exceed your expectations.',
      image: '/showcase_6@2x.png',
      color: 'from-pink-200 to-pink-400',
      bgColor: 'bg-gradient-to-br from-pink-300 to-pink-500'
    },
    {
      id: 2,
      title: 'Fast prototyping',
      description: 'All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.',
      detailedDescription: 'Speed up your development process with our rapid prototyping tools. Create functional prototypes in hours, not weeks. Our intuitive interface and pre-built components allow you to quickly iterate and refine your ideas. Test your concepts with real users and gather feedback early in the development cycle. With our fast prototyping capabilities, you can reduce time-to-market and minimize development risks.',
      image: '/showcase_6@2x.png',
      color: 'from-blue-400 to-blue-700',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-700'
    },
    {
      id: 3,
      title: 'Bootstrap based',
      description: 'All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.',
      detailedDescription: 'Built on the powerful Bootstrap framework, our components are responsive, mobile-first, and fully customizable. Leverage the extensive Bootstrap ecosystem while enjoying our enhanced features and modern design patterns. Our components seamlessly integrate with existing Bootstrap projects, making migration and adoption effortless. Benefit from regular updates and a vast community of developers.',
      image: '/showcase_6@2x.png',
      color: 'from-purple-400 to-orange-400',
      bgColor: 'bg-gradient-to-br from-purple-500 to-orange-500'
    }
  ]

  const handleLearnMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#5dd9ff' }}>
      <div className="container mx-auto">
        {/* BizPlus ERP Text - Horizontal on mobile, Vertical on desktop */}
        <div className="lg:hidden text-center mb-8">
          <h1 
            className="text-white font-bold tracking-wider inline-block"
            style={{ 
              fontFamily: 'Syncopate, sans-serif',
              fontSize: 'clamp(2.5rem, 8vw, 4rem)'
            }}
          >
            <span>BizPlus </span>
            <span 
              style={{ 
                WebkitTextStroke: '2px white',
                WebkitTextFillColor: 'transparent',
                color: 'transparent'
              }}
            >
              ERP
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - BizPlus ERP Text (Vertical - Desktop only) */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-start h-full min-h-[600px] pl-0">
            <h1 
              className="text-white font-bold tracking-wider transform rotate-180"
              style={{ 
                fontFamily: 'Syncopate, sans-serif', 
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
                fontSize: 'clamp(4rem, 10vw, 8rem)'
              }}
            >
              <span>
                BizPlus
              </span>
              <span 
                className="ml-3"
                style={{ 
                  WebkitTextStroke: '3px white',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent'
                }}
              >
                ERP
              </span>
            </h1>
          </div>

          {/* Right Side - Showcase Items */}
          <div className="col-span-1 lg:col-span-10 space-y-6 relative">
            {/* Vertical Lines Background */}
            <div className="absolute flex justify-between pointer-events-none z-0" style={{ top: 0, bottom: 0, left: 0, right: 0, height: '100%' }}>
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="bg-white"
                  style={{ width: '1px', height: '100%' }}
                />
              ))}
            </div>
            
            {/* All Three Items */}
            {showcaseItems.map((item, index) => (
              <div key={item.id} className="transition-all duration-500 relative z-10">
                {expandedIndex === index ? (
                  // Expanded View - Full Width Image with Content Below
                  <div className="rounded-3xl p-8 transition-all duration-500">
                    {/* Full Width Image */}
                    <div className="mb-8">
                      <div className="w-full h-96 rounded-2xl overflow-hidden transition-all duration-500" style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.3)' }}>
                        {/* Placeholder for image - empty box */}
                      </div>
                    </div>

                    {/* Content Below Image */}
                    <div className="text-white">
                      <h2 className="text-4xl font-bold mb-4" style={{ color: '#00264C' }}>{item.title}</h2>
                      <p className="text-white text-opacity-90 mb-4 leading-relaxed text-lg">
                        {item.description}
                      </p>
                      <p className="text-white text-opacity-85 mb-6 leading-relaxed">
                        {item.detailedDescription}
                      </p>
                      <button 
                        onClick={() => handleLearnMore(index)}
                        className="px-8 py-3 border-2 text-white rounded-full transition-all duration-300 font-medium"
                        style={{ borderColor: '#00264C', color: '#00264C' }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#00264C'
                          e.target.style.color = 'white'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent'
                          e.target.style.color = '#00264C'
                        }}
                      >
                        Show Less
                      </button>
                    </div>
                  </div>
                ) : (
                  // Normal View - Two Column Layout (Left: Content, Right: Image)
                  <div className="rounded-3xl p-8 transition-all duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {/* Left Column - Content */}
                      <div className="bg-[#5dd9ff] text-white">
                        <h2 className="text-4xl font-bold mb-4" style={{ color: '#00264C' }}>{item.title}</h2>
                        <p className="text-white text-opacity-90 mb-6 leading-relaxed text-lg">
                          {item.description}
                        </p>
                        <button 
                          onClick={() => handleLearnMore(index)}
                          className="px-8 py-3 border-2 rounded-full transition-all duration-300 font-medium"
                          style={{ borderColor: '#00264C', color: '#00264C' }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#00264C'
                            e.target.style.color = 'white'
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent'
                            e.target.style.color = '#00264C'
                          }}
                        >
                          Learn More
                        </button>
                      </div>

                      {/* Right Column - Image */}
                      <div className="bg-[#5dd9ff] flex justify-center items-center">
                        <div className="w-full h-80 rounded-2xl overflow-hidden transition-all duration-500" style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.3)' }}>
                          <img src={showcaseImage1} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
