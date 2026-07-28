import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}
