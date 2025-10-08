import React, { useState } from 'react';

const plans = [
  {
    name: "START",
    price: 19,
    features: [
      "2 GB of hosting space",
      "14 days of free backups",
      "Social integrations",
      "Advanced client billing"
    ]
  },
  {
    name: "ENTERPRISE",
    price: 49,
    isPopular: true,
    features: [
      "2 GB of hosting space",
      "14 days of free backups",
      "Social integrations",
      "Advanced client billing"
    ]
  },
  {
    name: "ENTERPRISE",
    price: 99,
    features: [
      "2 GB of hosting space",
      "14 days of free backups",
      "Social integrations",
      "Advanced client billing"
    ]
  }
];

function PriceCard({ name, price, features, isPopular, isSelected, onClick }) {
  // Card is dark when selected, or when it's popular AND not another card is selected
  const isDark = isSelected || (isPopular && !isSelected);
  
  // Background color logic
  let bgColor;
  if (isSelected) {
    bgColor = '#00264C'; // Selected card is dark blue
  } else {
    bgColor = '#5DD9FF'; // All non-selected cards are cyan
  }
  
  const textColor = isSelected ? 'white' : '#00264C';
  const borderColor = '#00264C';

  return (
    <div 
      className={`rounded-3xl p-8 relative transition-all duration-300 cursor-pointer flex flex-col h-full ${
        isSelected ? 'transform scale-105' : ''
      }`}
      style={{ 
        backgroundColor: bgColor,
        border: `2px solid ${borderColor}`
      }}
      onClick={onClick}
    >
      <div className="text-center mb-6">
        <h3 className="text-sm font-bold mb-6 tracking-wider" style={{ color: textColor }}>
          {name}
        </h3>
        <div className="flex items-start justify-center mb-2">
          <span className="text-2xl font-medium mr-1" style={{ color: textColor }}>$</span>
          <span className="text-6xl font-bold" style={{ color: textColor }}>{price}</span>
        </div>
        <div className="text-sm" style={{ color: isSelected ? 'rgba(255,255,255,0.7)' : '#00264C' }}>
          per user
        </div>
        <div className="text-sm" style={{ color: isSelected ? 'rgba(255,255,255,0.7)' : '#00264C' }}>
          per month
        </div>
      </div>
      
      <div className="mb-6 flex-1">
        <p className="text-sm text-center mb-6" style={{ color: isSelected ? 'rgba(255,255,255,0.9)' : '#00264C' }}>
          All the features you need to keep your personal files safe, accessible, and easy to share.
        </p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm" style={{ color: isSelected ? 'white' : '#00264C' }}>
              <svg className="w-4 h-4 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: isSelected ? 'white' : '#00264C' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <button
        className={`w-full py-3 px-6 rounded-full text-center font-semibold transition-all duration-300 mt-auto ${
          isSelected
            ? 'bg-white hover:bg-gray-100 text-[#00264C]' 
            : 'border-2 border-[#00264C] hover:bg-[#00264C] hover:text-white text-[#00264C]'
        }`}
      >
        Start Free Trial
      </button>
    </div>
  );
}

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to middle card

  return (
    <section 
      id="pricing" 
      className="py-20 relative overflow-hidden" 
      style={{ backgroundColor: '#5DD9FF' }}
    >
      {/* Vertical Lines Background */}
      <div className="absolute inset-0 flex justify-around">
        {[...Array(12)].map((_, index) => (
          <div 
            key={index} 
            className="w-px h-full bg-white opacity-50"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#00264C' }}>
            Simple & flexible pricing built for everyone
          </h2>
          <p className="text-lg" style={{ color: '#00264C', opacity: 0.8 }}>
            Start with 14-day free trial. No credit card needed. Cancel at anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PriceCard 
              key={index} 
              {...plan} 
              isSelected={selectedPlan === index}
              onClick={() => setSelectedPlan(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}