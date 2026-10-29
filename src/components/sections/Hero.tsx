import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";

export function Hero() {
  return <section className="flex min-h-screen flex-col justify-center px-6 py-32 sm:px-12"><Navbar /><p className="mb-6 text-sm uppercase tracking-[0.25em] text-lime-300">{site.role}</p><h1 className="max-w-5xl text-6xl font-semibold tracking-[-0.06em] sm:text-9xl">{site.intro}</h1><div className="mt-10"><Button href="#projects">Explore my work ↓</Button></div></section>;
}
