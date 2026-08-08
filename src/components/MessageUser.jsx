const MessageUser = ({ user }) => {
  return (
    <div className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 cursor-pointer">
      <img
        src={user.image}
        alt={user.username}
        className="w-14 h-14 rounded-full object-cover"
      />

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-[#262626]">
          {user.username}
        </h3>

        <p className="text-sm text-[#737373] truncate">{user.message}</p>
      </div>

      <span className="text-xs text-[#737373]">{user.time}</span>
    </div>
  );
};

export default MessageUser;
