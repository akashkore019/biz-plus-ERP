import React from 'react';

const plans = [
  {
    name: "Starter",
    price: 19,
    features: [
      "Basic reporting",
      "Up to 5 users",
      "5GB storage",
      "Email support",
      "Basic analytics"
    ]
  },
  {
    name: "Professional",
    price: 49,
    isPopular: true,
    features: [
      "Advanced reporting",
      "Up to 20 users",
      "20GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom dashboards",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: 99,
    features: [
      "Custom reporting",
      "Unlimited users",
      "Unlimited storage",
      "24/7 priority support",
      "Advanced analytics",
      "Custom dashboards",
      "API access",
      "Custom integrations",
      "Dedicated account manager"
    ]
  }
];

function PriceCard({ name, price, features, isPopular }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 relative ${isPopular ? 'border-2 border-blue-500' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-500 ml-1">/month</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`block w-full py-3 px-4 rounded-lg text-center font-semibold transition-colors ${
          isPopular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple & Flexible Pricing</h2>
          <p className="text-gray-600 text-lg">
            Choose the perfect plan for your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}