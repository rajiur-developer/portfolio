import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Intro, Skills, Projects, Details } from "@/components/Sections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Skills />
        <Projects />
        <Details />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
