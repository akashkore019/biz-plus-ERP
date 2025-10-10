import React from 'react'

export default function Footer() {
  return (
    <footer
      className="pt-12 pb-6"
      style={{
        background: 'linear-gradient(to bottom, #55BEE2 0%, #00264C 78%, #00264C 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start text-white mb-8 gap-10">
          {/* Left Section: Logo, Description, Social */}
          <div className="flex flex-col justify-center pl-0 md:pl-8 w-full md:w-1/4 mb-8 md:mb-0">
            <div className="mb-4">
              <span className="text-3xl font-bold tracking-wide text-white">
                BIZPLUS
                <span className="text-blue-900">ERP</span>
              </span>
            </div>
            <div className="mb-4 text-base text-white">
              Be sure to take a look at our <a href="#" className="text-white no-underline">Terms of Use</a> and <a href="#" className="text-white no-underline">Privacy Policy</a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Twitter">
                <svg width="24" height="24" fill="white"><circle cx="12" cy="12" r="10" /></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="24" height="24" fill="white"><rect x="4" y="4" width="16" height="16" /></svg>
              </a>
              <a href="#" aria-label="Google Plus">
                <svg width="24" height="24" fill="white"><ellipse cx="12" cy="12" rx="10" ry="8" /></svg>
              </a>
            </div>
          </div>
          {/* Columns */}
          <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <div className="font-semibold mb-3 text-lg text-white">Product</div>
              <ul className="space-y-2 w-full">
                <li><a href="#" className="text-white no-underline">Features</a></li>
                <li><a href="#" className="text-white no-underline">Pricing</a></li>
                <li><a href="#" className="text-white no-underline">Tour</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold mb-3 text-lg text-white">Work</div>
              <ul className="space-y-2 w-full">
                <li><a href="#" className="text-white no-underline">Our Portfolio</a></li>
                <li><a href="#" className="text-white no-underline">Lastest Work</a></li>
                <li><a href="#" className="text-white no-underline">Brands</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold mb-3 text-lg text-white">Stuff</div>
              <ul className="space-y-2 w-full">
                <li><a href="#" className="text-white no-underline">Privacy</a></li>
                <li><a href="#" className="text-white no-underline">Support</a></li>
                <li><a href="#" className="text-white no-underline">Help Desk</a></li>
                <li><a href="#" className="text-white no-underline">FAQ</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <div className="font-semibold mb-3 text-lg text-white">Product</div>
              <ul className="space-y-2 w-full">
                <li><a href="#" className="text-white no-underline">About Us</a></li>
                <li><a href="#" className="text-white no-underline">Blog</a></li>
                <li><a href="#" className="text-white no-underline">Team</a></li>
                <li><a href="#" className="text-white no-underline">Career</a></li>
                <li><a href="#" className="text-white no-underline">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-white text-sm mt-8">
          © {new Date().getFullYear()} BizPlus ERP all rights reserved.
        </div>
      </div>
    </footer>
  )
}