import Intro from "@/components/intro";
import Sectiondivider from "@/components/sectiondivider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro/>
      <Sectiondivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Certifications/>
      <Contact/>
    </main>
  );
}
