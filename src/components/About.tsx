'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, CheckCircle, Zap, Shield, Heart } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Shield, title: 'Reliability', description: 'Dependable products and services you can trust', shade: 100 },
    { icon: Zap, title: 'Innovation', description: 'Cutting-edge technology for modern needs', shade: 200 },
    { icon: Users, title: 'Customer Focus', description: 'Dedicated to meeting your requirements', shade: 300 },
    { icon: Heart, title: 'Passion', description: 'Committed to excellence in every project', shade: 400 },
  ];

  const stats = [
    { value: '12+', label: 'Branch Locations', shade: 100 },
    { value: '500+', label: 'Happy Clients', shade: 200 },
    { value: '24+', label: 'Product Categories', shade: 300 },
    { value: '5+', label: 'Years Experience', shade: 400 },
  ];

  return (
    <section id="about" style={{ padding: 'clamp(48px, 8vw, 96px) 0', backgroundColor: 'white' }}>
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
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>About NEXTRO</span>
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', maxWidth: '672px', margin: '0 auto', lineHeight: 1.6, padding: '0 16px', overflowWrap: 'break-word' }}>
            Your trusted partner for Smart AV Solutions in India
          </p>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '24px', padding: 'clamp(24px, 5vw, 48px)', marginBottom: 'clamp(32px, 6vw, 64px)', color: 'white', width: '100%', boxSizing: 'border-box' }}
        >
          <h3 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, marginBottom: '24px', overflowWrap: 'break-word' }}>Who We Are</h3>
          <p style={{ fontSize: 'clamp(14px, 3vw, 18px)', lineHeight: 1.8, marginBottom: '24px', opacity: 0.95, overflowWrap: 'break-word' }}>
            Govind Kumar is a dedicated AV Solutions Specialist from Rajasthan, delivering smart and innovative audio-visual solutions for schools, offices, auditoriums, and businesses across India.
          </p>
          <p style={{ fontSize: 'clamp(14px, 3vw, 18px)', lineHeight: 1.8, marginBottom: '24px', opacity: 0.95, overflowWrap: 'break-word' }}>
            NEXTRO specializes in providing comprehensive AV solutions that transform spaces into modern, interactive environments. Our expertise spans across:
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: 'clamp(14px, 3vw, 18px)', paddingLeft: '24px', marginBottom: '24px', opacity: 0.95, overflowWrap: 'break-word' }}>
            <li>Smart Classroom Setup with Interactive Flat Panels</li>
            <li>Video Conference Solutions for seamless remote collaboration</li>
            <li>Active LED Installation for stunning visual displays</li>
            <li>Recording Studio Setup for content creation</li>
            <li>Customized AV Solutions tailored to specific needs</li>
            <li>Digital Podium and Audio Solutions</li>
            <li>PTZ Camera and Video Bar installations</li>
          </ul>
          <p style={{ fontSize: 'clamp(14px, 3vw, 18px)', lineHeight: 1.8, opacity: 0.95, overflowWrap: 'break-word' }}>
            The company focuses on reliable, professional, user-friendly, and modern AV experiences that improve learning, communication, productivity, and collaboration. With branches across major cities including Jaipur, Kanpur, Lucknow, Jhalawar, Bhilwara, Bharatpur, Sri Ganganagar, Ratlam, Bhopal, Gwalior, Kota, and Patna, we are committed to serving customers throughout India.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 4vw, 24px)', marginBottom: 'clamp(32px, 6vw, 64px)' }}
        >
          {stats.map((stat, index) => {
            const shade = stat.shade;
            const bgColors = {
              100: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
              200: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
              300: 'linear-gradient(135deg, #1E3A8A 0%, #172554 100%)',
              400: 'linear-gradient(135deg, #172554 0%, #0F172A 100%)',
            };
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                style={{ 
                  background: bgColors[shade as keyof typeof bgColors],
                  borderRadius: '16px', padding: '32px', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center', color: 'white'
                }}
              >
                <div style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ fontSize: '16px', fontWeight: 500, opacity: 0.9 }}>{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission, Vision */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)', borderRadius: '16px', padding: '32px', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Target style={{ width: '32px', height: '32px', color: 'white' }} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Our Mission</h3>
            <p style={{ lineHeight: 1.7, opacity: 0.95 }}>
              Provide innovative, reliable, and high-quality Smart AV solutions that improve communication, education, and business experiences through advanced technology, professional service, and customer-focused support. We are dedicated to transforming traditional spaces into modern, interactive environments that enhance productivity and collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)', borderRadius: '16px', padding: '32px', boxShadow: '0 10px 40px rgba(29, 78, 216, 0.3)', border: '1px solid rgba(255,255,255,0.2)', color: 'white' }}
          >
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Eye style={{ width: '32px', height: '32px', color: 'white' }} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Our Vision</h3>
            <p style={{ lineHeight: 1.7, opacity: 0.95 }}>
              Become Rajasthan's most trusted AV solutions brand by transforming spaces with smart technology and delivering excellent audio-visual experiences. We aim to expand our reach across India, making premium AV solutions accessible to educational institutions, businesses, and organizations of all sizes.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#10172B', marginBottom: '32px', textAlign: 'center' }}>Our Core Values</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {values.map((value, index) => {
              const shade = value.shade;
              const bgColors = {
                100: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                200: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
                300: 'linear-gradient(135deg, #1E3A8A 0%, #172554 100%)',
                400: 'linear-gradient(135deg, #172554 0%, #0F172A 100%)',
              };
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  style={{ 
                    background: bgColors[shade as keyof typeof bgColors],
                    borderRadius: '16px', padding: '24px', boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.3s', color: 'white'
                  }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <value.icon style={{ width: '24px', height: '24px', color: 'white' }} />
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{value.title}</h4>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, opacity: 0.9 }}>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Director */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #172554 100%)', borderRadius: '16px', padding: '48px', color: 'white', textAlign: 'center', boxShadow: '0 10px 40px rgba(30, 58, 138, 0.3)' }}
        >
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <Award style={{ width: '40px', height: '40px', color: 'white' }} />
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>Govind Kumar</h3>
          <p style={{ fontSize: '18px', marginBottom: '16px', opacity: 0.9 }}>Director</p>
          <p style={{ maxWidth: '512px', margin: '0 auto', lineHeight: 1.8, opacity: 0.95 }}>
            Leading NEXTRO with dedication and expertise in delivering premium Smart AV solutions across India. With years of experience in the AV industry, Govind Kumar has transformed numerous educational institutions and businesses with cutting-edge audio-visual technology. His commitment to quality, innovation, and customer satisfaction has made NEXTRO a trusted name in the industry.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
