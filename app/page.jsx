/* eslint-disable */

import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section
      id="home"
      className="flex selection:bg-fuchsia-700 flex-col items-center justify-center gap-4 p-2 "
    >
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </section>
  );
}
