
export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
};
