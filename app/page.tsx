import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>

      <footer className="border-t border-white/[0.06] py-8">
        <div className="container flex flex-col justify-between gap-4 text-sm text-neutral-600 md:flex-row">
          <p>
            © {new Date().getFullYear()} Renan Lima.
          </p>

          <p>
            Desenvolvido com Next.js
          </p>
        </div>
      </footer>
    </>
  );
}