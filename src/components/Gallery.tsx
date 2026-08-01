'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon, Video, Camera, Building } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All', icon: ImageIcon },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'installations', label: 'Installations', icon: Building },
  ];

  const galleryItems = [
    { id: 1, type: 'photos', image: '/products/1.png', title: 'Interactive Flat Panel Installation', description: 'Smart classroom setup with 75" IFP', color: 'from-blue-500 to-cyan-500' },
    { id: 2, type: 'videos', image: '/products/4k-bar-camera.png', title: 'Video Conference Demo', description: 'PTZ camera and video bar setup', color: 'from-purple-500 to-pink-500' },
    { id: 3, type: 'installations', image: '/products/smart-podium.png', title: 'Digital Podium Installation', description: 'Corporate board room setup', color: 'from-green-500 to-emerald-500' },
    { id: 4, type: 'photos', image: '/products/2.png', title: 'Active LED Display', description: 'Large format LED wall installation', color: 'from-orange-500 to-red-500' },
    { id: 5, type: 'videos', image: '/products/4k-ptz-camera.png', title: 'Recording Studio Setup', description: 'Professional audio-video recording', color: 'from-indigo-500 to-purple-500' },
    { id: 6, type: 'installations', image: '/products/3.png', title: 'Smart Classroom', description: 'Complete classroom AV solution', color: 'from-amber-500 to-yellow-500' },
    { id: 7, type: 'photos', image: '/products/4.png', title: 'Conference Room Setup', description: 'Video conferencing system', color: 'from-rose-500 to-pink-500' },
    { id: 8, type: 'videos', image: '/products/speakerphone.png', title: 'Auditorium Installation', description: 'Large venue audio system', color: 'from-teal-500 to-cyan-500' },
    { id: 9, type: 'photos', image: '/products/5.png', title: 'PTZ Camera Array', description: 'Multi-camera recording setup', color: 'from-violet-500 to-purple-500' },
    { id: 10, type: 'installations', image: '/products/6.png', title: 'University Lecture Hall', description: 'Interactive learning space', color: 'from-fuchsia-500 to-pink-500' },
    { id: 11, type: 'photos', image: '/products/webcam.png', title: 'Training Institute Setup', description: 'Modern training room AV', color: 'from-lime-500 to-green-500' },
    { id: 12, type: 'videos', image: '/products/active-speaker-with-microphone.png', title: 'Corporate Meeting Room', description: 'Presentation and collaboration', color: 'from-sky-500 to-blue-500' },
  ];

  const filteredItems = activeTab === 'all' ? galleryItems : galleryItems.filter(item => item.type === activeTab);

  return (
    <section id="gallery" style={{ padding: 'clamp(48px, 8vw, 96px) 0', backgroundColor: 'white' }}>
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
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Gallery</span>
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', maxWidth: '672px', margin: '0 auto', lineHeight: 1.6, padding: '0 16px', overflowWrap: 'break-word' }}>
            Visual showcase of our products, installations, and projects. Explore our portfolio of Smart AV solutions across schools, colleges, corporate offices, and auditoriums.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(8px, 2vw, 16px)', marginBottom: 'clamp(24px, 5vw, 48px)' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 24px)', borderRadius: '9999px', fontWeight: 500, transition: 'all 0.2s', border: 'none', cursor: 'pointer', backgroundColor: activeTab === tab.id ? '#2448D8' : '#F3F4F6', color: activeTab === tab.id ? 'white' : '#374151', boxShadow: activeTab === tab.id ? '0 10px 40px rgba(36, 72, 216, 0.3)' : 'none', fontSize: 'clamp(14px, 2vw, 16px)' }}
              onMouseEnter={(e) => { if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = '#E5E7EB'; }}
              onMouseLeave={(e) => { if (activeTab !== tab.id) e.currentTarget.style.backgroundColor = '#F3F4F6'; }}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(16px, 4vw, 24px)' }}>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid #F3F4F6', transition: 'all 0.3s', width: '100%', boxSizing: 'border-box' }}
            >
              <div style={{ 
                aspectRatio: '4/3', 
                background: item.color === 'from-blue-500 to-cyan-500' ? 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)' : 
                         item.color === 'from-purple-500 to-pink-500' ? 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)' : 
                         item.color === 'from-green-500 to-emerald-500' ? 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)' : 
                         item.color === 'from-orange-500 to-red-500' ? 'linear-gradient(135deg, #F97316 0%, #EF4444 100%)' : 
                         item.color === 'from-indigo-500 to-purple-500' ? 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)' : 
                         item.color === 'from-amber-500 to-yellow-500' ? 'linear-gradient(135deg, #F59E0B 0%, #EAB308 100%)' : 
                         item.color === 'from-rose-500 to-pink-500' ? 'linear-gradient(135deg, #F43F5E 0%, #EC4899 100%)' : 
                         item.color === 'from-teal-500 to-cyan-500' ? 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)' : 
                         item.color === 'from-violet-500 to-purple-500' ? 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)' : 
                         item.color === 'from-fuchsia-500 to-pink-500' ? 'linear-gradient(135deg, #D946EF 0%, #EC4899 100%)' : 
                         item.color === 'from-lime-500 to-green-500' ? 'linear-gradient(135deg, #84CC16 0%, #22C55E 100%)' : 
                         'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative'
              }}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', padding: '16px' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: 'clamp(12px, 3vw, 16px)' }}>
                <h4 style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 700, color: '#10172B', marginBottom: '8px', overflowWrap: 'break-word' }}>{item.title}</h4>
                <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', color: '#4B5563', lineHeight: 1.6, overflowWrap: 'break-word' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
