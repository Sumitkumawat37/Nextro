import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About NEXTRO | Premium Smart AV Solutions Provider in India',
  description: 'Learn about NEXTRO - your trusted partner for Smart AV Solutions in India. Founded in 2019, we deliver innovative audio-visual solutions for education and business.',
  keywords: ['About NEXTRO', 'Smart AV Solutions India', 'AV Solutions Provider', 'Education Technology', 'Corporate AV', 'Interactive Displays'],
  openGraph: {
    title: 'About NEXTRO | Premium Smart AV Solutions Provider in India',
    description: 'Learn about NEXTRO - your trusted partner for Smart AV Solutions in India. Founded in 2019, we deliver innovative audio-visual solutions.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <About />
      <Footer />
    </div>
  );
}
