import React from 'react';
import { Header } from './components/layout/Header';
import { Dashboard } from './components/dashboard/Dashboard';
import { CourseCard } from './components/courses/CourseCard';
import { courses } from './data/courses';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard />
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;