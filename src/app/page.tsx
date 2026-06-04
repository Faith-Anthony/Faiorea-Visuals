import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ServicesPreviewSection from '@/components/sections/ServicesPreviewSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ProjectsPreviewSection from '@/components/sections/ProjectsPreviewSection';
import PackagesSection from '@/components/sections/PackagesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import BookAShootCTASection from '@/components/sections/BookAShootCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <SocialProofSection />
      </section>
      <section id="services">
        <ServicesPreviewSection />
      </section>
      <ProcessSection />
      <section id="projects">
        <ProjectsPreviewSection />
      </section>
      <PackagesSection />
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <FAQSection />
      <BookAShootCTASection />
      <Footer />
    </main>
  );
}
