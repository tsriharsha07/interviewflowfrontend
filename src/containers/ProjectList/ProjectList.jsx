import React from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const projects = [
    { id: 10, name: "Socket.io Redesign", status: "On Track" },
    { id: 11, name: "Auth Security Audit", status: "Review" },
  ];

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-hover transition-colors">
          + New Project
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="group bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-500 flex items-center justify-center">
                <span className="material-icons-round">rocket_launch</span>
              </div>
              <span className="px-2 py-1 text-xs font-medium rounded bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                {p.status}
              </span>
            </div>
            <h3 className="text-base font-semibold text-text-light dark:text-white group-hover:text-primary transition-colors">
              {p.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
