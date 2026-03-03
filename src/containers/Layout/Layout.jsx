import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      {/* sidebar */}
      <aside className="w-64 flex-shrink-0 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex flex-col justify-between">
        <div>
          <div className="p-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-text-light dark:border-white flex items-center justify-center">
                <span className="material-icons-round text-lg transform -rotate-12">
                  flash_on
                </span>
              </div>
              <span className="font-bold text-xl tracking-tight">Syncly</span>
            </Link>
          </div>
          <nav className="px-3 space-y-1">
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              to="/workspaces"
            >
              <span className="material-icons-round text-xl">dashboard</span>
              Workspaces
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              to="/projects"
            >
              <span className="material-icons-round text-xl">folder_open</span>
              Projects
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              to="/notifications"
            >
              <span className="material-icons-round text-xl">
                notifications
              </span>
              Notifications
            </Link>
            <Link
              className="flex items-center gap-3 px-3 py-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              to="/search"
            >
              <span className="material-icons-round text-xl">search</span>
              Search
            </Link>
          </nav>
        </div>
        <div className="p-6 border-t border-border-light dark:border-border-dark">
          <Link
            className="flex items-center gap-3 px-3 py-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            to="/profile"
          >
            <span className="material-icons-round text-xl">person</span>
            Profile
          </Link>
          <button className="w-full text-left flex items-center gap-3 px-3 py-2 mt-2 rounded-md text-text-muted-light dark:text-text-muted-dark hover:text-red-500 transition-colors">
            <span className="material-icons-round text-xl">logout</span>
            Logout
          </button>
        </div>
      </aside>

      {/* main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex-shrink-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm px-6 py-4 border-b border-border-light dark:border-border-dark">
          <h1 className="text-2xl font-bold">Welcome to Syncly</h1>
        </header>
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
