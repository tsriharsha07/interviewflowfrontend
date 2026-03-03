import React from "react";

const NotificationCenter = () => {
  const notifications = [
    { id: 1, text: "Task assigned to you", read: false },
    { id: 2, text: "Project updated", read: true },
  ];

  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <ul className="divide-y divide-border-light dark:divide-border-dark">
        {notifications.map((n) => (
          <li
            key={n.id}
            className={`px-4 py-3 ${n.read ? "bg-surface-light" : "bg-primary/10"}`}
          >
            {n.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;
