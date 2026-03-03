import React from "react";
import { useParams } from "react-router-dom";

const TaskDetail = () => {
  const { id } = useParams();
  return (
    <div className="space-y-4 max-w-3xl">
      <header>
        <h1 className="text-2xl font-bold">Task #{id}</h1>
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
          Detailed view with comments, attachments and activity.
        </p>
      </header>
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
        <h2 className="font-semibold mb-2">Title</h2>
        <p>Example task title goes here.</p>
        <h3 className="font-semibold mt-4 mb-2">Description</h3>
        <p>Full description of the task with rich text.</p>
      </div>
    </div>
  );
};

export default TaskDetail;
