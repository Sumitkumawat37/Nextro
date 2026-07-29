'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Cart from '@/components/Cart';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleScroll();
    handleResize();
    
    let scrollTimeout: NodeJS.Timeout;
    const throttledScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };
    
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 200);
    };

    window.addEventListener('scroll', throttledScroll);
    window.addEventListener('resize', throttledResize);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', throttledResize);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [handleScroll, handleResize]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'Industries', href: '/industries' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all 0.3s', backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'white', backdropFilter: isScrolled ? 'blur(20px)' : 'none', border: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none', boxShadow: isScrolled ? '0 10px 40px rgba(0,0,0,0.1)' : 'none' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'clamp(60px, 8vw, 80px)' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', overflowWrap: 'break-word' }}
            >
              NEXTRO
            </motion.div>
            <span style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: '#4B5563', display: !isMobile ? 'block' : 'none', overflowWrap: 'break-word' }}>Smart AV Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div style={{ display: !isMobile ? 'flex' : 'none', alignItems: 'center', gap: 'clamp(16px, 4vw, 32px)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{ color: '#374151', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s', fontSize: 'clamp(14px, 2vw, 16px)', overflowWrap: 'break-word' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2448D8'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
              >
                {link.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              style={{
                position: 'relative',
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: '#F3F4F6',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
            >
              <ShoppingCart size={20} style={{ color: '#2448D8' }} />
              {getTotalItems() > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    backgroundColor: '#EF4444',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 600,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getTotalItems()}
                </span>
              )}
            </motion.button>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  backgroundColor: '#2448D8', 
                  color: 'white', 
                  padding: 'clamp(8px, 2vw, 10px) clamp(16px, 3vw, 24px)', 
                  borderRadius: '9999px', 
                  fontWeight: 500, 
                  boxShadow: '0 10px 40px rgba(36, 72, 216, 0.3)', 
                  border: 'none', 
                  cursor: 'pointer', 
                  transition: 'background-color 0.2s',
                  minWidth: '140px',
                  maxWidth: '200px',
                  fontSize: 'clamp(13px, 2vw, 14px)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
              >
                Request Quote
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ display: !isMobile ? 'none' : 'block', padding: '8px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', transition: 'background-color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: !isMobile ? 'none' : 'block', backgroundColor: 'white', borderTop: '1px solid #E5E7EB' }}
          >
            <div style={{ padding: 'clamp(12px, 3vw, 16px) clamp(16px, 4vw, 24px)', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 3vw, 16px)' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ display: 'block', color: '#374151', textDecoration: 'none', fontWeight: 500, padding: 'clamp(8px, 2vw, 12px) 0', transition: 'color 0.2s', fontSize: 'clamp(14px, 2vw, 16px)', overflowWrap: 'break-word' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2448D8'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button style={{ 
                  width: '100%', 
                  backgroundColor: '#2448D8', 
                  color: 'white', 
                  padding: 'clamp(12px, 3vw, 14px) clamp(16px, 4vw, 24px)', 
                  borderRadius: '9999px', 
                  fontWeight: 500, 
                  border: 'none', 
                  cursor: 'pointer', 
                  transition: 'background-color 0.2s',
                  fontSize: 'clamp(14px, 3vw, 16px)',
                  minWidth: '200px'
                }}>
                  Request Quote
                </button>
              </Link>
              
              {/* Cart Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  position: 'relative',
                  padding: '12px',
                  borderRadius: '9999px',
                  backgroundColor: '#F3F4F6',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
              >
                <ShoppingCart size={20} style={{ color: '#2448D8' }} />
                <span style={{ fontSize: '14px', fontWeight: 500, color: '#374151' }}>Cart</span>
                {getTotalItems() > 0 && (
                  <span
                    style={{
                      backgroundColor: '#EF4444',
                      color: 'white',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: '9999px',
                    }}
                  >
                    {getTotalItems()}
                  </span>
                )}
              </motion.button>
              
              {/* Contact Info */}
              <div style={{ paddingTop: 'clamp(16px, 4vw, 24px)', borderTop: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 2vw, 12px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4B5563', overflowWrap: 'break-word' }}>
                  <Phone size={18} style={{ color: '#2448D8' }} />
                  <span style={{ fontSize: 'clamp(13px, 2vw, 14px)', overflowWrap: 'break-word' }}>+91-7073500169</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4B5563', overflowWrap: 'break-word' }}>
                  <Mail size={18} style={{ color: '#2448D8' }} />
                  <span style={{ fontSize: 'clamp(13px, 2vw, 14px)', overflowWrap: 'break-word' }}>nextro081@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Component */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </motion.nav>
  );
};

export default Navigation;
