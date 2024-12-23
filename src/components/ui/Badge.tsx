import React from 'react';
import { CourseLevel } from '../../types/course';

interface BadgeProps {
  level: CourseLevel;
}

export function Badge({ level }: BadgeProps) {
  const styles = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[level]}`}>
      {level}
    </span>
  );
}