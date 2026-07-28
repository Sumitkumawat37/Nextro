'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Briefcase, Landmark, Hospital, Clapperboard } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: 'Schools',
      description: 'Interactive learning solutions for K-12 education with smart classrooms, digital podiums, and collaborative tools that enhance student engagement and learning outcomes.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: GraduationCap,
      title: 'Colleges',
      description: 'Advanced AV systems for higher education including lecture halls, seminar rooms, and smart labs with video conferencing and recording capabilities.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: GraduationCap,
      title: 'Universities',
      description: 'Professional AV solutions for university campuses spanning multiple departments, auditoriums, conference halls, and research facilities with integrated control systems.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Building2,
      title: 'Training Institutes',
      description: 'Modern training room AV setups for corporate training, skill development centers, and vocational training with interactive displays and presentation tools.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Building2,
      title: 'Corporate Offices',
      description: 'Modern presentation and collaboration tools for corporate environments including huddle spaces, open offices, and executive suites with wireless connectivity.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Briefcase,
      title: 'Conference Rooms',
      description: 'Professional meeting room solutions with video conferencing, wireless presentation, audio enhancement, and automated control for seamless business meetings.',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: Briefcase,
      title: 'Board Rooms',
      description: 'Executive board room AV systems with premium displays, advanced video conferencing, acoustic treatment, and integrated control for high-stakes meetings.',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: Clapperboard,
      title: 'Auditoriums',
      description: 'Large venue display and audio systems for auditoriums, theaters, and event spaces with projection systems, sound reinforcement, and stage lighting.',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Building2,
      title: 'Businesses',
      description: 'Commercial AV solutions for businesses of all sizes including retail displays, digital signage, customer engagement systems, and facility-wide communication.',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Clapperboard,
      title: 'Recording Studios',
      description: 'Professional recording and broadcast setups for content creation, podcasting, live streaming, and video production with professional-grade equipment.',
      color: 'from-fuchsia-500 to-pink-500',
    },
  ];

  return (
    <section id="industries" style={{ padding: 'clamp(48px, 8vw, 96px) 0', backgroundColor: 'white' }}>
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
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Industries We Serve</span>
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', maxWidth: '672px', margin: '0 auto', lineHeight: 1.6, padding: '0 16px', wordBreak: 'break-word' }}>
            Trusted by leading organizations across various sectors for their Smart AV needs. We deliver tailored solutions that enhance communication, collaboration, and productivity across diverse industries.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(16px, 4vw, 24px)' }}>
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{ 
                background: industry.color === 'from-blue-500 to-cyan-500' ? 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' : 
                       industry.color === 'from-purple-500 to-pink-500' ? 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)' : 
                       industry.color === 'from-indigo-500 to-purple-500' ? 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' : 
                       industry.color === 'from-green-500 to-emerald-500' ? 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)' : 
                       industry.color === 'from-orange-500 to-red-500' ? 'linear-gradient(135deg, #F97316 0%, #EF4444 100%)' : 
                       industry.color === 'from-amber-500 to-yellow-500' ? 'linear-gradient(135deg, #F59E0B 0%, #EAB308 100%)' : 
                       industry.color === 'from-rose-500 to-pink-500' ? 'linear-gradient(135deg, #F43F5E 0%, #EC4899 100%)' : 
                       industry.color === 'from-teal-500 to-cyan-500' ? 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)' : 
                       industry.color === 'from-violet-500 to-purple-500' ? 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)' : 
                       'linear-gradient(135deg, #D946EF 0%, #EC4899 100%)',
                borderRadius: '16px', padding: 'clamp(16px, 4vw, 24px)', transition: 'all 0.3s', color: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', width: '100%', boxSizing: 'border-box' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <industry.icon style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <h3 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 700, marginBottom: '8px', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{industry.title}</h3>
              <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', opacity: 0.9, lineHeight: 1.6, wordBreak: 'break-word' }}>{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
