'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Filter, Heart, Share2, Eye, ShoppingCart } from 'lucide-react';
import products from '@/data/products.json';
import categories from '@/data/categories.json';

const ProductCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  }, []);

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All'
      ? products.products
      : products.products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="products" style={{ padding: '96px 0', backgroundColor: 'white' }}>
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
            <span style={{ background: 'linear-gradient(135deg, #2448D8 0%, #3D5FE8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Product Catalogue</span>
          </h2>
          <p style={{ fontSize: '20px', color: '#4B5563', maxWidth: '672px', margin: '0 auto' }}>
            Explore our complete range of Smart AV Solutions designed for modern education and business
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '48px' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Filter style={{ width: '20px', height: '20px', color: '#2448D8' }} />
            <button
              onClick={() => setSelectedCategory('All')}
              style={{ padding: '8px 16px', borderRadius: '9999px', fontWeight: 500, transition: 'all 0.2s', border: 'none', cursor: 'pointer', backgroundColor: selectedCategory === 'All' ? '#2448D8' : '#F3F4F6', color: selectedCategory === 'All' ? 'white' : '#374151', boxShadow: selectedCategory === 'All' ? '0 10px 40px rgba(36, 72, 216, 0.3)' : 'none' }}
              onMouseEnter={(e) => { if (selectedCategory !== 'All') e.currentTarget.style.backgroundColor = '#E5E7EB'; }}
              onMouseLeave={(e) => { if (selectedCategory !== 'All') e.currentTarget.style.backgroundColor = '#F3F4F6'; }}
            >
              All Products
            </button>
            {categories.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{ padding: '8px 16px', borderRadius: '9999px', fontWeight: 500, transition: 'all 0.2s', border: 'none', cursor: 'pointer', backgroundColor: selectedCategory === category ? '#2448D8' : '#F3F4F6', color: selectedCategory === category ? 'white' : '#374151', boxShadow: selectedCategory === category ? '0 10px 40px rgba(36, 72, 216, 0.3)' : 'none' }}
                onMouseEnter={(e) => { if (selectedCategory !== category) e.currentTarget.style.backgroundColor = '#E5E7EB'; }}
                onMouseLeave={(e) => { if (selectedCategory !== category) e.currentTarget.style.backgroundColor = '#F3F4F6'; }}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid #F3F4F6', transition: 'all 0.3s', overflow: 'hidden' }}
            >
              {/* Product Image */}
              <div style={{ position: 'relative', height: '192px', background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '48px' }}>📺</div>
                </div>
                <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', gap: '8px' }}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(product.id)}
                    style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)', cursor: 'pointer', color: favorites.has(product.id) ? '#EF4444' : '#4B5563' }}
                  >
                    <Heart size={18} fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)', cursor: 'pointer', color: '#4B5563' }}
                  >
                    <Share2 size={18} />
                  </motion.button>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ position: 'absolute', bottom: '12px', left: '12px', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', padding: '6px 12px', borderRadius: '9999px', fontSize: '14px', fontWeight: 500, color: '#2448D8', display: 'flex', alignItems: 'center', gap: '4px', border: 'none', cursor: 'pointer' }}
                >
                  <Eye size={14} />
                  <span>Quick View</span>
                </motion.button>
              </div>

              {/* Product Info */}
              <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '12px', color: '#2448D8', fontWeight: 500, marginBottom: '8px' }}>{product.category}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#10172B', marginBottom: '8px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.name}</h3>
                <p style={{ fontSize: '14px', color: '#4B5563', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.shortDescription}</p>

                {/* Features */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {product.features.slice(0, 3).map((feature, i) => (
                    <span
                      key={i}
                      style={{ fontSize: '12px', backgroundColor: '#F0F4FF', color: '#2448D8', padding: '4px 8px', borderRadius: '9999px' }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ flex: 1, backgroundColor: '#2448D8', color: 'white', padding: '10px', borderRadius: '9999px', fontWeight: 500, fontSize: '14px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', transition: 'background-color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
                  >
                    <ShoppingCart size={16} />
                    <span>Request Quote</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ padding: '10px 16px', border: '2px solid #2448D8', color: '#2448D8', borderRadius: '9999px', fontWeight: 500, fontSize: '14px', cursor: 'pointer', backgroundColor: 'transparent', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#2448D8'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#2448D8'; }}
                  >
                    Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '64px 0' }}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#10172B', marginBottom: '8px' }}>No products found</h3>
            <p style={{ color: '#4B5563' }}>Try selecting a different category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalogue;
