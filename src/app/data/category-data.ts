import { Category } from '../shared/models/project.model';

export const CATEGORIES: Category[] = [
  {
    name: 'All Projects',
    description: 'All projects across all categories',
    icon: 'assets/all-projects-icon.png'
  },
  {
    name: 'Software & AI',
    description: 'Projects involving software development and machine learning',
    icon: 'assets/software-icon.png'
  },
  {
    name: 'Mobile & UX Design',
    description: 'Mobile applications and user experience design projects',
    icon: 'assets/mobile-icon.png'
  },
  {
    name: 'Visual & Digital Media',
    description: 'Graphic design, advertising, and digital media projects',
    icon: 'assets/visual-icon.png'
  },
  {
    name: 'Audio & Sound Design',
    description: 'Audio production and sound design projects',
    icon: 'assets/audio-icon.png'
  }
];
