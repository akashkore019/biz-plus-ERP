import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'blogs', label: 'Blogs' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBox(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerOffset = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const headerClass = showBox
    ? 'fixed top-0 left-4 right-4 z-50 transition-all duration-300 shadow-md py-3'
    : 'fixed top-0 left-4 right-4 z-50 transition-all duration-300 bg-transparent shadow-none py-3';

  const headerStyle = showBox
    ? { borderRadius: '0 0 2rem 2rem', backgroundColor: '#5DD9FF' }
    : { borderRadius: '0', backgroundColor: 'transparent', boxShadow: 'none' };

  return (
    <header className={headerClass} style={headerStyle}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo only, no text */}
          <a
            href="#home"
            className="flex items-center"
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <img
              src="src/assets/images/logo.png"
              alt="BizPlus Logo"
              className="h-8 w-auto mr-2"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-bold px-2 py-1 transition-colors text-[#043873] hover:text-blue-600"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            {/* Get Demo Button */}
            <button
              className="border border-white text-white bg-transparent px-4 py-2 rounded-full ml-2 font-bold transition-colors hover:bg-white hover:text-[#043873]"
              onClick={() => window.location.href = '#get-demo'}
            >
              Get Demo
            </button>
            {/* Buy Now Button */}
            <button
              className="bg-[#00264C] text-white px-4 py-2 rounded-full ml-2 font-bold hover:bg-blue-900 transition"
              onClick={() => window.location.href = '#buy-now'}
            >
              Buy Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl py-4 z-40">
            <div className="flex flex-col items-center space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="font-bold px-2 py-2 transition-colors text-[#043873] hover:text-blue-600 text-center"
                  style={{ textDecoration: 'none' }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <button
                className="border border-white text-white bg-transparent px-4 py-2 rounded-full font-bold transition-colors hover:bg-[#043873] hover:text-white"
                onClick={() => window.location.href = '#get-demo'}
              >
                Get Demo
              </button>
              <button
                className="bg-[#00264C] text-white px-4 py-2 rounded-full font-bold hover:bg-blue-900 transition"
                onClick={() => window.location.href = '#buy-now'}
              >
                Buy Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}