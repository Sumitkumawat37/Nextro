'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: '#FFFFFF' }}>
      {/* Subtle animated background */}
      <motion.div
        style={{ position: 'absolute', inset: 0, opacity: 0.5 }}
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(36, 72, 216, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(36, 72, 216, 0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(36, 72, 216, 0.03) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle gradient mesh */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(248,250,252,0.5) 100%)' 
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '24px', paddingTop: '140px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', width: '100%' }}>
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              backgroundColor: '#F8FAFC', 
              border: '1px solid #E2E8F0', 
              padding: '8px 20px', 
              borderRadius: '9999px', 
              marginBottom: '40px' 
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2448D8' }} />
            <span style={{ fontSize: '14px', fontWeight: 500, color: '#64748B', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Premium AV Solutions
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontSize: 'clamp(40px, 6vw, 72px)', 
              fontWeight: 600, 
              marginBottom: '24px', 
              lineHeight: 1.1, 
              letterSpacing: '-0.02em',
              color: '#0F172A'
            }}
          >
            Transform Your Spaces
            <br />
            <span style={{ color: '#2448D8' }}>With Smart AV</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ 
              fontSize: 'clamp(16px, 2vw, 20px)', 
              color: '#64748B', 
              maxWidth: '640px', 
              margin: '0 auto 48px', 
              lineHeight: 1.7,
              fontWeight: 400
            }}
          >
            Enterprise-grade interactive displays, video conferencing solutions, and smart classroom technology for modern education and business environments.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Link href="/products" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  backgroundColor: '#0F172A', 
                  color: 'white', 
                  padding: '16px 32px', 
                  borderRadius: '8px', 
                  fontWeight: 500, 
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                View Products
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  backgroundColor: 'white', 
                  color: '#0F172A', 
                  border: '1px solid #E2E8F0',
                  padding: '16px 32px', 
                  borderRadius: '8px', 
                  fontWeight: 500, 
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                Contact Sales
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid #E2E8F0' }}
          >
            <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '16px', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Trusted by leading institutions
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', opacity: 0.6 }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>Education</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>Corporate</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>Government</span>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#64748B' }}>Healthcare</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
        >
          <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 500 }}>Scroll to explore</span>
          <ChevronDown size={20} style={{ color: '#94A3B8' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
