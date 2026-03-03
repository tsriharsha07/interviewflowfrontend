import React from "react";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasks = [
    {
      id: 100,
      title: "Refactor auth module",
      project: "Alpha",
      due: "Today",
      status: "In Progress",
    },
    {
      id: 101,
      title: "Update landing copy",
      project: "Marketing",
      due: "Tomorrow",
      status: "Todo",
    },
  ];

  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Link
          to="/tasks/new"
          className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-hover transition-colors"
        >
          + New Task
        </Link>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border-light dark:divide-border-dark">
          <thead className="bg-gray-50 dark:bg-[#1c2e36]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase tracking-wider">
                Task
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase tracking-wider">
                Due
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-background-dark divide-y divide-border-light dark:divide-border-dark">
            {tasks.map((t) => (
              <tr
                key={t.id}
                className="hover:bg-gray-50 dark:hover:bg-[#1c2e36]"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-light dark:text-white">
                  <Link to={`/tasks/${t.id}`} className="hover:text-primary">
                    {t.title}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-muted-light dark:text-gray-400 hidden md:table-cell">
                  {t.project}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-muted-light dark:text-gray-400">
                  {t.due}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-text-muted-light dark:text-gray-400">
                  {t.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
