'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, CheckCircle, Zap, Shield, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Shield, title: 'Reliability', description: 'Dependable products and services you can trust' },
    { icon: Zap, title: 'Innovation', description: 'Cutting-edge technology for modern needs' },
    { icon: Users, title: 'Customer Focus', description: 'Dedicated to meeting your requirements' },
    { icon: Heart, title: 'Passion', description: 'Committed to excellence in every project' },
  ];

  const stats = [
    { value: '12+', label: 'Branch Locations' },
    { value: '500+', label: 'Happy Clients' },
    { value: '24+', label: 'Product Categories' },
    { value: '5+', label: 'Years Experience' },
  ];

  return (
    <section style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '120px' }}
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
            About Us
          </span>
          <h1 style={{ 
            fontSize: 'clamp(48px, 6vw, 64px)', 
            fontWeight: 600, 
            marginBottom: '24px', 
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#0F172A'
          }}>
            Transforming spaces
            <br />
            <span style={{ color: '#2448D8' }}>with smart AV</span>
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: '#64748B', 
            maxWidth: '640px', 
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            Your trusted partner for Smart AV Solutions in India. We deliver innovative audio-visual solutions for education, business, and enterprise environments.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '120px' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(32px, 4vw, 40px)', 
            fontWeight: 600, 
            marginBottom: '32px',
            letterSpacing: '-0.02em',
            color: '#0F172A'
          }}>
            Our Story
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '48px',
            alignItems: 'center'
          }}>
            <div>
              <p style={{ 
                fontSize: '16px', 
                color: '#64748B', 
                lineHeight: 1.8, 
                marginBottom: '24px',
                fontWeight: 400
              }}>
                Govind Kumar is a dedicated AV Solutions Specialist from Rajasthan, delivering smart and innovative audio-visual solutions for schools, offices, auditoriums, and businesses across India.
              </p>
              <p style={{ 
                fontSize: '16px', 
                color: '#64748B', 
                lineHeight: 1.8, 
                marginBottom: '24px',
                fontWeight: 400
              }}>
                NEXTRO specializes in providing comprehensive AV solutions that transform spaces into modern, interactive environments. Our expertise spans across smart classroom setups, video conference solutions, active LED installations, recording studio setups, and customized AV solutions tailored to specific needs.
              </p>
              <p style={{ 
                fontSize: '16px', 
                color: '#64748B', 
                lineHeight: 1.8,
                fontWeight: 400
              }}>
                With branches across major cities including Jaipur, Kanpur, Lucknow, Jhalawar, Bhilwara, Bharatpur, Sri Ganganagar, Ratlam, Bhopal, Gwalior, Kota, and Patna, we are committed to serving customers throughout India.
              </p>
            </div>
            <div style={{ 
              backgroundColor: '#F8FAFC', 
              borderRadius: '12px', 
              padding: '48px',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px', 
                    backgroundColor: '#2448D8',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle size={16} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#0F172A', fontSize: '16px', marginBottom: '4px' }}>Founded</h4>
                    <p style={{ color: '#64748B', fontSize: '14px' }}>2019 in Rajasthan, India</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px', 
                    backgroundColor: '#2448D8',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle size={16} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#0F172A', fontSize: '16px', marginBottom: '4px' }}>Mission</h4>
                    <p style={{ color: '#64748B', fontSize: '14px' }}>Transform spaces with smart technology</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px', 
                    backgroundColor: '#2448D8',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <CheckCircle size={16} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: '#0F172A', fontSize: '16px', marginBottom: '4px' }}>Reach</h4>
                    <p style={{ color: '#64748B', fontSize: '14px' }}>12+ branches across India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '32px',
            marginBottom: '120px',
            padding: '48px',
            backgroundColor: '#F8FAFC',
            borderRadius: '12px',
            border: '1px solid #E2E8F0'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ 
                fontSize: 'clamp(36px, 4vw, 48px)', 
                fontWeight: 600, 
                marginBottom: '8px',
                color: '#0F172A',
                letterSpacing: '-0.02em'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '14px', color: '#64748B', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission, Vision */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', marginBottom: '120px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              padding: '40px',
              border: '1px solid #E2E8F0'
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
              marginBottom: '24px'
            }}>
              <Target style={{ width: '24px', height: '24px', color: '#2448D8' }} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', color: '#0F172A', letterSpacing: '-0.01em' }}>Our Mission</h3>
            <p style={{ 
              lineHeight: 1.7, 
              color: '#64748B',
              fontSize: '15px',
              fontWeight: 400
            }}>
              Provide innovative, reliable, and high-quality Smart AV solutions that improve communication, education, and business experiences through advanced technology, professional service, and customer-focused support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              backgroundColor: 'white', 
              borderRadius: '12px', 
              padding: '40px',
              border: '1px solid #E2E8F0'
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
              marginBottom: '24px'
            }}>
              <Eye style={{ width: '24px', height: '24px', color: '#2448D8' }} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', color: '#0F172A', letterSpacing: '-0.01em' }}>Our Vision</h3>
            <p style={{ 
              lineHeight: 1.7, 
              color: '#64748B',
              fontSize: '15px',
              fontWeight: 400
            }}>
              Become Rajasthan's most trusted AV solutions brand by transforming spaces with smart technology and delivering excellent audio-visual experiences across India.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '120px' }}
        >
          <h3 style={{ 
            fontSize: 'clamp(32px, 4vw, 40px)', 
            fontWeight: 600, 
            marginBottom: '48px',
            letterSpacing: '-0.02em',
            color: '#0F172A'
          }}>
            Core Values
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
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
                  cursor: 'default'
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
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '10px', 
                  backgroundColor: '#F8FAFC',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <value.icon style={{ width: '24px', height: '24px', color: '#2448D8' }} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#0F172A', letterSpacing: '-0.01em' }}>{value.title}</h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#64748B', fontWeight: 400 }}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ 
            backgroundColor: '#F8FAFC', 
            borderRadius: '12px', 
            padding: '64px',
            border: '1px solid #E2E8F0',
            textAlign: 'center'
          }}
        >
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            backgroundColor: '#2448D8',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 24px'
          }}>
            <Award style={{ width: '40px', height: '40px', color: 'white' }} />
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '8px', color: '#0F172A', letterSpacing: '-0.01em' }}>Govind Kumar</h3>
          <p style={{ fontSize: '16px', marginBottom: '24px', color: '#64748B', fontWeight: 500 }}>Director</p>
          <p style={{ 
            maxWidth: '640px', 
            margin: '0 auto', 
            lineHeight: 1.7, 
            color: '#64748B',
            fontSize: '15px',
            fontWeight: 400
          }}>
            Leading NEXTRO with dedication and expertise in delivering premium Smart AV solutions across India. With years of experience in the AV industry, Govind Kumar has transformed numerous educational institutions and businesses with cutting-edge audio-visual technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
