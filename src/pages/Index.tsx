import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { Portfolio } from "@/components/Portfolio";
import { MediaCarousel } from "@/components/MediaCarousel";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

// Main index page component
const Index = () => {
  return (
    // Container for all sections
    <div className="min-h-screen">
      {/* Hero section with profile photo */}
      <Hero />
      {/* About section */}
      <About />
      {/* Skills section */}
      <Skills />
      {/* Technical skills and languages */}
      <TechnicalSkills />
      {/* Portfolio section */}
      <Portfolio />
      {/* Media carousel for photos and videos */}
      <MediaCarousel />
      {/* Contact section */}
      <Contact />
      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Index;