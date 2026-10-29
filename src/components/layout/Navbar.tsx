import Link from "next/link";

export function Navbar() {
  return <nav className="fixed top-0 z-10 flex w-full items-center justify-between px-6 py-6 mix-blend-difference sm:px-12"><Link href="/" className="text-xl font-semibold">R.</Link><div className="flex gap-6 text-sm"><a href="#projects">Projects</a><a href="#contact">Contact</a></div></nav>;
}
