import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import ContactFooter from '@/components/ContactFooter';
import ScrollProgress from '@/components/ScrollProgress';
import Marquee from '@/components/Marquee';
import SmoothScroll from '@/components/SmoothScroll';
import FAQSection from '@/components/FAQSection';
import TestimonialSection from '@/components/TestimonialSection';

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <ScrollProgress />
      <HeroSection />
      <Marquee />
      <MenuSection />
      <TestimonialSection />
      <FAQSection />
      <ContactFooter />
    </main>
  );
}
