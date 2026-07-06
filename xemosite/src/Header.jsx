import React, { useState, useEffect } from 'react';
import xemoLogo from './assets/XEMO LOG.png';

function Header({ currentView, setView }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view) => {
    setView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms of use' },
  ];

  return (
    <header className={`header-wrapper ${isScrolled ? 'collapsed' : ''}`}>
      <div className="container header-container">
        <a className="logo-link" onClick={() => handleNavClick('home')}>
          <img src={xemoLogo} alt="XEMO Logo" className="logo-img" />
        </a>

        {/* Mobile Hamburger Button (hidden when collapsed) */}
        {!isScrolled && (
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </button>
        )}

        {/* Navigation Links */}
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''} ${isScrolled ? 'collapsed-links' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-item ${currentView === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;