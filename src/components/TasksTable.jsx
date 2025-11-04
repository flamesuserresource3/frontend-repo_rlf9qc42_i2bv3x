import { useMemo } from 'react';

const badgeStyles = {
  High: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
  Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Low: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
};

export default function TasksTable({ tasks, search }) {
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tasks.filter((t) =>
      [t.title, t.assignee, t.status, t.priority]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [tasks, search]);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 dark:bg-gray-800/60 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Priority</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Assignee</th>
              <th className="px-4 py-3 font-medium">Due</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {filtered.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50/60 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{t.title}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${badgeStyles[t.priority]}`}>
                    {t.priority}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${badgeStyles[t.status]}`}>
                    {t.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{t.assignee}</td>
                <td className="px-4 py-3 text-gray-500 dark:text-gray-400">{new Date(t.due).toLocaleDateString()}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-gray-500 dark:text-gray-400">
                  No tasks match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
