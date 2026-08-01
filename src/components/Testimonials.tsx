'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Principal, Delhi Public School',
      rating: 5,
      content: 'Nextro transformed our classrooms into modern learning spaces. The interactive displays and smart solutions have significantly improved student engagement.',
    },
    {
      name: 'Priya Sharma',
      role: 'IT Director, Tech Corp',
      rating: 5,
      content: 'Professional installation and excellent after-sales support. Our conference rooms are now equipped with state-of-the-art AV systems.',
    },
    {
      name: 'Amit Patel',
      role: 'CEO, StartUp Hub',
      rating: 5,
      content: 'The team at Nextro delivered beyond expectations. Their solutions are reliable, modern, and perfectly suited for our hybrid work environment.',
    },
  ];

  return (
    <section style={{ padding: '120px 0', background: '#F8FAFC' }}>
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
            Testimonials
          </span>
          <h2 style={{ 
            fontSize: 'clamp(36px, 5vw, 48px)', 
            fontWeight: 600, 
            marginBottom: '20px', 
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#0F172A'
          }}>
            Loved by
            <br />
            <span style={{ color: '#2448D8' }}>industry leaders</span>
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#64748B', 
            maxWidth: '540px', 
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            Trusted by leading organizations across India for their Smart AV needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
                transition: 'all 0.3s ease'
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
              <Quote style={{ 
                width: '32px', 
                height: '32px', 
                color: '#E2E8F0', 
                marginBottom: '24px' 
              }} />
              
              {/* Rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} style={{ fill: '#2448D8', color: '#2448D8' }} />
                ))}
              </div>

              {/* Content */}
              <p style={{ 
                color: '#0F172A', 
                marginBottom: '24px', 
                lineHeight: 1.7,
                fontSize: '16px',
                fontWeight: 400
              }}>
                {testimonial.content}
              </p>

              {/* Author */}
              <div>
                <div style={{ 
                  fontWeight: 600, 
                  color: '#0F172A',
                  fontSize: '15px',
                  marginBottom: '4px'
                }}>
                  {testimonial.name}
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#64748B',
                  fontWeight: 400
                }}>
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
