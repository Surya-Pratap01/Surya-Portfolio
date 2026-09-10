import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Build from '@/components/sections/Build';
import Stack from '@/components/sections/Stack';
import LeadCompete from '@/components/sections/LeadCompete';
import Milestones from '@/components/sections/Milestones';
import WhatsNext from '@/components/sections/WhatsNext';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Build />
        <Stack />
        <LeadCompete />
        <Milestones />
        <WhatsNext />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
