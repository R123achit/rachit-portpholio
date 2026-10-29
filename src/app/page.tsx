
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedProjects } from
  "@/components/sections/SelectedProjects";
import { SystemsLab } from
  "@/components/sections/SystemsLab";
import { TechStack } from
  "@/components/sections/TechStack";
import { Contact } from
  "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <SelectedProjects />
      <SystemsLab />
      <TechStack />
      <Contact />
    </main>
  );
}
