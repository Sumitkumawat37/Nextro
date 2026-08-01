import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Industries from '@/components/Industries';
import WhyNextro from '@/components/WhyNextro';
import Branches from '@/components/Branches';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Solutions />
      <Industries />
      <WhyNextro />
      <Gallery />
      <Branches />
      <Footer />
    </div>
  );
}
