'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalItems } = useCart();

  const handlePurchase = () => {
    if (items.length === 0) return;

    const phoneNumber = '917073500169'; // Replace with actual WhatsApp number
    let message = 'Hello, I would like to purchase the following products from Nextro:\n\n';
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Category: ${item.category}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Description: ${item.shortDescription}\n\n`;
    });
    
    message += `Total Items: ${getTotalItems()}\n`;
    message += 'Please provide the quotation and payment details.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
              width: '100%',
              maxWidth: '450px',
              height: '100%',
              backgroundColor: 'white',
              zIndex: 101,
              boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '24px',
              borderBottom: '1px solid #E5E7EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShoppingBag size={24} style={{ color: '#2448D8' }} />
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#10172B', margin: 0 }}>
                  Shopping Cart
                </h2>
              </div>
              <button
                onClick={onClose}
                style={{
                  padding: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#F3F4F6',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
              >
                <X size={20} style={{ color: '#4B5563' }} />
              </button>
            </div>

            {/* Cart Items */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
              {items.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <ShoppingBag size={64} style={{ color: '#D1D5DB', marginBottom: '16px' }} />
                  <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '8px' }}>Your cart is empty</p>
                  <p style={{ fontSize: '14px', color: '#9CA3AF' }}>Add some products to get started</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {items.map((item) => (
                    <div
                      key={item.id}
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
                      <div style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}>
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px' }}
                            loading="lazy"
                          />
                        ) : (
                          <div style={{ fontSize: '32px' }}>📺</div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#10172B',
                          marginBottom: '4px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}>
                          {item.name}
                        </h4>
                        <p style={{
                          fontSize: '12px',
                          color: '#6B7280',
                          marginBottom: '8px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}>
                          {item.category}
                        </p>

                        {/* Quantity Controls */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
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
                              transition: 'border-color 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2448D8'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                          >
                            <Minus size={14} style={{ color: '#4B5563' }} />
                          </button>
                          <span style={{ fontSize: '14px', fontWeight: 600, color: '#10172B', minWidth: '24px', textAlign: 'center' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
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
                              transition: 'border-color 0.2s',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2448D8'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
                          >
                            <Plus size={14} style={{ color: '#4B5563' }} />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          padding: '8px',
                          borderRadius: '6px',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FEE2E2'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <Trash2 size={16} style={{ color: '#EF4444' }} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div style={{
                padding: '24px',
                borderTop: '1px solid #E5E7EB',
                backgroundColor: 'white',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '16px', color: '#6B7280' }}>Total Items:</span>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: '#10172B' }}>{getTotalItems()}</span>
                </div>

                <button
                  onClick={handlePurchase}
                  style={{
                    width: '100%',
                    backgroundColor: '#25D366',
                    color: 'white',
                    padding: '16px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s',
                    marginBottom: '12px',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
                >
                  <ShoppingBag size={20} />
                  <span>Purchase via WhatsApp</span>
                </button>

                <button
                  onClick={clearCart}
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: '#EF4444',
                    padding: '12px',
                    borderRadius: '12px',
                    fontWeight: 600,
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
