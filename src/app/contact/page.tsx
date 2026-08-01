import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact NEXTRO | Get Free Quote for Smart AV Solutions',
  description: 'Contact NEXTRO for premium Smart AV Solutions in India. Get a free quote for interactive displays, video conferencing, digital signage, and smart classroom setups.',
  keywords: ['Contact NEXTRO', 'Smart AV Solutions Quote', 'AV Installation India', 'Interactive Display Quote', 'Video Conferencing Setup'],
  openGraph: {
    title: 'Contact NEXTRO | Get Free Quote for Smart AV Solutions',
    description: 'Contact NEXTRO for premium Smart AV Solutions in India. Get a free quote for interactive displays, video conferencing, and smart classroom setups.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}
