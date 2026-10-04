import { Nav } from "@/components/navigation/Nav";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { HowIBuild } from "@/components/sections/HowIBuild";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Philosophy />
        <HowIBuild />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
