import React from "react";
import { Link } from "react-router-dom";

const WorkspaceList = () => {
  const workspaces = [
    { id: 1, name: "Marketing Team" },
    { id: 2, name: "Development" },
    { id: 3, name: "Design" },
  ];

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Workspaces</h1>
        <button className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-hover transition-colors">
          + New Workspace
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspaces.map((ws) => (
          <Link
            key={ws.id}
            to={`/workspaces/${ws.id}`}
            className="group block bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary/50 transition"
          >
            <h2 className="text-lg font-semibold text-text-light dark:text-white group-hover:text-primary">
              {ws.name}
            </h2>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-2">
              Example workspace description.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkspaceList;
