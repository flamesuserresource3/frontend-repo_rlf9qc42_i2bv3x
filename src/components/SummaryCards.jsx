import { CheckCircle2, Clock3, ListTodo } from 'lucide-react';

export default function SummaryCards({ totals }) {
  const cards = [
    {
      title: 'Total Tasks',
      value: totals.total,
      icon: ListTodo,
      bg: 'from-indigo-500 to-violet-600',
    },
    {
      title: 'Completed',
      value: totals.completed,
      icon: CheckCircle2,
      bg: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Pending',
      value: totals.pending,
      icon: Clock3,
      bg: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map(({ title, value, icon: Icon, bg }) => (
        <div
          key={title}
          className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
        >
          <div className={`absolute right-0 top-0 h-24 w-24 -translate-y-1/3 translate-x-1/3 rounded-full bg-gradient-to-br ${bg} opacity-20 blur-2xl`} />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
              <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">{value}</p>
            </div>
            <div className={`rounded-lg bg-gradient-to-br ${bg} p-3 text-white shadow-inner`}>
              <Icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
