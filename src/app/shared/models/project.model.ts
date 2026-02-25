export interface Category {
  name: string;
  description?: string;
  icon?: string;
}

export interface Phase {
  name: string;
  tasks: string[];
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category?: Category;
  overview: string;
  goals: string[];
  images: string[];
  phases: Phase[];
  conclusion: string;
  link: string;
}
