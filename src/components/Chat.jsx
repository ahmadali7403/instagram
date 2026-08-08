import { useState } from "react";
import { IoChevronBack, IoSend } from "react-icons/io5";

const Chat = ({ user, onBack }) => {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! How are you?",
      mine: false,
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: message,
        mine: true,
      },
    ]);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Profile */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 bg-white">
        <button onClick={onBack} className="cursor-pointer">
          <IoChevronBack size={25} />
        </button>

        <img
          src={user.image}
          alt={user.username}
          className="w-9 h-9 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-sm">{user.username}</p>

          <p className="text-xs text-[#737373]">Active now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col justify-between gap-64">
        <div className="px-4 py-5 overflow-hidden">
          <div className="space-y-2">
            {messages.map((item) => (
              <div
                key={item.id}
                className={`flex ${item.mine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm ${
                    item.mine
                      ? "bg-[#3797F0] text-white rounded-br-md"
                      : "bg-[#EFEFEF] text-[#262626] rounded-bl-md"
                  }`}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="bg-white p-3  border-gray-200">
          <div className="w-full max-w-2xl mx-auto flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message..."
              className="flex-1 outline-none text-sm"
            />

            <button
              onClick={sendMessage}
              disabled={!message.trim()}
              className="text-[#0095F6] disabled:text-gray-300 cursor-pointer"
            >
              <IoSend size={21} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
