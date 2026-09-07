import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function generateMetadata(): Metadata {
  return {
    title: "Mohsen Parsa — Frontend Engineer",
    description:
      "Frontend engineer specializing in React, Next.js, and TypeScript. View my projects, skills, and experience building modern web applications.",
    openGraph: {
      title: "Mohsen Parsa — Frontend Engineer",
      description:
        "Frontend engineer specializing in React, Next.js, and TypeScript. View my projects, skills, and experience building modern web applications.",
      url: "https://mohsen-parsa-portfolio.vercel.app",
      images: [
        {
          url: "/mohsen.png",
          width: 400,
          height: 400,
          alt: "Mohsen Parsa — Frontend Engineer",
        },
      ],
    },
  };
}

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mohsen Parsa — Frontend Engineer",
    url: "https://mohsen-parsa-portfolio.vercel.app",
    description:
      "Portfolio of Mohsen Parsa, a frontend engineer building fast, accessible, and polished web experiences.",
    author: {
      "@type": "Person",
      name: "Mohsen Parsa",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
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
