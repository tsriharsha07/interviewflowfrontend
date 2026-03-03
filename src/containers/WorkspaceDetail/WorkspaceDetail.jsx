import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceDetail = () => {
  const { id } = useParams();
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Workspace #{id}</h1>
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
          Overview and settings of the selected workspace.
        </p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Description</h2>
          <p>This workspace is used for example purposes.</p>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Members</h2>
          <p>23 members</p>
        </div>
      </section>
    </div>
  );
};

export default WorkspaceDetail;
