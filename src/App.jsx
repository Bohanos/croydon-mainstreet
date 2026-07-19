import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CraftsmanPromise from './components/CraftsmanPromise';
import ServicesGrid from './components/ServicesGrid';
import InteriorGallery from './components/InteriorGallery';
import CommunitySection from './components/CommunitySection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CraftsmanPromise />
      <ServicesGrid />
      <InteriorGallery />
      <CommunitySection />
      <Testimonials />
      <Footer />
    </main>
  );
}
