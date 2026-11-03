import { Nav } from "@/components/navigation/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { AgentWorkflow } from "@/components/sections/AgentWorkflow";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <AgentWorkflow />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
