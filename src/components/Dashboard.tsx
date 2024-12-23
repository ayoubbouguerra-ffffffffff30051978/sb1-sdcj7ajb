import React from 'react';
import { BarChart, BookOpen, Users } from 'lucide-react';

export function Dashboard() {
  const stats = [
    { label: 'Courses in Progress', value: '3', icon: BookOpen },
    { label: 'Total Learning Hours', value: '24', icon: BarChart },
    { label: 'Learning Community', value: '1.2k', icon: Users },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-indigo-100">
                <stat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}