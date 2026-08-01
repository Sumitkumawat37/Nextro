'use client';

import { motion } from 'framer-motion';
import { Image as ImageIcon, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Classroom Installation',
      location: 'Delhi Public School',
      image: '🏫',
      category: 'Education',
    },
    {
      title: 'Conference Room Setup',
      location: 'Tech Corporation HQ',
      image: '🏢',
      category: 'Corporate',
    },
    {
      title: 'Auditorium Display System',
      location: 'University Auditorium',
      image: '🎭',
      category: 'Education',
    },
    {
      title: 'Digital Signage Network',
      location: 'Shopping Mall',
      image: '🛒',
      category: 'Retail',
    },
    {
      title: 'Recording Studio',
      location: 'Media House',
      image: '🎬',
      category: 'Media',
    },
    {
      title: 'Hospital Communication',
      location: 'City Hospital',
      image: '🏥',
      category: 'Healthcare',
    },
  ];

  return (
    <section id="projects" style={{ padding: '96px 0', background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px' }}>
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Projects Showcase</span>
          </h2>
          <p style={{ fontSize: '20px', color: '#4B5563', maxWidth: '672px', margin: '0 auto' }}>
            Explore our successful installations and transformations across various industries
          </p>
        </motion.div>

        {/* Projects Masonry Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
            >
              {/* Project Image */}
              <div style={{ position: 'relative', height: '192px', background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px' }}>
                  {project.image}
                </div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', opacity: 0, transition: 'opacity 0.3s' }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', opacity: 0, transition: 'opacity 0.3s' }}>
                  <span style={{ backgroundColor: '#2448D8', color: 'white', fontSize: '12px', padding: '4px 12px', borderRadius: '9999px' }}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#10172B', marginBottom: '8px' }}>{project.title}</h3>
                <p style={{ color: '#4B5563', marginBottom: '16px' }}>{project.location}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  style={{ color: '#2448D8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ backgroundColor: '#2448D8', color: 'white', padding: '16px 32px', borderRadius: '9999px', fontWeight: 600, boxShadow: '0 10px 40px rgba(36, 72, 216, 0.3)', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
