import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Services from '@/components/sections/Services';
import Journey from '@/components/sections/Journey';
import Markets from '@/components/sections/Markets';
import Clients from '@/components/sections/Clients';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Resources from '@/components/sections/Resources';

export default function HomePage() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Journey />
        <Markets />
        <Clients />
        <Testimonials />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
