import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Footer } from "@/components/layout/Footer";

export function Contact() {
  return <section id="contact" className="px-6 pt-32 sm:px-12"><SectionHeading eyebrow="04 — Contact" title="Have a good idea? Let&apos;s talk." /><a className="text-2xl text-lime-300 underline decoration-lime-300/30 underline-offset-8" href={`mailto:${site.email}`}>{site.email}</a><Footer /></section>;
}
