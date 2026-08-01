'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Classroom Installation',
      location: 'Delhi Public School',
      category: 'Education',
      description: 'Complete smart classroom setup with interactive flat panels and digital podiums',
      image: '/products/1.png',
    },
    {
      title: 'Conference Room Setup',
      location: 'Tech Corporation HQ',
      category: 'Corporate',
      description: 'Modern conference room with video conferencing and wireless presentation',
      image: '/products/4k-bar-camera.png',
    },
    {
      title: 'Auditorium Display System',
      location: 'University Auditorium',
      category: 'Education',
      description: 'Large format LED display system for university auditorium',
      image: '/products/2.png',
    },
  ];

  return (
    <section id="projects" style={{ padding: '120px 0', background: '#FFFFFF' }}>
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
            Projects
          </span>
          <h2 style={{ 
            fontSize: 'clamp(36px, 5vw, 48px)', 
            fontWeight: 600, 
            marginBottom: '20px', 
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#0F172A'
          }}>
            Featured
            <br />
            <span style={{ color: '#2448D8' }}>case studies</span>
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#64748B', 
            maxWidth: '540px', 
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            Explore our successful installations and transformations across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              style={{ 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
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
              <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                {/* Project Image */}
                <div style={{ 
                  position: 'relative', 
                  height: '240px', 
                  backgroundColor: '#F8FAFC',
                  overflow: 'hidden'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    loading="lazy"
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: '16px', 
                    left: '16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#0F172A'
                  }}>
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 600, 
                    marginBottom: '8px', 
                    color: '#0F172A',
                    letterSpacing: '-0.01em'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    color: '#64748B', 
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: 500
                  }}>
                    {project.location}
                  </p>
                  <p style={{ 
                    color: '#64748B', 
                    marginBottom: '20px',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    fontWeight: 400
                  }}>
                    {project.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    color: '#2448D8',
                    fontWeight: 500,
                    fontSize: '14px'
                  }}>
                    <span>View case study</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
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
          <Link href="/contact" style={{ textDecoration: 'none' }}>
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
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Start Your Project
              <ExternalLink size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
