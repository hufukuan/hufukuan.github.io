import { researches } from '@/data';

export default function ResearchSection() {
  return (
    <div className="space-y-6">
      {researches.map((research, index) => (
        <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{research.title}</h3>
              {research.advisor && (
                <p className="text-sm text-slate-500 dark:text-slate-400">Advisor: {research.advisor}</p>
              )}
              {research.role && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400">{research.role}</p>
              )}
              <p className="text-sm text-slate-500 dark:text-slate-400">Fund by {research.fund}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {research.period}
            </span>
          </div>

          {research.image && (
            <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
              <img src={research.image} alt={research.title} className="w-full object-cover" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
