import React from "react";

const ProfilePage = () => {
  return (
    <div className="space-y-6 max-w-xl">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm">
        <h2 className="font-semibold mb-2">User Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
      </div>
    </div>
  );
};

export default ProfilePage;
