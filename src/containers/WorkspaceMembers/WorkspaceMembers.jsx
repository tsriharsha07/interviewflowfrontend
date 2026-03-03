import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceMembers = () => {
  const { id } = useParams();
  const members = ["Alice", "Bob", "Charlie"];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Members of Workspace #{id}</h1>
      <ul className="list-disc pl-6">
        {members.map((m, idx) => (
          <li key={idx}>{m}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkspaceMembers;
