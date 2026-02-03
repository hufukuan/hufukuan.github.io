import { skills } from '@/data';

export default function SkillsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <h3 className="mb-3 font-semibold text-slate-900 dark:text-slate-50">Technical</h3>
        <div className="flex flex-wrap gap-2">
          {skills.technical.map((skill) => (
            <span key={skill} className="rounded-full bg-cyan-50 px-3 py-1 text-sm text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <h3 className="mb-3 font-semibold text-slate-900 dark:text-slate-50">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {skills.interests.map((interest) => (
            <span key={interest} className="rounded-full bg-pink-50 px-3 py-1 text-sm text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
