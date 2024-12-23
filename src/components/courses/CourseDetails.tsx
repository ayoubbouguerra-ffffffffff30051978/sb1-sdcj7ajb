import React from 'react';
import { Clock, BookOpen, Target, List } from 'lucide-react';
import type { Course } from '../../types/course';
import { Badge } from '../ui/Badge';

interface CourseDetailsProps {
  course: Course;
}

export function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          <Badge level={course.level} />
        </div>
        
        <p className="text-gray-600 mb-6">{course.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <BookOpen className="h-5 w-5 mr-2" />
            <span>{course.modules} modules</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {course.prerequisites?.map((prereq) => (
              <li key={prereq} className="flex items-start">
                <List className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{prereq}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Learning Objectives</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {course.objectives?.map((objective) => (
              <li key={objective} className="flex items-start">
                <Target className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Instructor</p>
              <p className="text-lg font-medium text-gray-900">{course.instructor}</p>
            </div>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}