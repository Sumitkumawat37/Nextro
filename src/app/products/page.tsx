import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductCatalogue from '@/components/ProductCatalogue';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProductCatalogue />
      <Footer />
    </div>
  );
}
