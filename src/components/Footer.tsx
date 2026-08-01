'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, MapPin, Phone, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0F172A', color: 'white', borderTop: '1px solid #1E293B' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 40px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', letterSpacing: '-0.01em' }}>NEXTRO</h3>
            <p style={{ color: '#94A3B8', marginBottom: '24px', lineHeight: 1.6, fontSize: '15px' }}>
              Premium Smart AV solutions for modern education and business environments.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94A3B8', fontSize: '14px' }}>
                <MapPin size={16} />
                <span>Jaipur, Rajasthan</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94A3B8', fontSize: '14px' }}>
                <Phone size={16} />
                <span>+91-7073500169</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94A3B8', fontSize: '14px' }}>
                <Mail size={16} />
                <span>nextro081@gmail.com</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#1E293B', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textDecoration: 'none',
                  color: '#94A3B8',
                  transition: 'all 0.2s ease',
                  fontSize: '14px',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2448D8';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1E293B';
                  e.currentTarget.style.color = '#94A3B8';
                }}
              >
                IN
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#1E293B', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textDecoration: 'none',
                  color: '#94A3B8',
                  transition: 'all 0.2s ease',
                  fontSize: '14px',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2448D8';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1E293B';
                  e.currentTarget.style.color = '#94A3B8';
                }}
              >
                TW
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#1E293B', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  textDecoration: 'none',
                  color: '#94A3B8',
                  transition: 'all 0.2s ease',
                  fontSize: '14px',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2448D8';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1E293B';
                  e.currentTarget.style.color = '#94A3B8';
                }}
              >
                IG
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#E2E8F0' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'About', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Solutions', href: '/solutions' },
                { name: 'Industries', href: '/industries' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', fontSize: '15px' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2448D8'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#E2E8F0' }}>Products</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
              {['Interactive Panels', 'PTZ Cameras', 'Video Bars', 'Digital Podiums', 'Audio Systems', 'Accessories'].map((link) => (
                <li key={link}>
                  <Link href="/products" style={{ color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', fontSize: '15px' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2448D8'} onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#E2E8F0' }}>Newsletter</h4>
            <p style={{ color: '#94A3B8', marginBottom: '20px', lineHeight: 1.6, fontSize: '15px' }}>
              Subscribe for latest updates and offers.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{ 
                  width: '100%', 
                  padding: '12px 16px', 
                  borderRadius: '8px', 
                  backgroundColor: '#1E293B', 
                  border: '1px solid #334155', 
                  outline: 'none', 
                  color: 'white', 
                  fontSize: '15px',
                  transition: 'border-color 0.2s'
                }}
                suppressHydrationWarning
                onFocus={(e) => e.currentTarget.style.borderColor = '#2448D8'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#334155'}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  padding: '12px 16px', 
                  backgroundColor: '#2448D8', 
                  borderRadius: '8px', 
                  border: 'none', 
                  cursor: 'pointer', 
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 500,
                  transition: 'background-color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
              >
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <p style={{ color: '#64748B', fontSize: '14px', textAlign: 'center' }}>
            © 2024 NEXTRO Smart AV Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#94A3B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#94A3B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
