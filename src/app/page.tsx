import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
