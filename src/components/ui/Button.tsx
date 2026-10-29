import type { ReactNode } from "react";

type ButtonProps = { children: ReactNode; href: string };

export function Button({ children, href }: ButtonProps) {
  return <a className="inline-flex rounded-full bg-lime-300 px-6 py-3 font-medium text-neutral-950 transition hover:bg-lime-200" href={href}>{children}</a>;
}
