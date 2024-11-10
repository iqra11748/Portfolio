import Hero from "@/components/Hero";
import About from "@/components/About"
import Contact from "@/components/Contact"
import Projects from "@/components/project"
import Skills from  "@/components/Skills";



export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    </main>
  );
}
