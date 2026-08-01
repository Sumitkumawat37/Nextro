'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Share2 } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#10172B', color: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(32px, 6vw, 64px) 16px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(24px, 5vw, 48px)' }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, marginBottom: '16px', background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', overflowWrap: 'break-word' }}>NEXTRO</h3>
            <p style={{ color: '#9CA3AF', marginBottom: '24px', lineHeight: 1.6, overflowWrap: 'break-word' }}>
              A Perfect Classroom Setup Provider in India. Next-Level Learning & Connectivity.
            </p>
            <div style={{ marginBottom: '16px', overflowWrap: 'break-word' }}>
              <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '8px' }}>
                <strong>Director:</strong> Govind Kumar
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '8px' }}>
                <strong>Phone:</strong> +91-7073500169
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '8px' }}>
                <strong>Email:</strong> nextro081@gmail.com
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '14px' }}>
                <strong>Address:</strong> FF-29, Jaipur Electronic Market, Ridhi Sidhi, Jaipur, Rajasthan
              </p>
            </div>
            <div style={{ display: 'flex', gap: 'clamp(8px, 2vw, 16px)' }}>
              {['FB', 'TW', 'LI', 'IG', 'YT'].map((label, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: 600, transition: 'background-color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 600, marginBottom: '16px', overflowWrap: 'break-word' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 2vw, 12px)', listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Solutions', href: '/solutions' },
                { name: 'Products', href: '/products' },
                { name: 'Industries', href: '/industries' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s', fontSize: 'clamp(14px, 2vw, 16px)', overflowWrap: 'break-word' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2448D8'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 600, marginBottom: '16px', overflowWrap: 'break-word' }}>Products</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 2vw, 12px)', listStyle: 'none', padding: 0, margin: 0 }}>
              {['Interactive Panels', 'PTZ Cameras', 'Video Bars', 'Digital Podiums', 'Speakers', 'Accessories'].map((link) => (
                <li key={link}>
                  <Link href="/products" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s', fontSize: 'clamp(14px, 2vw, 16px)', overflowWrap: 'break-word' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2448D8'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 600, marginBottom: '16px', overflowWrap: 'break-word' }}>Stay Updated</h4>
            <p style={{ color: '#9CA3AF', marginBottom: '16px', lineHeight: 1.6, overflowWrap: 'break-word' }}>Subscribe to our newsletter for latest updates and offers.</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <input
                type="email"
                placeholder="Your email"
                style={{ flex: 1, minWidth: '150px', padding: '8px 16px', borderRadius: '8px', backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', outline: 'none', transition: 'border-color 0.2s', color: 'white', fontSize: 'clamp(14px, 2vw, 16px)' }}
                suppressHydrationWarning
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ padding: '8px 16px', backgroundColor: '#2448D8', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: 'clamp(24px, 5vw, 48px)', paddingTop: 'clamp(16px, 4vw, 32px)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <p style={{ color: '#9CA3AF', fontSize: 'clamp(13px, 2vw, 14px)', textAlign: 'center', overflowWrap: 'break-word', padding: '0 16px' }}>
            © 2024 NEXTRO Smart AV Solutions. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 'clamp(12px, 3vw, 24px)', fontSize: 'clamp(13px, 2vw, 14px)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s', overflowWrap: 'break-word' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2448D8'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s', overflowWrap: 'break-word' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2448D8'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
              Terms of Service
            </a>
            <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s', overflowWrap: 'break-word' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2448D8'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
