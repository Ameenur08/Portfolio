import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, ANIMATION_VARIANTS } from '../utils/constants.js';
import Button from './ui/Button.jsx';

/**
 * Navigation Component
 * Responsive navigation with mobile menu and smooth scrolling
 */
const Navigation = ({ currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.nav-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Navigation styles
  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    padding: 'var(--space-md) 0',
    background: isScrolled 
      ? 'rgba(10, 10, 10, 0.95)' 
      : 'rgba(10, 10, 10, 0.7)',
    backdropFilter: 'blur(20px)',
    borderBottom: `1px solid ${isScrolled 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(255, 255, 255, 0.05)'}`,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const containerStyles = {
    maxWidth: 'var(--max-width, 1200px)',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={navStyles}
      >
        <div className="nav-container" style={containerStyles}>
          {/* Logo */}
          <Logo onClick={() => scrollToSection('hero')} />

          {/* Desktop Navigation */}
          <DesktopNav 
            items={NAV_ITEMS}
            currentSection={currentSection}
            onItemClick={scrollToSection}
          />

          {/* Mobile Menu Button */}
          <MobileMenuButton 
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        items={NAV_ITEMS}
        currentSection={currentSection}
        onItemClick={scrollToSection}
      />
    </>
  );
};

/**
 * Logo Component
 */
const Logo = ({ onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    style={{
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)',
    }}
  >
    <div style={{
      width: '40px',
      height: '40px',
      background: 'var(--gradient-accent)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-glow)',
    }}>
      <span style={{
        fontSize: '1.2rem',
        fontWeight: 700,
        color: 'white',
        fontFamily: 'var(--font-mono)',
      }}>
        AK
      </span>
    </div>
    <span style={{
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-mono)',
    }}>
      ameen.dev
    </span>
  </motion.div>
);

/**
 * Desktop Navigation Component
 */
const DesktopNav = ({ items, currentSection, onItemClick }) => (
  <div 
    className="desktop-nav"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-lg)',
    }}
  >
    {items.map((item) => (
      <NavItem
        key={item.id}
        item={item}
        isActive={currentSection === item.id}
        onClick={() => onItemClick(item.id)}
      />
    ))}
  </div>
);

/**
 * Navigation Item Component
 */
const NavItem = ({ item, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    style={{
      background: 'none',
      border: 'none',
      color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
      fontSize: 'var(--text-base)',
      fontWeight: isActive ? 600 : 400,
      cursor: 'pointer',
      padding: 'var(--space-sm) var(--space-md)',
      borderRadius: 'var(--radius-lg)',
      transition: 'var(--transition-normal)',
      position: 'relative',
    }}
    className="interactive"
  >
    <span className="nav-icon" style={{ marginRight: 'var(--space-xs)' }}>
      {item.icon}
    </span>
    <span className="nav-label">{item.label}</span>
    
    {isActive && (
      <motion.div
        layoutId="activeTab"
        style={{
          position: 'absolute',
          bottom: '-2px',
          left: '50%',
          width: '20px',
          height: '2px',
          background: 'var(--accent-primary)',
          borderRadius: 'var(--radius-full)',
          transform: 'translateX(-50%)',
        }}
      />
    )}
  </motion.button>
);

/**
 * Mobile Menu Button Component
 */
const MobileMenuButton = ({ isOpen, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="mobile-menu-btn interactive"
    style={{
      display: 'none',
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-md)',
      cursor: 'pointer',
      backdropFilter: 'var(--glass-blur)',
    }}
  >
    <div style={{
      width: '20px',
      height: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}>
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          animate={{
            rotate: isOpen && index === 0 ? 45 : isOpen && index === 2 ? -45 : 0,
            y: isOpen && index === 0 ? 6 : isOpen && index === 2 ? -6 : 0,
            opacity: isOpen && index === 1 ? 0 : 1,
          }}
          style={{
            width: '100%',
            height: '2px',
            background: 'var(--text-primary)',
            borderRadius: 'var(--radius-full)',
            transformOrigin: 'center',
          }}
        />
      ))}
    </div>
  </motion.button>
);

/**
 * Mobile Menu Component
 */
const MobileMenu = ({ isOpen, items, currentSection, onItemClick }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        style={{
          position: 'fixed',
          top: '80px',
          left: 'var(--space-md)',
          right: 'var(--space-md)',
          background: 'rgba(17, 17, 17, 0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-2xl)',
          padding: 'var(--space-xl)',
          zIndex: 9998,
          boxShadow: 'var(--shadow-xl)',
        }}
        className="mobile-menu"
      >
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onItemClick(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
              width: '100%',
              background: 'none',
              border: 'none',
              color: currentSection === item.id 
                ? 'var(--accent-primary)' 
                : 'var(--text-primary)',
              fontSize: 'var(--text-lg)',
              fontWeight: currentSection === item.id ? 600 : 400,
              padding: 'var(--space-lg) 0',
              textAlign: 'left',
              cursor: 'pointer',
              borderBottom: index < items.length - 1 
                ? '1px solid var(--glass-border)' 
                : 'none',
            }}
          >
            <span style={{ fontSize: 'var(--text-xl)' }}>{item.icon}</span>
            <span>{item.label}</span>
          </motion.button>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

export default Navigation;

// CSS-in-JS styles for responsive behavior
const styles = `
  @media (max-width: 1024px) {
    .desktop-nav .nav-label {
      display: none;
    }
    
    .desktop-nav {
      gap: var(--space-md) !important;
    }
    
    .desktop-nav button {
      padding: var(--space-sm) !important;
    }
  }

  @media (max-width: 768px) {
    .desktop-nav {
      display: none !important;
    }
    
    .mobile-menu-btn {
      display: flex !important;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}