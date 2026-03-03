import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Project #{id}</h1>
        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
          Project overview and key metrics.
        </p>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Status</h2>
          <p>On Track</p>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Due Date</h2>
          <p>2026-04-01</p>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Team</h2>
          <p>8 members</p>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
