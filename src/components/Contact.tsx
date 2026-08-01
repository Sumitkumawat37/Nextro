'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '120px 0', backgroundColor: '#FFFFFF' }}>
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
            Contact
          </span>
          <h2 style={{ 
            fontSize: 'clamp(36px, 5vw, 48px)', 
            fontWeight: 600, 
            marginBottom: '20px', 
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: '#0F172A'
          }}>
            Let's start a
            <br />
            <span style={{ color: '#2448D8' }}>conversation</span>
          </h2>
          <p style={{ 
            fontSize: '18px', 
            color: '#64748B', 
            maxWidth: '540px', 
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            Ready to transform your space? Contact us for a free consultation and quote.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0F172A', marginBottom: '8px' }}>First Name</label>
                  <input
                    type="text"
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      borderRadius: '8px', 
                      border: '1px solid #E2E8F0', 
                      outline: 'none', 
                      fontSize: '15px',
                      transition: 'all 0.2s'
                    }}
                    placeholder="John"
                    suppressHydrationWarning
                    onFocus={(e) => e.currentTarget.style.borderColor = '#2448D8'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0F172A', marginBottom: '8px' }}>Last Name</label>
                  <input
                    type="text"
                    style={{ 
                      width: '100%', 
                      padding: '12px 16px', 
                      borderRadius: '8px', 
                      border: '1px solid #E2E8F0', 
                      outline: 'none', 
                      fontSize: '15px',
                      transition: 'all 0.2s'
                    }}
                    placeholder="Doe"
                    suppressHydrationWarning
                    onFocus={(e) => e.currentTarget.style.borderColor = '#2448D8'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0F172A', marginBottom: '8px' }}>Email</label>
                <input
                  type="email"
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    border: '1px solid #E2E8F0', 
                    outline: 'none', 
                    fontSize: '15px',
                    transition: 'all 0.2s'
                  }}
                  placeholder="john@company.com"
                  suppressHydrationWarning
                  onFocus={(e) => e.currentTarget.style.borderColor = '#2448D8'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0F172A', marginBottom: '8px' }}>Phone</label>
                <input
                  type="tel"
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    border: '1px solid #E2E8F0', 
                    outline: 'none', 
                    fontSize: '15px',
                    transition: 'all 0.2s'
                  }}
                  placeholder="+91 98765 43210"
                  suppressHydrationWarning
                  onFocus={(e) => e.currentTarget.style.borderColor = '#2448D8'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#0F172A', marginBottom: '8px' }}>Message</label>
                <textarea
                  rows={4}
                  style={{ 
                    width: '100%', 
                    padding: '12px 16px', 
                    borderRadius: '8px', 
                    border: '1px solid #E2E8F0', 
                    outline: 'none', 
                    transition: 'all 0.2s', 
                    resize: 'none',
                    fontSize: '15px'
                  }}
                  placeholder="Tell us about your requirements..."
                  suppressHydrationWarning
                  onFocus={(e) => e.currentTarget.style.borderColor = '#2448D8'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#E2E8F0'}
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{ 
                  width: '100%', 
                  backgroundColor: '#0F172A', 
                  color: 'white', 
                  padding: '16px', 
                  borderRadius: '8px', 
                  fontWeight: 500, 
                  fontSize: '15px',
                  border: 'none', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Send Message</span>
                <ArrowRight size={16} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
          >
            {/* Map */}
            <div style={{ 
              backgroundColor: '#F8FAFC', 
              borderRadius: '12px', 
              height: '280px', 
              border: '1px solid #E2E8F0',
              overflow: 'hidden'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.654321!2d75.7872!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!!!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NsKwNDcnMTMuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#F8FAFC',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={20} style={{ color: '#2448D8' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: '#0F172A', fontSize: '15px', marginBottom: '4px' }}>Phone</h4>
                  <p style={{ color: '#64748B', fontSize: '14px' }}>+91-7073500169</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#F8FAFC',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={20} style={{ color: '#2448D8' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: '#0F172A', fontSize: '15px', marginBottom: '4px' }}>Email</h4>
                  <p style={{ color: '#64748B', fontSize: '14px' }}>nextro081@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#F8FAFC',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={20} style={{ color: '#2448D8' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: '#0F172A', fontSize: '15px', marginBottom: '4px' }}>Address</h4>
                  <p style={{ color: '#64748B', fontSize: '14px', lineHeight: 1.6 }}>
                    FF-29, Jaipur Electronic Market,<br />
                    Ridhi Sidhi, Jaipur, Rajasthan
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '8px', 
                  backgroundColor: '#F8FAFC',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock size={20} style={{ color: '#2448D8' }} />
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: '#0F172A', fontSize: '15px', marginBottom: '4px' }}>Working Hours</h4>
                  <p style={{ color: '#64748B', fontSize: '14px' }}>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
              <motion.a
                href="https://wa.me/917073500169"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  flex: 1, 
                  backgroundColor: '#0F172A', 
                  color: 'white', 
                  padding: '14px 20px', 
                  borderRadius: '8px', 
                  fontWeight: 500, 
                  fontSize: '14px',
                  border: 'none', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </motion.a>
              <motion.a
                href="tel:+917073500169"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  flex: 1, 
                  backgroundColor: 'white', 
                  color: '#0F172A', 
                  border: '1px solid #E2E8F0',
                  padding: '14px 20px', 
                  borderRadius: '8px', 
                  fontWeight: 500, 
                  fontSize: '14px',
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px', 
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Phone size={18} />
                <span>Call</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
