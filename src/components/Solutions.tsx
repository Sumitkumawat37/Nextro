'use client';

import { motion } from 'framer-motion';
import { Monitor, Video, Mic, Users, Presentation, Home, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Solutions = () => {
  const solutions = [
    {
      icon: Monitor,
      title: 'Smart Classroom',
      description: 'Transform traditional classrooms into interactive learning spaces with digital displays and collaborative tools.',
      features: ['Interactive Flat Panels', 'Digital Podium', 'Smart Audio Systems', 'Wireless Presentation', 'Screen Sharing', 'Interactive Whiteboard Software'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Video,
      title: 'Video Conference Solutions',
      description: 'Seamless video conferencing solutions for remote meetings and hybrid work environments.',
      features: ['Video Bars', 'PTZ Cameras', 'Speakerphones', 'Webcams', 'Display Integration', 'Cloud Meeting Platforms'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Mic,
      title: 'Virtual Classroom',
      description: 'Create engaging virtual learning experiences with integrated audio and video solutions.',
      features: ['Live Streaming Setup', 'Recording Solutions', 'Interactive Tools', 'Student Engagement Features', 'LMS Integration', 'Multi-platform Support'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Recording Studio Setup',
      description: 'Professional recording setups for content creation, lectures, and training sessions.',
      features: ['Professional Cameras', 'Lighting Systems', 'Audio Recording', 'Green Screen Setup', 'Video Editing', 'Live Streaming'],
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Presentation,
      title: 'Interactive AV Solutions',
      description: 'Equip meeting rooms with state-of-the-art displays and collaboration tools.',
      features: ['Large Format Displays', 'Touch Screens', 'Wireless Connectivity', 'Video Walls', 'Control Systems', 'Automation'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Home,
      title: 'Customized AV Solutions',
      description: 'Tailored AV solutions designed to meet specific requirements and spaces.',
      features: ['Site Assessment', 'Custom Design', 'Professional Installation', 'Training & Support', 'Maintenance Services', 'Scalable Solutions'],
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section id="solutions" style={{ padding: 'clamp(48px, 8vw, 96px) 0', background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', width: '100%', boxSizing: 'border-box' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 64px)' }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Our Solutions</span>
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', maxWidth: '672px', margin: '0 auto', lineHeight: 1.6, padding: '0 16px', wordBreak: 'break-word' }}>
            Comprehensive Smart AV solutions tailored for education, business, and enterprise needs. We provide end-to-end solutions from consultation to installation and support.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{ backgroundColor: 'white', borderRadius: '16px', padding: 'clamp(20px, 4vw, 32px)', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid #F3F4F6', transition: 'all 0.3s', width: '100%', boxSizing: 'border-box' }}
            >
              <div style={{ 
                width: '56px', height: '56px', borderRadius: '16px', 
                background: solution.color === 'from-blue-500 to-cyan-500' ? 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' : 
                         solution.color === 'from-purple-500 to-pink-500' ? 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)' : 
                         solution.color === 'from-green-500 to-emerald-500' ? 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)' : 
                         solution.color === 'from-red-500 to-orange-500' ? 'linear-gradient(135deg, #EF4444 0%, #F97316 100%)' : 
                         solution.color === 'from-indigo-500 to-purple-500' ? 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' : 
                         'linear-gradient(135deg, #F59E0B 0%, #EAB308 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <solution.icon style={{ width: '28px', height: '28px', color: 'white' }} />
              </div>
              <h3 style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, color: '#10172B', marginBottom: '12px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{solution.title}</h3>
              <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '20px', fontSize: 'clamp(14px, 2vw, 16px)', wordBreak: 'break-word' }}>{solution.description}</p>
              <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '16px', marginBottom: '20px' }}>
                <h4 style={{ fontSize: 'clamp(13px, 2vw, 14px)', fontWeight: 600, color: '#10172B', marginBottom: '12px' }}>Key Features:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: 0, padding: 0, listStyle: 'none' }}>
                  {solution.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: 'clamp(13px, 2vw, 14px)', color: '#4B5563', wordBreak: 'break-word' }}>
                      <CheckCircle size={16} style={{ color: '#2448D8', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ x: 5 }}
                  style={{ marginTop: '8px', color: '#2448D8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: 'clamp(14px, 2vw, 16px)' }}
                >
                  <span>Learn More</span>
                  <span>→</span>
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: 'clamp(32px, 6vw, 64px)', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '16px', padding: 'clamp(24px, 5vw, 48px)', textAlign: 'center', color: 'white', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)', width: '100%', boxSizing: 'border-box' }}
        >
          <h3 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, marginBottom: '16px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>Need a Custom Solution?</h3>
          <p style={{ fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: '24px', maxWidth: '672px', margin: '0 auto 24px', opacity: 0.95, lineHeight: 1.6, padding: '0 16px', wordBreak: 'break-word' }}>
            Contact us to discuss your specific requirements and we'll design a tailored AV solution for your space.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                backgroundColor: 'white', 
                color: '#667eea', 
                padding: 'clamp(12px, 3vw, 16px) clamp(24px, 5vw, 32px)', 
                borderRadius: '9999px', 
                fontWeight: 600, 
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)', 
                border: 'none', 
                cursor: 'pointer', 
                transition: 'background-color 0.2s',
                minWidth: '180px',
                maxWidth: '300px',
                fontSize: 'clamp(14px, 3vw, 16px)',
                width: '100%'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F4FF'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              Get Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
