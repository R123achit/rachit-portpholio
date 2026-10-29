
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "prepforge",
    number: "01",
    name: "PrepForge",
    category: "AI INTERVIEW PLATFORM",
    summary:
      "An AI-powered interview preparation platform with real-time video interviews and automated feedback.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "WebRTC",
      "Socket.IO",
    ],
    features: [
      "JWT authentication and role-based access control",
      "AI interview generation and feedback",
      "Real-time video interview functionality",
      "Lazy loading and database schema optimization",
    ],
    image: "/images/projects/prepforge.webp",
  },
  {
    slug: "vstra",
    number: "02",
    name: "VSTRA",
    category: "MULTI-VENDOR COMMERCE",
    summary:
      "A full-stack marketplace with seller tools, payment integration, and analytics.",
    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Razorpay",
      "Tailwind CSS",
    ],
    features: [
      "JWT authentication and RBAC",
      "Payment integration",
      "Seller dashboard and commission system",
      "Server-side rendering and image optimization",
    ],
    image: "/images/projects/vstra.webp",
  },
  {
    slug: "cityconnect",
    number: "03",
    name: "CityConnect",
    category: "REAL-TIME TRANSPORT",
    summary:
      "A public transportation management system with live tracking and route management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
    ],
    features: [
      "Passenger, driver, and admin authentication",
      "Live bus tracking",
      "QR-based ticket booking and SOS alerts",
      "Route management and analytics",
    ],
    image: "/images/projects/cityconnect.webp",
  },
];
