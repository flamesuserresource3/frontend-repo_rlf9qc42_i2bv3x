import { useEffect, useState } from 'react';
import { Moon, Sun, Search } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('taskflow-theme');
    const isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(isDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('taskflow-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('taskflow-theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-indigo-500 to-violet-600" />
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">TaskFlow</h1>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                onSearch?.(e.target.value);
              }}
              placeholder="Search tasks..."
              className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200"
            />
          </div>

          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
