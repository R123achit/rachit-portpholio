import Link from "next/link";

export default function NotFound() {
  return <main className="flex min-h-screen flex-col items-center justify-center gap-6"><p className="text-6xl font-semibold">404</p><p className="text-white/60">This page does not exist.</p><Link className="text-lime-300 underline" href="/">Back home</Link></main>;
}
