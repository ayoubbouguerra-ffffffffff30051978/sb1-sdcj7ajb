import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript.',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800',
    duration: '6 weeks',
    level: 'Beginner',
    modules: 12,
    prerequisites: ['Basic computer skills'],
    objectives: ['Understand HTML structure', 'Style with CSS', 'JavaScript basics'],
    instructor: 'Sarah Johnson'
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    description: 'Master advanced React concepts and design patterns for scalable applications.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800',
    duration: '8 weeks',
    level: 'Advanced',
    modules: 15,
    prerequisites: ['JavaScript', 'Basic React knowledge'],
    objectives: ['Component patterns', 'State management', 'Performance optimization'],
    instructor: 'Michael Chen'
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    description: 'Learn essential design principles and tools for creating engaging user interfaces.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800',
    duration: '4 weeks',
    level: 'Intermediate',
    modules: 8,
    prerequisites: ['Basic design concepts'],
    objectives: ['Design thinking', 'User research', 'Prototyping'],
    instructor: 'Emma Davis'
  }
];