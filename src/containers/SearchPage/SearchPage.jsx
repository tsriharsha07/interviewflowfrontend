import React from "react";

const SearchPage = () => {
  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">Search</h1>
      <input
        type="text"
        placeholder="Search workspaces, projects, tasks..."
        className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2"
      />
    </div>
  );
};

export default SearchPage;
