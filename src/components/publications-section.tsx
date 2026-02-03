import { publications } from '@/data';

export default function PublicationsSection() {
  return (
    <div className="space-y-4">
      {publications.map((pub, index) => (
        <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <p className="text-slate-700 dark:text-slate-300">
            {pub.authors} <span className="font-semibold">"{pub.title}"</span>, {pub.info}
          </p>
        </div>
      ))}
    </div>
  );
}
