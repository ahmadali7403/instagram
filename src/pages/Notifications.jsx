import { useState } from "react";
import { IoClose } from "react-icons/io5";

import FollowBackBtn from "../components/FollowBackBtn";
import { users } from "../data/data";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: users[1],
      text: "liked your post.",
      time: "2m",
      action: "Like",
      read: false,
    },
    {
      id: 2,
      user: users[2],
      text: "started following you.",
      time: "15m",
      action: "Follow",
      read: false,
    },
    {
      id: 3,
      user: users[3],
      text: "liked your post.",
      time: "1h",
      action: "Like",
      read: true,
    },
    {
      id: 4,
      user: users[4],
      text: "mentioned you in a comment.",
      time: "3h",
      action: "Comment",
      read: true,
    },
    {
      id: 5,
      user: users[5],
      text: "started following you.",
      time: "5h",
      action: "Follow",
      read: true,
    },
    {
      id: 6,
      user: users[6],
      text: "liked your post.",
      time: "1d",
      action: "Like",
      read: true,
    },
    {
      id: 7,
      user: users[7],
      text: "started following you.",
      time: "1d",
      action: "Follow",
      read: true,
    },
  ]);

  // Unread notifications
  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  // Mark single notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  };

  // Delete notification
  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#262626]">Notifications</h1>

            {unreadCount > 0 && (
              <span className="bg-[#0095F6] text-white text-[11px] font-semibold rounded-full px-2 py-0.5">
                {unreadCount}
              </span>
            )}
          </div>

          {/* Mark all as read */}
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-[13px] text-[#0095F6] font-semibold cursor-pointer"
            >
              Mark all as read
            </button>
          )}
        </div>

        {/* Today */}
        <div className="px-5 pt-5 pb-2">
          <h2 className="text-[15px] font-bold text-[#262626]">Today</h2>
        </div>

        {/* Notifications */}
        <div className="pb-11">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center gap-3 px-5 py-3 transition ${
                  !notification.read ? "bg-[#F5F9FF]" : "bg-white"
                } hover:bg-gray-50`}
              >
                {/* Profile */}
                <img
                  src={notification.user.image}
                  alt={notification.user.username}
                  className="w-11 h-11 rounded-full object-cover"
                />

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] text-[#262626] leading-5">
                    <span className="font-semibold">
                      {notification.user.username}
                    </span>{" "}
                    {notification.text}{" "}
                    <span className="text-[#737373]">{notification.time}</span>
                  </p>
                </div>

                {/* Action */}
                {notification.action === "Follow" ? (
                  // Tumhara existing FollowBackBtn
                  <FollowBackBtn />
                ) : (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="bg-[#EFEFEF] text-[#262626] text-[13px] font-semibold px-4 py-2 rounded-lg cursor-pointer"
                  >
                    View
                  </button>
                )}

                {/* Delete */}
                <button
                  onClick={() => removeNotification(notification.id)}
                  className="text-[#737373] cursor-pointer hover:text-black"
                >
                  <IoClose size={19} />
                </button>
              </div>
            ))
          ) : (
            <div className="flex justify-center py-16">
              <p className="text-sm text-[#737373]">No notifications</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
