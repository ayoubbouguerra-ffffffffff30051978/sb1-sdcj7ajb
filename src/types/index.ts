export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  modules: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  progress: {
    [courseId: string]: number;
  };
}