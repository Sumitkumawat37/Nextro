'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Heart } from 'lucide-react';

interface ProductModalProps {
  product: any;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: any) => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
}

const ProductModal = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}: ProductModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 100,
              backdropFilter: 'blur(4px)',
            }}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              zIndex: 101,
              maxWidth: '900px',
              width: '90%',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '8px',
                borderRadius: '50%',
                backgroundColor: '#F3F4F6',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5E7EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F3F4F6';
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* Product Image */}
              <div
                style={{
                  position: 'relative',
                  height: '300px',
                  background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                  overflow: 'hidden',
                }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      padding: '32px',
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '80px' }}>📺</div>
                )}
              </div>

              {/* Product Details */}
              <div style={{ padding: '32px' }}>
                {/* Category */}
                <div
                  style={{
                    fontSize: '14px',
                    color: '#2448D8',
                    fontWeight: 600,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {product.category}
                </div>

                {/* Name */}
                <h2
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#10172B',
                    marginBottom: '16px',
                  }}
                >
                  {product.name}
                </h2>

                {/* Short Description */}
                <p
                  style={{
                    fontSize: '16px',
                    color: '#4B5563',
                    marginBottom: '24px',
                    lineHeight: '1.6',
                  }}
                >
                  {product.shortDescription}
                </p>

                {/* Full Description */}
                <div
                  style={{
                    backgroundColor: '#F9FAFB',
                    padding: '20px',
                    borderRadius: '12px',
                    marginBottom: '24px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#10172B',
                      marginBottom: '12px',
                    }}
                  >
                    Product Description
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: '#4B5563',
                      lineHeight: '1.7',
                    }}
                  >
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div style={{ marginBottom: '24px' }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#10172B',
                      marginBottom: '12px',
                    }}
                  >
                    Key Features
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {product.features.map((feature: string, index: number) => (
                      <span
                        key={index}
                        style={{
                          fontSize: '13px',
                          backgroundColor: '#F0F4FF',
                          color: '#2448D8',
                          padding: '6px 12px',
                          borderRadius: '9999px',
                          fontWeight: 500,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div style={{ marginBottom: '32px' }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#10172B',
                      marginBottom: '12px',
                    }}
                  >
                    Ideal For
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {product.applications.map(
                      (application: string, index: number) => (
                        <span
                          key={index}
                          style={{
                            fontSize: '13px',
                            backgroundColor: '#ECFDF5',
                            color: '#059669',
                            padding: '6px 12px',
                            borderRadius: '9999px',
                            fontWeight: 500,
                          }}
                        >
                          {application}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onAddToCart(product)}
                    style={{
                      flex: 1,
                      minWidth: '200px',
                      backgroundColor: '#2448D8',
                      color: 'white',
                      padding: '14px 24px',
                      borderRadius: '9999px',
                      fontWeight: 600,
                      fontSize: '16px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = '#1A35B0')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = '#2448D8')
                    }
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onToggleFavorite(product.id)}
                    style={{
                      padding: '14px 24px',
                      border: '2px solid #2448D8',
                      color: isFavorite ? '#EF4444' : '#2448D8',
                      borderRadius: '9999px',
                      fontWeight: 600,
                      fontSize: '16px',
                      cursor: 'pointer',
                      backgroundColor: 'transparent',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F0F4FF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Heart
                      size={20}
                      fill={isFavorite ? 'currentColor' : 'none'}
                    />
                    <span>{isFavorite ? 'Saved' : 'Save'}</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
