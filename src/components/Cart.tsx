'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalItems } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    onClose();
    router.push('/contact');
  };

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
          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: '100%',
              maxWidth: '450px',
              backgroundColor: 'white',
              zIndex: 101,
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '24px',
                borderBottom: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShoppingBag size={24} style={{ color: '#2448D8' }} />
                <h2
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#10172B',
                    margin: 0,
                  }}
                >
                  Your Cart
                </h2>
                <span
                  style={{
                    backgroundColor: '#2448D8',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  {getTotalItems()}
                </span>
              </div>
              <button
                onClick={onClose}
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#F3F4F6',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
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
            </div>

            {/* Cart Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
              {cart.length === 0 ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                  }}
                >
                  <ShoppingBag
                    size={64}
                    style={{ color: '#D1D5DB', marginBottom: '16px' }}
                  />
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#10172B',
                      marginBottom: '8px',
                    }}
                  >
                    Your cart is empty
                  </h3>
                  <p style={{ color: '#6B7280', marginBottom: '24px' }}>
                    Add some products to get started
                  </p>
                  <button
                    onClick={onClose}
                    style={{
                      backgroundColor: '#2448D8',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '9999px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = '#1A35B0')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = '#2448D8')
                    }
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        display: 'flex',
                        gap: '16px',
                        padding: '16px',
                        backgroundColor: '#F9FAFB',
                        borderRadius: '12px',
                        border: '1px solid #E5E7EB',
                      }}
                    >
                      {/* Product Image */}
                      <div
                        style={{
                          width: '80px',
                          height: '80px',
                          backgroundColor: '#F0F4FF',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          overflow: 'hidden',
                        }}
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              padding: '8px',
                            }}
                          />
                        ) : (
                          <div style={{ fontSize: '32px' }}>📺</div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4
                          style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#10172B',
                            marginBottom: '4px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.name}
                        </h4>
                        <p
                          style={{
                            fontSize: '12px',
                            color: '#6B7280',
                            marginBottom: '8px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {item.category}
                        </p>

                        {/* Quantity Controls */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '6px',
                              backgroundColor: 'white',
                              border: '1px solid #D1D5DB',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#F3F4F6';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'white';
                            }}
                          >
                            <Minus size={14} />
                          </button>
                          <span
                            style={{
                              fontSize: '14px',
                              fontWeight: 600,
                              color: '#10172B',
                              minWidth: '24px',
                              textAlign: 'center',
                            }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            style={{
                              width: '28px',
                              height: '28px',
                              borderRadius: '6px',
                              backgroundColor: 'white',
                              border: '1px solid #D1D5DB',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#F3F4F6';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'white';
                            }}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          padding: '8px',
                          borderRadius: '6px',
                          backgroundColor: '#FEF2F2',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#EF4444',
                          transition: 'all 0.2s',
                          height: 'fit-content',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#FEE2E2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#FEF2F2';
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div
                style={{
                  padding: '24px',
                  borderTop: '1px solid #E5E7EB',
                  backgroundColor: '#F9FAFB',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#6B7280',
                    }}
                  >
                    Total Items
                  </span>
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#10172B',
                    }}
                  >
                    {getTotalItems()}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  style={{
                    width: '100%',
                    backgroundColor: '#2448D8',
                    color: 'white',
                    padding: '14px',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    marginBottom: '12px',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#1A35B0')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = '#2448D8')
                  }
                >
                  Request Quote for {getTotalItems()} Item{getTotalItems() !== 1 ? 's' : ''}
                </motion.button>
                <button
                  onClick={clearCart}
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: '#EF4444',
                    padding: '12px',
                    borderRadius: '9999px',
                    fontWeight: 500,
                    fontSize: '14px',
                    border: '1px solid #EF4444',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FEF2F2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
