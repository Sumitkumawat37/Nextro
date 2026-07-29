'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Filter, Heart, Share2, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import products from '@/data/products.json';
import categories from '@/data/categories.json';
import { useCart } from '@/context/CartContext';

const ProductCatalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const router = useRouter();
  const { addToCart } = useCart();

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

  const handleAddToCart = useCallback((product: any) => {
    addToCart(product);
  }, [addToCart]);

  const handleRequestQuote = useCallback((product: any) => {
    router.push('/contact');
  }, [router]);

  const handleShare = useCallback((product: any) => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
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
              <div style={{ position: 'relative', height: '240px', background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)', overflow: 'hidden' }}>
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '24px' }}
                  />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '64px' }}>📺</div>
                  </div>
                )}
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
                    onClick={() => handleShare(product)}
                    style={{ padding: '8px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)', cursor: 'pointer', color: '#4B5563' }}
                  >
                    <Share2 size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Product Info */}
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '13px', color: '#2448D8', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{product.category}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#10172B', marginBottom: '12px', lineHeight: '1.3' }}>{product.name}</h3>
                <p style={{ fontSize: '15px', color: '#4B5563', marginBottom: '20px', lineHeight: '1.6' }}>{product.shortDescription}</p>

                {/* Full Description */}
                <div style={{ backgroundColor: '#F9FAFB', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#10172B', marginBottom: '8px' }}>Product Description</h4>
                  <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: '1.6' }}>{product.description}</p>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#10172B', marginBottom: '12px' }}>Key Features</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        style={{ fontSize: '13px', backgroundColor: '#F0F4FF', color: '#2448D8', padding: '6px 12px', borderRadius: '9999px', fontWeight: 500 }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#10172B', marginBottom: '12px' }}>Ideal For</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {product.applications.map((application, i) => (
                      <span
                        key={i}
                        style={{ fontSize: '13px', backgroundColor: '#ECFDF5', color: '#059669', padding: '6px 12px', borderRadius: '9999px', fontWeight: 500 }}
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart(product)}
                    style={{ flex: 1, minWidth: '140px', backgroundColor: '#2448D8', color: 'white', padding: '12px 20px', borderRadius: '9999px', fontWeight: 600, fontSize: '15px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background-color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRequestQuote(product)}
                    style={{ flex: 1, minWidth: '140px', backgroundColor: '#10B981', color: 'white', padding: '12px 20px', borderRadius: '9999px', fontWeight: 600, fontSize: '15px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background-color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10B981'}
                  >
                    <span>Request Quote</span>
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
