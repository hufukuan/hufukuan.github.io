'use client';

import { useState } from 'react';
import { educations } from '@/data';

export default function EducationTabs() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-6">
      {/* 标签导航 */}
      <div className="flex gap-2 rounded-lg bg-slate-100 p-1.5 dark:bg-slate-800">
        {educations.map((edu, index) => (
          <button
            key={edu.id}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 rounded-md px-4 py-3 text-sm font-medium transition-all ${
              activeIndex === index
                ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-slate-50'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400'
            }`}
          >
            {edu.school}
          </button>
        ))}
      </div>

      {/* 内容面板 */}
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              {educations[activeIndex].degree}
            </h3>
            <p className="text-blue-600 dark:text-blue-400">
              {educations[activeIndex].school}, {educations[activeIndex].location}
            </p>
            {educations[activeIndex].direction && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {educations[activeIndex].direction}
              </p>
            )}
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
            {educations[activeIndex].period}
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <p className="font-semibold text-slate-900 dark:text-slate-50">GPA: {educations[activeIndex].gpa}</p>

          <div>
            <p className="mb-3 font-semibold text-slate-900 dark:text-slate-50">Key Courses</p>
            <div className="space-y-2">
              {educations[activeIndex].courses.map((course, index) => (
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
