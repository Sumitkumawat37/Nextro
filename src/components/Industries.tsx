'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Briefcase, Landmark, Hospital, Clapperboard, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Schools, Colleges & Universities',
      link: '/contact',
    },
    {
      icon: Building2,
      title: 'Corporate',
      description: 'Offices & Training Centers',
      link: '/contact',
    },
    {
      icon: Briefcase,
      title: 'Conference',
      description: 'Meeting & Board Rooms',
      link: '/contact',
    },
    {
      icon: Clapperboard,
      title: 'Entertainment',
      description: 'Auditoriums & Studios',
      link: '/contact',
    },
    {
      icon: Landmark,
      title: 'Government',
      description: 'Public Sector & Institutions',
      link: '/contact',
    },
    {
      icon: Hospital,
      title: 'Healthcare',
      description: 'Hospitals & Medical Centers',
      link: '/contact',
    },
  ];

  return (
    <section id="industries" style={{ padding: '120px 0', backgroundColor: '#F8FAFC' }}>
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
            Industries
          </span>
          <h2 style={{ 
            fontSize: 'clamp(36px, 5vw, 48px)', 
            fontWeight: 600, 
            marginBottom: '20px', 
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#0F172A'
          }}>
            Trusted across
            <br />
            <span style={{ color: '#2448D8' }}>diverse industries</span>
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#64748B', 
            maxWidth: '540px', 
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            We deliver tailored Smart AV solutions that enhance communication, collaboration, and productivity across diverse sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
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
              <Link href={industry.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '10px', 
                  backgroundColor: '#F8FAFC',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <industry.icon size={24} style={{ color: '#2448D8' }} />
                </div>
                
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  marginBottom: '8px', 
                  color: '#0F172A',
                  letterSpacing: '-0.01em'
                }}>
                  {industry.title}
                </h3>
                
                <p style={{ 
                  color: '#64748B', 
                  lineHeight: 1.6, 
                  marginBottom: '20px', 
                  fontSize: '15px',
                  fontWeight: 400
                }}>
                  {industry.description}
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

export default Industries;
