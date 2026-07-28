'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);


  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)' }}>
      {/* Animated Background */}
      <motion.div
        style={{ position: 'absolute', inset: 0, opacity: 0.3 }}
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(36, 72, 216, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(36, 72, 216, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(36, 72, 216, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Gradient Orbs - Hidden on mobile to prevent overflow */}
      <motion.div
        style={{ position: 'absolute', top: '80px', left: '80px', width: '288px', height: '288px', backgroundColor: 'rgba(36, 72, 216, 0.2)', borderRadius: '50%', filter: 'blur(48px)', display: 'none' }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: '80px', right: '80px', width: '384px', height: '384px', backgroundColor: 'rgba(96, 156, 255, 0.2)', borderRadius: '50%', filter: 'blur(48px)', display: 'none' }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Mouse-following gradient */}
      <motion.div
        style={{ position: 'absolute', inset: 0, opacity: 0.2, background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(36, 72, 216, 0.15) 0%, transparent 50%)` }}
      />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '16px', paddingTop: '128px', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ textAlign: 'center', width: '100%' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '9999px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', marginBottom: '32px', maxWidth: '100%', overflow: 'hidden' }}
          >
            <Sparkles style={{ width: '16px', height: '16px', color: '#2448D8', flexShrink: 0 }} />
            <span style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 500, color: '#374151', wordBreak: 'break-word' }}>Premium Smart AV Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontSize: 'clamp(32px, 8vw, 96px)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.1, wordBreak: 'break-word', overflowWrap: 'break-word' }}
          >
            <span style={{ display: 'block', background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>NEXT-LEVEL</span>
            <span style={{ display: 'block', color: '#10172B' }}>LEARNING &</span>
            <span style={{ display: 'block', background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>CONNECTIVITY</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ fontSize: 'clamp(16px, 4vw, 24px)', color: '#4B5563', maxWidth: '768px', margin: '0 auto 48px', lineHeight: 1.6, padding: '0 16px', wordBreak: 'break-word' }}
          >
            A Perfect Classroom Setup Provider in India
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', padding: '0 16px' }}
          >
            <Link href="/solutions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  width: '100%', 
                  minWidth: '140px',
                  maxWidth: '280px',
                  backgroundColor: '#2448D8', 
                  color: 'white', 
                  padding: '14px 24px', 
                  borderRadius: '9999px', 
                  fontWeight: 600, 
                  boxShadow: '0 10px 40px rgba(36, 72, 216, 0.3)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  border: 'none', 
                  cursor: 'pointer',
                  fontSize: 'clamp(14px, 3vw, 16px)'
                }}
              >
                <span>Explore Solutions</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  width: '100%', 
                  minWidth: '140px',
                  maxWidth: '280px',
                  backgroundColor: 'white', 
                  color: '#2448D8', 
                  border: '2px solid #2448D8', 
                  padding: '14px 24px', 
                  borderRadius: '9999px', 
                  fontWeight: 600, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  cursor: 'pointer',
                  fontSize: 'clamp(14px, 3vw, 16px)'
                }}
              >
                <span>Contact Us</span>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/brochure.pdf', '_blank')}
              style={{ 
                width: '100%', 
                minWidth: '140px',
                maxWidth: '280px',
                backgroundColor: '#10172B', 
                color: 'white', 
                padding: '14px 24px', 
                borderRadius: '9999px', 
                fontWeight: 600, 
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)', 
                border: 'none', 
                cursor: 'pointer',
                fontSize: 'clamp(14px, 3vw, 16px)'
              }}
            >
              Download Brochure
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'none' }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '24px', height: '40px', border: '2px solid #2448D8', borderRadius: '9999px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '8px' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2448D8' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
