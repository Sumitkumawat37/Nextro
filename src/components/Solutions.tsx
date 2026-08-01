'use client';

import { motion } from 'framer-motion';
import { Monitor, Video, Mic, Users, Presentation, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Solutions = () => {
  const solutions = [
    {
      icon: Monitor,
      title: 'Smart Classroom',
      description: 'Transform traditional classrooms into interactive learning spaces with digital displays and collaborative tools.',
      link: '/products',
    },
    {
      icon: Video,
      title: 'Video Conference',
      description: 'Seamless video conferencing solutions for remote meetings and hybrid work environments.',
      link: '/products',
    },
    {
      icon: Mic,
      title: 'Virtual Classroom',
      description: 'Create engaging virtual learning experiences with integrated audio and video solutions.',
      link: '/products',
    },
    {
      icon: Users,
      title: 'Recording Studio',
      description: 'Professional recording setups for content creation, lectures, and training sessions.',
      link: '/products',
    },
    {
      icon: Presentation,
      title: 'Interactive AV',
      description: 'Equip meeting rooms with state-of-the-art displays and collaboration tools.',
      link: '/products',
    },
    {
      icon: Home,
      title: 'Custom Solutions',
      description: 'Tailored AV solutions designed to meet specific requirements and spaces.',
      link: '/contact',
    },
  ];

  return (
    <section id="solutions" style={{ padding: '120px 0', background: '#F8FAFC' }}>
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
            Solutions
          </span>
          <h2 style={{ 
            fontSize: 'clamp(36px, 5vw, 48px)', 
            fontWeight: 600, 
            marginBottom: '20px', 
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#0F172A'
          }}>
            Everything you need to
            <br />
            <span style={{ color: '#2448D8' }}>transform your spaces</span>
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#64748B', 
            maxWidth: '540px', 
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            Comprehensive Smart AV solutions tailored for education, business, and enterprise needs.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                padding: '32px', 
                border: '1px solid #E2E8F0',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2448D8';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(36, 72, 216, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Link href={solution.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '10px', 
                  backgroundColor: '#F8FAFC',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '24px',
                  transition: 'all 0.3s ease'
                }}
                >
                  <solution.icon size={24} style={{ color: '#2448D8', transition: 'color 0.3s ease' }} />
                </div>
                
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  marginBottom: '12px', 
                  color: '#0F172A',
                  letterSpacing: '-0.01em'
                }}>
                  {solution.title}
                </h3>
                
                <p style={{ 
                  color: '#64748B', 
                  lineHeight: 1.6, 
                  marginBottom: '20px', 
                  fontSize: '15px',
                  fontWeight: 400
                }}>
                  {solution.description}
                </p>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  color: '#2448D8',
                  fontWeight: 500,
                  fontSize: '14px'
                }}>
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
