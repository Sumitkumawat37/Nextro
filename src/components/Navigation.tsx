'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ShoppingCart, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import Cart from '@/components/Cart';
import products from '@/data/products.json';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const { getTotalItems } = useCart();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const toggleProduct = (productId: string) => {
    setSelectedProducts((prev: string[]) => 
      prev.includes(productId) 
        ? prev.filter((id: string) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleQuoteSubmit = () => {
    if (selectedProducts.length === 0) return;
    
    const phoneNumber = '917073500169';
    let message = 'Hello, I would like to request a quote for the following products:\n\n';
    
    selectedProducts.forEach((productId, index) => {
      const product = products.products.find(p => p.id === productId);
      if (product) {
        message += `${index + 1}. ${product.name}\n`;
        message += `   Category: ${product.category}\n`;
        message += `   Description: ${product.shortDescription}\n\n`;
      }
    });
    
    message += 'Please provide the quotation and payment details.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsQuoteModalOpen(false);
    setSelectedProducts([]);
  };

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
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/nextro-logo.png"
              alt="NEXTRO"
              style={{
                height: 'clamp(40px, 6vw, 60px)',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
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
                padding: '12px 20px',
                borderRadius: '12px',
                backgroundColor: '#2448D8',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 4px 12px rgba(36, 72, 216, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 50,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
            >
              <ShoppingCart size={22} style={{ color: 'white' }} />
              <span style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>Cart</span>
              {getTotalItems() > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-6px',
                    backgroundColor: '#EF4444',
                    color: 'white',
                    fontSize: '11px',
                    fontWeight: 700,
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)',
                    border: '2px solid white',
                  }}
                >
                  {getTotalItems()}
                </span>
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsQuoteModalOpen(true)}
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
          </div>

          {/* Mobile Menu Button */}
          <div style={{ display: !isMobile ? 'none' : 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              style={{
                position: 'relative',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: '#2448D8',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 4px 12px rgba(36, 72, 216, 0.3)',
                zIndex: 50,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
            >
              <ShoppingCart size={20} style={{ color: 'white' }} />
              {getTotalItems() > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-4px',
                    backgroundColor: '#EF4444',
                    color: 'white',
                    fontSize: '10px',
                    fontWeight: 700,
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)',
                    border: '2px solid white',
                  }}
                >
                  {getTotalItems()}
                </span>
              )}
            </motion.button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ padding: '8px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
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
              <button 
                onClick={() => {
                  setIsQuoteModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                style={{ 
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
                }}
              >
                Request Quote
              </button>
              
              {/* Cart Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                style={{
                  position: 'relative',
                  padding: '16px 24px',
                  borderRadius: '12px',
                  backgroundColor: '#2448D8',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 4px 12px rgba(36, 72, 216, 0.3)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
              >
                <ShoppingCart size={22} style={{ color: 'white' }} />
                <span style={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>Cart</span>
                {getTotalItems() > 0 && (
                  <span
                    style={{
                      backgroundColor: '#EF4444',
                      color: 'white',
                      fontSize: '12px',
				      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)',
                      border: '2px solid white',
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

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 100,
              }}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '600px',
                maxHeight: '80vh',
                backgroundColor: 'white',
                borderRadius: '20px',
                zIndex: 101,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <div style={{
                padding: '24px',
                borderBottom: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#F9FAFB',
              }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#10172B', margin: 0 }}>
                  Request Quote
                </h2>
                <button
                  onClick={() => setIsQuoteModalOpen(false)}
                  style={{
                    padding: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#F3F4F6',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
                >
                  <X size={20} style={{ color: '#4B5563' }} />
                </button>
              </div>

              {/* Products List */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
                <div style={{ marginBottom: '12px', fontSize: '14px', color: '#6B7280' }}>
                  {selectedProducts.length > 0 
                    ? `${selectedProducts.length} product${selectedProducts.length > 1 ? 's' : ''} selected`
                    : 'Click on products to select them for your quote'}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {products.products.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => toggleProduct(product.id)}
                      style={{
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #E5E7EB',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        transition: 'all 0.2s',
                        backgroundColor: selectedProducts.includes(product.id) ? '#F0F4FF' : 'white',
                        borderColor: selectedProducts.includes(product.id) ? '#2448D8' : '#E5E7EB',
                      }}
                      onMouseEnter={(e) => {
                        if (!selectedProducts.includes(product.id)) {
                          e.currentTarget.style.backgroundColor = '#F9FAFB';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!selectedProducts.includes(product.id)) {
                          e.currentTarget.style.backgroundColor = 'white';
                        }
                      }}
                    >
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        border: '2px solid #D1D5DB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: selectedProducts.includes(product.id) ? '#2448D8' : 'white',
                        borderColor: selectedProducts.includes(product.id) ? '#2448D8' : '#D1D5DB',
                      }}>
                        {selectedProducts.includes(product.id) && <CheckCircle size={14} style={{ color: 'white' }} />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#10172B' }}>{product.name}</div>
                        <div style={{ fontSize: '12px', color: '#6B7280' }}>{product.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div style={{
                padding: '20px',
                borderTop: '1px solid #E5E7EB',
                backgroundColor: 'white',
                display: 'flex',
                gap: '12px',
              }}>
                <button
                  onClick={() => setIsQuoteModalOpen(false)}
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    color: '#6B7280',
                    padding: '14px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '14px',
                    border: '1px solid #D1D5DB',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F3F4F6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleQuoteSubmit}
                  disabled={selectedProducts.length === 0}
                  style={{
                    flex: 1,
                    backgroundColor: selectedProducts.length > 0 ? '#25D366' : '#D1D5DB',
                    color: 'white',
                    padding: '14px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '14px',
                    border: 'none',
                    cursor: selectedProducts.length > 0 ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedProducts.length > 0) {
                      e.currentTarget.style.backgroundColor = '#128C7E';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedProducts.length > 0) {
                      e.currentTarget.style.backgroundColor = '#25D366';
                    }
                  }}
                >
                  Get Quote via WhatsApp
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
