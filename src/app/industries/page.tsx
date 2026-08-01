import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Industries from '@/components/Industries';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Industries | NEXTRO Smart AV Solutions - Education, Corporate & More',
  description: 'NEXTRO serves various industries with premium Smart AV solutions including education, corporate, healthcare, retail, and government sectors across India.',
  keywords: ['Smart AV Industries', 'Education AV Solutions', 'Corporate AV', 'Healthcare AV', 'Retail Digital Signage', 'Government AV Solutions'],
  openGraph: {
    title: 'Industries | NEXTRO Smart AV Solutions',
    description: 'NEXTRO serves various industries with premium Smart AV solutions including education, corporate, healthcare, and retail sectors.',
    type: 'website',
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Industries />
      <Footer />
    </div>
  );
}
