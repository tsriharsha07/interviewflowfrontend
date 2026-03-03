import React from "react";

const NotificationPreferences = () => {
  return (
    <div className="space-y-4 max-w-xl">
      <h1 className="text-2xl font-bold">Notification Preferences</h1>
      <form className="space-y-3">
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Task assigned
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Task comment
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" /> Project updates
        </label>
      </form>
    </div>
  );
};

export default NotificationPreferences;
