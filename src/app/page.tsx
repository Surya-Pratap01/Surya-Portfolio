import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import MoreProjects from '@/components/sections/MoreProjects';
import About from '@/components/sections/About';
import ExperienceLeadership from '@/components/sections/ExperienceLeadership';
import Skills from '@/components/sections/Skills';
import AchievementsEducation from '@/components/sections/AchievementsEducation';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <FeaturedProjects />
        <MoreProjects />
        <About />
        <ExperienceLeadership />
        <Skills />
        <AchievementsEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
