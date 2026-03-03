import React from "react";
import { useParams } from "react-router-dom";

const ProjectSettings = () => {
  const { id } = useParams();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Project Settings #{id}</h1>
      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
        Edit project metadata and preferences.
      </p>
    </div>
  );
};

export default ProjectSettings;
