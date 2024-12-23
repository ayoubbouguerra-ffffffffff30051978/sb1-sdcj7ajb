import React from 'react';
import { BarChart, BookOpen, Users } from 'lucide-react';
import { StatCard } from '../ui/StatCard';

export function Stats() {
  const stats = [
    { label: 'Courses in Progress', value: '3', icon: BookOpen },
    { label: 'Total Learning Hours', value: '24', icon: BarChart },
    { label: 'Learning Community', value: '1.2k', icon: Users },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}