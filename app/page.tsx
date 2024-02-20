import Intro from "@/components/intro";
import Sectiondivider from "@/components/sectiondivider";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <Sectiondivider/>
      <About/>
    </main>
  );
}
