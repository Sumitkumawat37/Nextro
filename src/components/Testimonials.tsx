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
      logo: '🏫',
    },
    {
      name: 'Priya Sharma',
      role: 'IT Director, Tech Corp',
      rating: 5,
      content: 'Professional installation and excellent after-sales support. Our conference rooms are now equipped with state-of-the-art AV systems.',
      logo: '🏢',
    },
    {
      name: 'Amit Patel',
      role: 'CEO, StartUp Hub',
      rating: 5,
      content: 'The team at Nextro delivered beyond expectations. Their solutions are reliable, modern, and perfectly suited for our hybrid work environment.',
      logo: '🚀',
    },
  ];

  return (
    <section style={{ padding: '96px 0', background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)' }}>
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
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>What Our Clients Say</span>
          </h2>
          <p style={{ fontSize: '20px', color: '#4B5563', maxWidth: '672px', margin: '0 auto' }}>
            Trusted by leading organizations across India
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
            >
              <Quote style={{ width: '40px', height: '40px', color: 'rgba(36, 72, 216, 0.2)', marginBottom: '16px' }} />
              
              {/* Rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} style={{ fill: '#FBBF24', color: '#FBBF24' }} />
                ))}
              </div>

              {/* Content */}
              <p style={{ color: '#374151', marginBottom: '24px', lineHeight: 1.7 }}>{testimonial.content}</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                  {testimonial.logo}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#10172B' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '14px', color: '#4B5563' }}>{testimonial.role}</div>
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
