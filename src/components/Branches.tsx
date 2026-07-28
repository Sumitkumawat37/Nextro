'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Branches = () => {
  const branches = [
    'Jaipur',
    'Kanpur',
    'Lucknow',
    'Jhalawar',
    'Bhilwara',
    'Bharatpur',
    'Sri Ganganagar',
    'Ratlam',
    'Bhopal',
    'Gwalior',
    'Kota',
    'Patna'
  ];

  return (
    <section id="branches" style={{ padding: 'clamp(48px, 8vw, 96px) 0', backgroundColor: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', width: '100%', boxSizing: 'border-box' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 64px)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px', overflowWrap: 'break-word' }}>
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Our Branches</span>
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', maxWidth: '672px', margin: '0 auto', lineHeight: 1.6, padding: '0 16px', overflowWrap: 'break-word' }}>
            Serving customers across India with our extensive branch network
          </p>
        </motion.div>

        {/* Branches Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 'clamp(16px, 4vw, 24px)' }}>
          {branches.map((branch, index) => (
            <motion.div
              key={branch}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              style={{ backgroundColor: 'white', borderRadius: '16px', padding: 'clamp(16px, 4vw, 24px)', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', gap: '12px', transition: 'all 0.3s', width: '100%', boxSizing: 'border-box' }}
            >
              <MapPin style={{ width: '20px', height: '20px', color: '#2448D8', flexShrink: 0 }} />
              <span style={{ fontSize: 'clamp(14px, 2vw, 18px)', fontWeight: 600, color: '#10172B', overflowWrap: 'break-word' }}>{branch}</span>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: 'clamp(32px, 6vw, 64px)', backgroundColor: 'white', borderRadius: '16px', padding: 'clamp(24px, 5vw, 48px)', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid #F3F4F6', textAlign: 'center', width: '100%', boxSizing: 'border-box' }}
        >
          <MapPin style={{ width: '48px', height: '48px', color: '#2448D8', margin: '0 auto 24px' }} />
          <h3 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, color: '#10172B', marginBottom: '16px', overflowWrap: 'break-word' }}>Pan India Presence</h3>
          <p style={{ color: '#4B5563', fontSize: 'clamp(14px, 3vw, 18px)', lineHeight: 1.6, overflowWrap: 'break-word' }}>
            Our branches are strategically located across major cities to serve you better
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Branches;
