'use client';

import { motion } from 'framer-motion';

const Brands = () => {
  const brands = [
    { name: 'Samsung', logo: '📱' },
    { name: 'LG', logo: '📺' },
    { name: 'Sony', logo: '🎮' },
    { name: 'Panasonic', logo: '📷' },
    { name: 'Microsoft', logo: '💻' },
    { name: 'Intel', logo: '🔲' },
    { name: 'Dell', logo: '💻' },
    { name: 'HP', logo: '🖥️' },
  ];

  return (
    <section style={{ padding: '64px 0', backgroundColor: 'white', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#374151' }}>Trusted Partners & Brands</h3>
        </motion.div>

        {/* Scrolling Marquee */}
        <div style={{ position: 'relative' }}>
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: '64px' }}
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                style={{ flexShrink: 0, width: '128px', height: '80px', backgroundColor: '#F9FAFB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background-color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F0F4FF'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
              >
                <span style={{ fontSize: '24px' }}>{brand.logo}</span>
                <span style={{ fontWeight: 600, color: '#374151' }}>{brand.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
