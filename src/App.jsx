import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CraftsmanPromise from './components/CraftsmanPromise';
import ServicesGrid from './components/ServicesGrid';
import InteriorGallery from './components/InteriorGallery';
import CommunitySection from './components/CommunitySection';
import Testimonials from './components/Testimonials';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <main>
      <Navbar />
      <Hero />
      <CraftsmanPromise />
      <ServicesGrid onBookClick={() => setIsBookingOpen(true)} />
      {isBookingOpen && <BookingSection />}
      <InteriorGallery />
      <CommunitySection />
      <Testimonials />
      <Footer />
    </main>
  );
}
