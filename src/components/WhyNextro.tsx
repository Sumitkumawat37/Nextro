'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Users, Wrench, Star, Zap, Headphones, Clock } from 'lucide-react';

const WhyNextro = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Expert team for seamless setup and deployment',
    },
    {
      icon: Shield,
      title: 'Reliable AV Solutions',
      description: 'Proven track record with dependable products and services',
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'Cutting-edge technology and modern solutions for evolving needs',
    },
    {
      icon: Award,
      title: 'Easy Integration',
      description: 'Seamless integration with existing systems',
    },
    {
      icon: Star,
      title: 'High Quality Products',
      description: 'High-quality products that meet international standards',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated to understanding and meeting customer requirements',
    },
  ];

  return (
    <section id="about" style={{ padding: '120px 0', background: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '64px' }}
        >
          <span style={{ 
            fontSize: '13px', 
            fontWeight: 600, 
            color: '#2448D8', 
            letterSpacing: '0.5px', 
            textTransform: 'uppercase',
            marginBottom: '16px',
            display: 'block'
          }}>
            Why Nextro
          </span>
          <h2 style={{ 
            fontSize: 'clamp(36px, 5vw, 48px)', 
            fontWeight: 600, 
            marginBottom: '20px', 
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#0F172A'
          }}>
            Built for excellence,
            <br />
            <span style={{ color: '#2448D8' }}>designed for you</span>
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#64748B', 
            maxWidth: '540px', 
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            We deliver excellence through innovation, quality, and unwavering commitment to our customers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              style={{ 
                display: 'flex',
                gap: '20px',
                padding: '24px',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F8FAFC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '10px', 
                backgroundColor: '#F8FAFC',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <feature.icon size={24} style={{ color: '#2448D8' }} />
              </div>
              <div>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 600, 
                  marginBottom: '8px', 
                  color: '#0F172A',
                  letterSpacing: '-0.01em'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  color: '#64748B', 
                  lineHeight: 1.6,
                  fontWeight: 400
                }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginTop: '80px', textAlign: 'center' }}
        >
          <p style={{ fontSize: '15px', color: '#64748B', marginBottom: '24px' }}>
            Ready to transform your spaces?
          </p>
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
              transition: 'all 0.2s ease'
            }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNextro;
