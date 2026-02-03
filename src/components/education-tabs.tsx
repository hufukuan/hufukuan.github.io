'use client';

import { useState } from 'react';

const educationData = [
  {
    id: 'bfu',
    school: 'Beijing Forestry University',
    degree: 'M.S in Forest Science',
    direction: 'Direction: Quantitative Remote Sensing of Vegetation',
    location: 'China',
    period: 'Sep 2024 - Present',
    gpa: '89.76/100',
    courses: [
      { name: 'Forestry Planning and Design', score: 92 },
      { name: 'Scientific Writing', score: 97 },
      { name: 'Fundamentals and Frontiers of Forest Science', score: 96 },
      { name: 'Growth and Yield Estimation of Forest Stands', score: 90 },
      { name: 'Techniques Methods of Forest Analysis and Detection', score: 94 },
    ],
  },
  {
    id: 'sxau',
    school: 'Shanxi Agricultural University',
    degree: 'B.S in Geographic Information Science',
    direction: null,
    location: 'China',
    period: 'Sep 2020 - Jun 2024',
    gpa: '4.09/5.0',
    courses: [
      { name: 'Geographic Information System', score: 96.4 },
      { name: 'Principles and Applications of GPS', score: 96.5 },
      { name: 'C++ Object-Oriented Programming', score: 95.8 },
      { name: 'Quantitative Geography', score: 93 },
      { name: 'Global Change and Earth System Science', score: 99.26 },
    ],
  },
];

export default function EducationTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-6">
      {/* Navigation Bar */}
      <div className="flex gap-2 rounded-lg bg-slate-100 p-1.5 dark:bg-slate-800">
        {educationData.map((edu, index) => (
          <button
            key={edu.id}
            onClick={() => setActiveTab(index)}
            className={`flex-1 rounded-md px-4 py-3 text-sm font-medium transition-all duration-200 ${
              activeTab === index
                ? 'bg-white shadow-sm text-slate-900 dark:bg-slate-700 dark:text-slate-50'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50'
            }`}
          >
            {edu.school}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              {educationData[activeTab].degree}
            </h3>
            <p className="text-blue-600 dark:text-blue-400">
              {educationData[activeTab].school}, {educationData[activeTab].location}
            </p>
            {educationData[activeTab].direction && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {educationData[activeTab].direction}
              </p>
            )}
          </div>
          <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            {educationData[activeTab].period}
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-50">GPA: {educationData[activeTab].gpa}</p>
          </div>

          <div>
            <p className="mb-3 font-semibold text-slate-900 dark:text-slate-50">Key Courses</p>
            <div className="space-y-2">
              {educationData[activeTab].courses.map((course, index) => (
                <div key={index} className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-2.5 dark:bg-slate-800/50">
                  <span className="text-sm text-slate-700 dark:text-slate-300">{course.name}</span>
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    {course.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
