import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import products from '@/data/products.json';
import { ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div style={{ padding: '120px 0 64px', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#10172B', marginBottom: '16px' }}>Product Not Found</h1>
            <p style={{ fontSize: '18px', color: '#4B5563', marginBottom: '32px' }}>The product you're looking for doesn't exist.</p>
            <Link href="/products" style={{ color: '#2448D8', textDecoration: 'none', fontWeight: 600 }}>
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div style={{ padding: '120px 0 64px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          {/* Breadcrumb */}
          <Link 
            href="/products"
            style={{ 
              display: 'inline-block', 
              color: '#2448D8', 
              textDecoration: 'none', 
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: 500 
            }}
          >
            ← Back to Products
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            {/* Product Image */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ 
                background: 'linear-gradient(135deg, #F0F4FF 0%, #E0E9FF 100%)',
                borderRadius: '20px',
                padding: '48px',
                width: '100%',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ 
                      width: '100%', 
                      height: 'auto',
                      maxHeight: '400px',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '120px' }}>📺</div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div>
              {/* Category */}
              <div style={{ 
                fontSize: '14px', 
                color: '#2448D8', 
                fontWeight: 600, 
                marginBottom: '12px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.5px' 
              }}>
                {product.category}
              </div>

              {/* Name */}
              <h1 style={{ 
                fontSize: 'clamp(28px, 4vw, 42px)', 
                fontWeight: 700, 
                color: '#10172B', 
                marginBottom: '16px',
                lineHeight: '1.2'
              }}>
                {product.name}
              </h1>

              {/* Short Description */}
              <p style={{ 
                fontSize: '18px', 
                color: '#4B5563', 
                marginBottom: '32px', 
                lineHeight: '1.6' 
              }}>
                {product.shortDescription}
              </p>

              {/* Full Description */}
              <div style={{ 
                backgroundColor: '#F9FAFB', 
                padding: '24px', 
                borderRadius: '16px', 
                marginBottom: '32px' 
              }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#10172B', 
                  marginBottom: '12px' 
                }}>
                  Product Description
                </h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#4B5563', 
                  lineHeight: '1.7' 
                }}>
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#10172B', 
                  marginBottom: '16px' 
                }}>
                  Key Features
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      style={{ 
                        fontSize: '14px', 
                        backgroundColor: '#F0F4FF', 
                        color: '#2448D8', 
                        padding: '8px 16px', 
                        borderRadius: '9999px', 
                        fontWeight: 500 
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: 600, 
                  color: '#10172B', 
                  marginBottom: '16px' 
                }}>
                  Ideal For
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {product.applications.map((application, index) => (
                    <span
                      key={index}
                      style={{ 
                        fontSize: '14px', 
                        backgroundColor: '#ECFDF5', 
                        color: '#059669', 
                        padding: '8px 16px', 
                        borderRadius: '9999px', 
                        fontWeight: 500 
                      }}
                    >
                      {application}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    flex: 1,
                    minWidth: '180px',
                    backgroundColor: '#2448D8',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '9999px',
                    fontWeight: 600,
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A35B0'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2448D8'}
                  >
                    <ShoppingCart size={20} />
                    <span>Request Quote</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return products.products.map((product) => ({
    id: product.id,
  }));
}
