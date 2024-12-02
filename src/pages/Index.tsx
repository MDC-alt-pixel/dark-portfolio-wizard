import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { TechnicalSkills } from "@/components/TechnicalSkills";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <TechnicalSkills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;