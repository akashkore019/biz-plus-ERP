import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('header');
      const headerOffset = header ? header.offsetHeight : 0; // dynamically measure header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      smoothScrollTo(offsetPosition, 1200); // 1.2s scroll
    }
    setIsMenuOpen(false);
  };


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            BizPlus
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'services', 'pricing', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative group no-underline ${isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-100'
                  } transition-colors`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"
                ></span>
              </a>

            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${isScrolled ? 'text-gray-600' : 'text-white'
              }`}
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
          <nav className="md:hidden bottom-0 h-[2px] py-4 bg-white absolute top-full left-0 right-0 shadow-lg">
            {['home', 'about', 'services', 'pricing', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block px-6 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 relative group"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
