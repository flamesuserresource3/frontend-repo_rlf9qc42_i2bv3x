import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar, { MobileSidebar } from './components/Sidebar';
import SummaryCards from './components/SummaryCards';
import TasksTable from './components/TasksTable';

const demoTasks = [
  { id: '1', title: 'Design landing page', priority: 'High', status: 'Pending', assignee: 'Ava', due: new Date().setDate(new Date().getDate() + 3) },
  { id: '2', title: 'Database schema review', priority: 'Medium', status: 'Completed', assignee: 'Liam', due: new Date().setDate(new Date().getDate() - 1) },
  { id: '3', title: 'Implement auth flow', priority: 'High', status: 'Pending', assignee: 'Mia', due: new Date().setDate(new Date().getDate() + 7) },
  { id: '4', title: 'Write unit tests', priority: 'Low', status: 'Completed', assignee: 'Noah', due: new Date().setDate(new Date().getDate() + 10) },
  { id: '5', title: 'Update docs', priority: 'Low', status: 'Pending', assignee: 'Olivia', due: new Date().setDate(new Date().getDate() + 14) },
];

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('taskflow-demo');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setTasks(parsed);
        return;
      } catch (e) {
        // ignore
      }
    }
    setTasks(demoTasks);
  }, []);

  useEffect(() => {
    if (tasks.length) {
      localStorage.setItem('taskflow-demo', JSON.stringify(tasks));
    }
  }, [tasks]);

  const totals = useMemo(() => {
    const completed = tasks.filter((t) => t.status === 'Completed').length;
    const pending = tasks.filter((t) => t.status !== 'Completed').length;
    return { total: tasks.length, completed, pending };
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <Navbar onSearch={setSearch} />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        <Sidebar />

        <main className="min-w-0 flex-1 space-y-6 pb-20 lg:pb-6">
          <section className="space-y-6">
            <h2 className="text-xl font-semibold tracking-tight">Dashboard</h2>
            <SummaryCards totals={totals} />
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Recent Tasks</h3>
            </div>
            <TasksTable tasks={tasks} search={search} />
          </section>
        </main>
      </div>

      <MobileSidebar />
    </div>
  );
}
