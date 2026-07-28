'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Users, Wrench, Star, Zap, Headphones, Clock } from 'lucide-react';

const WhyNextro = () => {
  const features = [
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Expert team for seamless setup and deployment',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Reliable AV Solutions',
      description: 'Proven track record with dependable products and services',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'Cutting-edge technology and modern solutions for evolving needs',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Easy Integration',
      description: 'Seamless integration with existing systems',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Star,
      title: 'High Quality Products',
      description: 'High-quality products that meet international standards',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated to understanding and meeting customer requirements',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Headphones,
      title: 'Interactive Learning',
      description: 'Enhanced learning experiences through interactive solutions',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Business Connectivity',
      description: 'Improved communication and collaboration for businesses',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Award,
      title: 'Customized Solutions',
      description: 'Tailored solutions designed to meet specific requirements',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Headphones,
      title: 'Professional Support',
      description: 'Comprehensive support and maintenance services',
      color: 'from-fuchsia-500 to-pink-500',
    },
  ];

  return (
    <section id="about" style={{ padding: 'clamp(48px, 8vw, 96px) 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', width: '100%', boxSizing: 'border-box' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 64px)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px', overflowWrap: 'break-word' }}>Why Choose Nextro?</h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', maxWidth: '672px', margin: '0 auto', opacity: 0.95, lineHeight: 1.6, padding: '0 16px', overflowWrap: 'break-word' }}>
            We deliver excellence through innovation, quality, and unwavering commitment to our customers
          </p>
        </motion.div>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'clamp(16px, 4vw, 24px)' }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                backdropFilter: 'blur(20px)', 
                borderRadius: '16px', 
                padding: 'clamp(16px, 4vw, 24px)', 
                border: '1px solid rgba(255, 255, 255, 0.2)', 
                transition: 'all 0.3s',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ 
                width: '48px', height: '48px', borderRadius: '12px', 
                background: feature.color === 'from-blue-500 to-cyan-500' ? 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' : 
                         feature.color === 'from-purple-500 to-pink-500' ? 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)' : 
                         feature.color === 'from-green-500 to-emerald-500' ? 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)' : 
                         feature.color === 'from-orange-500 to-red-500' ? 'linear-gradient(135deg, #F97316 0%, #EF4444 100%)' : 
                         feature.color === 'from-indigo-500 to-purple-500' ? 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' : 
                         feature.color === 'from-amber-500 to-yellow-500' ? 'linear-gradient(135deg, #F59E0B 0%, #EAB308 100%)' : 
                         feature.color === 'from-rose-500 to-pink-500' ? 'linear-gradient(135deg, #F43F5E 0%, #EC4899 100%)' : 
                         feature.color === 'from-teal-500 to-cyan-500' ? 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)' : 
                         feature.color === 'from-violet-500 to-purple-500' ? 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)' : 
                         'linear-gradient(135deg, #D946EF 0%, #EC4899 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' 
              }}>
                <feature.icon style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 700, marginBottom: '8px', overflowWrap: 'break-word' }}>{feature.title}</h3>
              <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', opacity: 0.9, overflowWrap: 'break-word' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 'clamp(32px, 6vw, 64px)' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: 'white', 
              color: '#667eea', 
              padding: '16px 32px', 
              borderRadius: '9999px', 
              fontWeight: 600, 
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)', 
              border: 'none', 
              cursor: 'pointer', 
              transition: 'background-color 0.2s',
              minWidth: '200px',
              maxWidth: '300px',
              fontSize: '16px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F4FF'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNextro;
