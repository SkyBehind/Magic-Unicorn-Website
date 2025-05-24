import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UnicornLogo } from '../images';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-container">
          <Link to="/" className="logo-link">
            <img 
              src={UnicornLogo} 
              alt="Magic Unicorn Logo" 
              className="logo-image"
              loading="eager"
            />
          </Link>
          
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/uc1" 
              className={isActive('/uc1') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              UC-1
            </Link>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
