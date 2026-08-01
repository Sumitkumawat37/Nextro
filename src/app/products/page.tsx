import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ProductCatalogue from '@/components/ProductCatalogue';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Products | NEXTRO Smart AV Solutions - Interactive Displays & More',
  description: 'Explore NEXTRO\'s premium Smart AV products including interactive flat panels, PTZ cameras, video bars, digital podiums, and audio systems for education and business.',
  keywords: ['Smart AV Products', 'Interactive Displays', 'PTZ Cameras', 'Video Bars', 'Digital Podium', 'Audio Systems', 'Education Technology'],
  openGraph: {
    title: 'Products | NEXTRO Smart AV Solutions',
    description: 'Explore NEXTRO\'s premium Smart AV products including interactive displays, PTZ cameras, video bars, and digital podiums.',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProductCatalogue />
      <Footer />
    </div>
  );
}
