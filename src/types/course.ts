export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  level: CourseLevel;
  modules: number;
  prerequisites?: string[];
  objectives?: string[];
  instructor?: string;
}