import { site } from "@/data/site";

export function Footer() {
  return <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/50 sm:px-12"><p>© {new Date().getFullYear()} {site.name}. Built with care.</p></footer>;
}
