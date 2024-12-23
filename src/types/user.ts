export interface UserProgress {
  completedModules: number;
  totalModules: number;
  lastAccessed: string;
  quizScores: Record<string, number>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  progress: Record<string, UserProgress>;
  totalLearningHours: number;
  enrolledCourses: string[];
}