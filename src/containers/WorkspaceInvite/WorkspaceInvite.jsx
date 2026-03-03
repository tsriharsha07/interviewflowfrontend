import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceInvite = () => {
  const { id } = useParams();
  return (
    <div className="space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">Invite to Workspace #{id}</h1>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2"
        />
        <button className="bg-primary text-white px-4 py-2 rounded">
          Send Invitation
        </button>
      </form>
    </div>
  );
};

export default WorkspaceInvite;
