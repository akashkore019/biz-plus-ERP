import React from 'react'
import Showcase from '../Showcase/Showcase'

export default function Home(){
  return (
    <div className="-mx-4 -my-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to BizPlus ERP</h1>
          <p className="text-xl md:text-2xl mb-8">Your one-stop solution for all business management needs.</p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Showcase Section */}
      <Showcase />

      {/* Features Overview Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose BizPlus ERP?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Fast & Efficient</h3>
              <p className="text-gray-600">Streamline your business operations with our lightning-fast ERP system.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Secure & Reliable</h3>
              <p className="text-gray-600">Your data is protected with enterprise-grade security measures.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Analytics & Insights</h3>
              <p className="text-gray-600">Make data-driven decisions with powerful analytics tools.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
