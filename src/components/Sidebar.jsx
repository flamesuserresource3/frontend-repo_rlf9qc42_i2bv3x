import { Home, ListChecks, Users, Settings } from 'lucide-react';

const items = [
  { icon: Home, label: 'Dashboard' },
  { icon: ListChecks, label: 'Tasks' },
  { icon: Users, label: 'Team' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 border-r border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900 max-lg:hidden">
      <div className="mb-6 text-xs font-medium uppercase tracking-wider text-gray-400">Navigation</div>
      <nav className="space-y-1">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export function MobileSidebar() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-30 w-[90%] -translate-x-1/2 rounded-2xl border border-gray-200 bg-white/90 p-2 shadow-lg backdrop-blur dark:border-gray-800 dark:bg-gray-900/90 lg:hidden">
      <ul className="grid grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <li key={label}>
            <button className="flex w-full flex-col items-center gap-1 rounded-lg px-2 py-2 text-xs text-gray-700 transition hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
