import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PrimaryButton, OutlineButton } from '../ui/Button'

export default function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const navItems = [
    { name: 'Home', path: '/', icon: 'fas fa-home' },
    { name: 'About', path: '/about', icon: 'fas fa-info-circle' },
    { name: 'Services', path: '/services', icon: 'fas fa-cog' },
    { name: 'Pricing', path: '/pricing', icon: 'fas fa-tags' },
    { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' }
  ]

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg navbar-light py-2' 
        : 'bg-transparent navbar-dark py-3'
    }`}>
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link 
          to="/" 
          className={`navbar-brand fw-bold d-flex align-items-center text-decoration-none ${
            isScrolled ? 'text-primary' : 'text-white'
          }`}
        >
          <div className="me-2 p-2 rounded-circle bg-primary bg-opacity-10">
            <i className="fas fa-chart-line text-primary"></i>
          </div>
          <span className="h4 mb-0 font-display">BizPlus ERP</span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler border-0 p-0"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span className={isScrolled ? 'bg-dark' : 'bg-white'}></span>
            <span className={isScrolled ? 'bg-dark' : 'bg-white'}></span>
            <span className={isScrolled ? 'bg-dark' : 'bg-white'}></span>
          </div>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link fw-medium px-3 py-2 rounded-pill mx-1 transition-all duration-300 ${
                    isActive(item.path)
                      ? isScrolled 
                        ? 'bg-primary text-white' 
                        : 'bg-white bg-opacity-20 text-white'
                      : isScrolled
                        ? 'text-dark hover:bg-light'
                        : 'text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={`${item.icon} me-2`}></i>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="d-flex gap-2">
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
              <OutlineButton 
                size="sm" 
                className={isScrolled ? 'text-primary border-primary' : 'text-white border-white'}
              >
                <i className="fas fa-tachometer-alt me-2"></i>
                Dashboard
              </OutlineButton>
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <PrimaryButton size="sm">
                <i className="fas fa-rocket me-2"></i>
                Get Started
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}