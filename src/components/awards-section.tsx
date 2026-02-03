import { awards } from '@/data';

export default function AwardsSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {awards.map((award, index) => (
        <div key={index} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{award.name}</p>
          <span className="mt-2 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
            {award.year}
          </span>
        </div>
      ))}
    </div>
  );
}
