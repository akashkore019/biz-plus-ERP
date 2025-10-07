import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 text-lg mb-8">
            Leading the way in business management solutions since 2020
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with cutting-edge technology solutions that drive growth and efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Our Vision</h3>
              <p className="text-gray-600">
                To become the global leader in enterprise resource planning solutions, helping businesses thrive in the digital age.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Innovation in everything we do</li>
                <li>• Customer success is our success</li>
                <li>• Transparency and trust</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg filter blur-lg"></div>
            <img
              src="/images/about-illustration.svg"
              alt="About Us Illustration"
              className="relative rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}