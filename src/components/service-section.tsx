import { services } from '@/data';

export default function ServiceSection() {
  return (
    <div className="space-y-4">
      {services.map((service, index) => (
        <div key={index} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-slate-900 dark:text-slate-50">{service.title}</h3>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              {service.period}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
