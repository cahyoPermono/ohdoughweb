import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import ContactFooter from '@/components/ContactFooter';
import ScrollProgress from '@/components/ScrollProgress';
import Marquee from '@/components/Marquee';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <ScrollProgress />
      <HeroSection />
      <Marquee />
      <MenuSection />
      <ContactFooter />
    </main>
  );
}
