import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import { Course } from '../../types/course';
import { Badge } from '../ui/Badge';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{course.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-1" />
            {course.modules} modules
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Badge level={course.level} />
          <span className="text-sm text-gray-500">By {course.instructor}</span>
        </div>
      </div>
    </div>
  );
}