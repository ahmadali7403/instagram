import { users } from "../data/data";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      user: users[1],
      text: "liked your post.",
      time: "2m",
      action: "Like",
    },
    {
      id: 2,
      user: users[2],
      text: "started following you.",
      time: "15m",
      action: "Follow",
    },
    {
      id: 3,
      user: users[3],
      text: "liked your post.",
      time: "1h",
      action: "Like",
    },
    {
      id: 4,
      user: users[4],
      text: "mentioned you in a comment.",
      time: "3h",
      action: "Comment",
    },
    {
      id: 5,
      user: users[5],
      text: "started following you.",
      time: "5h",
      action: "Follow",
    },
    {
      id: 6,
      user: users[6],
      text: "liked your post.",
      time: "1d",
      action: "Like",
    },
    {
      id: 7,
      user: users[7],
      text: "started following you.",
      time: "1d",
      action: "Follow",
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-11">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="sticky top-[45px] z-50 bg-white border-b border-gray-200 px-5 py-4">
          <h1 className="text-xl font-bold text-[#262626]">Notifications</h1>
        </div>

        {/* Today */}
        <div className="px-5 pt-5 pb-2">
          <h2 className="text-[15px] font-bold text-[#262626]">Today</h2>
        </div>

        {/* Notifications */}
        <div>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition"
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
                <button className="bg-[#0095F6] text-white text-[13px] font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[#1877F2] transition">
                  Follow
                </button>
              ) : (
                <button className="bg-[#EFEFEF] text-[#262626] text-[13px] font-semibold px-4 py-2 rounded-lg cursor-pointer">
                  View
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
