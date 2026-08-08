import { FiEdit } from "react-icons/fi";

const MessageHeader = () => {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
      <h1 className="text-xl font-bold text-[#262626]">Messages</h1>

      <button className="cursor-pointer">
        <FiEdit size={24} />
      </button>
    </div>
  );
};

export default MessageHeader;
