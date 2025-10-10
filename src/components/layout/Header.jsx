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

  // Use Tailwind classes for bg + responsive rounding instead of inline borderRadius.
  const headerClass = showBox
    ? 'fixed top-0 left-4 right-4 z-50 transition-all duration-300 shadow-md py-3 bg-[#5DD9FF] md:rounded-b-2xl rounded-none'
    : 'fixed top-0 left-4 right-4 z-50 transition-all duration-300 bg-transparent shadow-none py-3 rounded-none';

  // Height of blue bar for mobile menu (adjust if needed)
  const mobileBarHeight = 56;

  return (
    <header className={headerClass}>
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
              className="border border-[#043873] text-[#043873] bg-transparent px-4 py-2 rounded-full ml-2 font-bold transition-colors hover:bg-[#043873] hover:text-white"
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
            className="md:hidden p-2 text-gray-600 bg-transparent border-none"
            style={{ outline: 'none', boxShadow: 'none' }}
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
          <div className="fixed inset-0 z-50">
            {/* Blue header bar with logo and close icon
                remove corner rounding on small screens, keep on md+ */}
            <div
              className="flex items-center justify-between bg-[#5DD9FF] px-6 py-3 md:rounded-b-2xl rounded-none"
              style={{
                position: 'relative',
                zIndex: 2,
                height: `${mobileBarHeight}px`,
              }}
            >
              <img
                src="src/assets/images/logo.png"
                alt="BizPlus Logo"
                className="h-8 w-auto"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#043873] bg-transparent border-none"
                style={{ outline: 'none', boxShadow: 'none' }}
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
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Navigation popup */}
            <nav
              className="bg-white shadow-lg rounded-b-2xl py-4 flex flex-col items-center space-y-2"
              style={{
                position: 'absolute',
                top: `${mobileBarHeight}px`,
                left: 0,
                right: 0,
                zIndex: 1,
                maxHeight: `calc(100vh - ${mobileBarHeight}px)`,
                overflowY: 'auto',
              }}
            >
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
                className="border border-[#043873] text-[#043873] bg-transparent px-4 py-2 rounded-full font-bold transition-colors hover:bg-[#043873] hover:text-white"
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}