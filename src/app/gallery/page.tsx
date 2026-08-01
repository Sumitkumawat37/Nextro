import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gallery | NEXTRO Smart AV Solutions - Project Showcase',
  description: 'View NEXTRO\'s project gallery showcasing successful Smart AV installations including smart classrooms, conference rooms, auditoriums, and digital signage projects across India.',
  keywords: ['AV Project Gallery', 'Smart Classroom Projects', 'Conference Room Setup', 'AV Installation Gallery', 'Digital Signage Projects'],
  openGraph: {
    title: 'Gallery | NEXTRO Smart AV Solutions',
    description: 'View NEXTRO\'s project gallery showcasing successful Smart AV installations across India.',
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Gallery />
      <Footer />
    </div>
  );
}
