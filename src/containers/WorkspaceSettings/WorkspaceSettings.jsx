import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceSettings = () => {
  const { id } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Workspace Settings #{id}</h1>
      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
        Change workspace name, description and configuration.
      </p>
    </div>
  );
};

export default WorkspaceSettings;
