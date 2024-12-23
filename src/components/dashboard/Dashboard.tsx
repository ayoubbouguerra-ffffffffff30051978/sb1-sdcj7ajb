import React from 'react';
import { Stats } from './Stats';

export function Dashboard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h2>
      <Stats />
    </div>
  );
}