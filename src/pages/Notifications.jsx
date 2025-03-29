import { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New user registered", read: false },
    { id: 2, message: "Auction deadline extended", read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  return (
    <div className="fixed top-16 right-4 w-80 p-4 border rounded shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">Notifications</h2>
      <ul>
        {notifications.map((notif) => (
          <li key={notif.id} className={`p-2 border-b ${notif.read ? "text-gray-500" : "text-black"}`}>
            {notif.message}
            {!notif.read && (
              <button onClick={() => markAsRead(notif.id)} className="ml-2 text-blue-500">Mark as Read</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
