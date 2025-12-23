import Intro from "@/components/intro";
import Sectiondivider from "@/components/sectiondivider";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 relative z-0">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-[1]">
        <Intro/>
        <Sectiondivider/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Certifications/>
        <Contact/>
      </div>
    </main>
  );
}
