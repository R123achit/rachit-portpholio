import { NextResponse } from "next/server";
import { validateContactForm, type ContactForm } from "@/lib/validation";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactForm>;
  if (!validateContactForm(body)) {
    return NextResponse.json({ error: "Please provide a name, valid email, and message." }, { status: 400 });
  }
  return NextResponse.json({ message: "Thanks! Your message has been received." });
}
