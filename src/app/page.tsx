import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import ContactFooter from '@/components/ContactFooter';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <HeroSection />
      <MenuSection />
      <ContactFooter />
    </main>
  );
}
