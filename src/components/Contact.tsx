'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Building2, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  const services = [
    'Smart Classroom Setup',
    'Video Conference Solutions',
    'Interactive Flat Panel Installation',
    'Digital Podium Setup',
    'Recording Studio Setup',
    'Active LED Installation',
    'PTZ Camera Installation',
    'Audio System Integration',
  ];

  return (
    <section id="contact" style={{ padding: 'clamp(48px, 8vw, 96px) 0', backgroundColor: 'white' }}>
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
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Get In Touch</span>
          </h2>
          <p style={{ fontSize: 'clamp(16px, 3vw, 20px)', color: '#4B5563', maxWidth: '672px', margin: '0 auto', lineHeight: 1.6, padding: '0 16px', overflowWrap: 'break-word' }}>
            Ready to transform your space? Contact us for a free consultation and quote. Our team is ready to help you find the perfect AV solution.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(24px, 5vw, 48px)' }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 4vw, 24px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'clamp(16px, 4vw, 24px)' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Name</label>
                  <input
                    type="text"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D1D5DB', outline: 'none', transition: 'all 0.2s' }}
                    placeholder="Your name"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Email</label>
                  <input
                    type="email"
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D1D5DB', outline: 'none', transition: 'all 0.2s' }}
                    placeholder="your@email.com"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Phone</label>
                <input
                  type="tel"
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D1D5DB', outline: 'none', transition: 'all 0.2s' }}
                  placeholder="+91 98765 43210"
                  suppressHydrationWarning
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Subject</label>
                <select style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D1D5DB', outline: 'none', transition: 'all 0.2s' }} suppressHydrationWarning>
                  <option>Request Quote</option>
                  <option>Product Inquiry</option>
                  <option>Technical Support</option>
                  <option>Installation Service</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#374151', marginBottom: '8px' }}>Message</label>
                <textarea
                  rows={4}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D1D5DB', outline: 'none', transition: 'all 0.2s', resize: 'none' }}
                  placeholder="Tell us about your requirements..."
                  suppressHydrationWarning
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{ width: '100%', backgroundColor: '#2448D8', color: 'white', padding: '16px', borderRadius: '12px', fontWeight: 600, boxShadow: '0 10px 40px rgba(36, 72, 216, 0.3)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {/* Map */}
            <div style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)', borderRadius: '16px', height: '256px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <MapPin style={{ width: '48px', height: '48px', color: '#2448D8', margin: '0 auto 8px' }} />
                <p style={{ color: '#4B5563' }}>FF-29, Jaipur Electronic Market, Ridhi Sidhi, Jaipur, Rajasthan</p>
              </div>
            </div>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: '#F9FAFB', borderRadius: '12px' }}>
                <Phone style={{ width: '24px', height: '24px', color: '#2448D8', marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontWeight: 600, color: '#10172B' }}>Phone</h4>
                  <p style={{ color: '#4B5563' }}>+91-7073500169</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: '#F9FAFB', borderRadius: '12px' }}>
                <Mail style={{ width: '24px', height: '24px', color: '#2448D8', marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontWeight: 600, color: '#10172B' }}>Email</h4>
                  <p style={{ color: '#4B5563' }}>nextro081@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: '#F9FAFB', borderRadius: '12px' }}>
                <Building2 style={{ width: '24px', height: '24px', color: '#2448D8', marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontWeight: 600, color: '#10172B' }}>Director</h4>
                  <p style={{ color: '#4B5563' }}>Govind Kumar</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', backgroundColor: '#F9FAFB', borderRadius: '12px' }}>
                <Clock style={{ width: '24px', height: '24px', color: '#2448D8', marginTop: '4px' }} />
                <div>
                  <h4 style={{ fontWeight: 600, color: '#10172B' }}>Working Hours</h4>
                  <p style={{ color: '#4B5563' }}>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p style={{ color: '#4B5563', fontSize: '13px' }}>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Services We Offer */}
            <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '16px', padding: 'clamp(16px, 4vw, 24px)', color: 'white', boxShadow: '0 10px 40px rgba(240, 147, 251, 0.3)', width: '100%', boxSizing: 'border-box' }}>
              <h4 style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 700, marginBottom: '16px', overflowWrap: 'break-word' }}>Services We Offer</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
                {services.map((service, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'clamp(13px, 2vw, 14px)', opacity: 0.95, wordBreak: 'break-word' }}>
                    <CheckCircle size={16} style={{ flexShrink: 0 }} />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', flexWrap: 'wrap' }}>
              <motion.a
                href="https://wa.me/917073500169"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  flex: '1 1 200px', 
                  minWidth: '200px',
                  backgroundColor: '#22C55E', 
                  color: 'white', 
                  padding: '14px 20px', 
                  borderRadius: '12px', 
                  fontWeight: 600, 
                  border: 'none', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  transition: 'background-color 0.2s', 
                  textDecoration: 'none',
                  fontSize: '16px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#16A34A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#22C55E'}
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="tel:+917073500169"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  flex: '1 1 200px', 
                  minWidth: '200px',
                  backgroundColor: '#2448D8', 
                  color: 'white', 
                  padding: '14px 20px', 
                  borderRadius: '12px', 
                  fontWeight: 600, 
                  border: 'none', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  transition: 'background-color 0.2s', 
                  textDecoration: 'none',
                  fontSize: '16px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
              >
                <Phone size={20} />
                <span>Call Now</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Branch Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: 'clamp(32px, 6vw, 64px)', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '16px', padding: 'clamp(24px, 5vw, 48px)', color: 'white', boxShadow: '0 10px 40px rgba(102, 126, 234, 0.3)', width: '100%', boxSizing: 'border-box' }}
        >
          <h3 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, marginBottom: '16px', textAlign: 'center', overflowWrap: 'break-word' }}>Our Branch Locations</h3>
          <p style={{ fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: '32px', textAlign: 'center', maxWidth: '672px', margin: '0 auto 32px', opacity: 0.95, lineHeight: 1.6, padding: '0 16px', overflowWrap: 'break-word' }}>
            We serve customers across India with our extensive branch network. Visit any of our locations for personalized service.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 'clamp(12px, 3vw, 16px)' }}>
            {['Jaipur', 'Kanpur', 'Lucknow', 'Jhalawar', 'Bhilwara', 'Bharatpur', 'Sri Ganganagar', 'Ratlam', 'Bhopal', 'Gwalior', 'Kota', 'Patna'].map((location, index) => (
              <div key={index} style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '12px', padding: '16px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)', width: '100%', boxSizing: 'border-box' }}>
                <MapPin size={20} style={{ margin: '0 auto 8px', opacity: 0.9 }} />
                <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', fontWeight: 500, overflowWrap: 'break-word' }}>{location}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
