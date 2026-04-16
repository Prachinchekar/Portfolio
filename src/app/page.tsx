import { main } from "framer-motion/client";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import PageTransition from "../components/PageTransition";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";
import Services from "../sections/Services";

export default function Home() {

  const Projects = dynamic(() => import("@/src/sections/Projects"));
  const Skills = dynamic(() => import("@/src/sections/Skills"));

  return (
    <PageTransition>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Services />
      <Contact />
      <Footer />
    </PageTransition>
  );
}