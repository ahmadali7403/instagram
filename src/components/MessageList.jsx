import MessageUser from "./MessageUser";
import { users } from "../data/data";

const MessageList = () => {
  const messages = users.slice(1, 8).map((user, index) => ({
    ...user,
    message: [
      "Hey! How are you?",
      "Sent you a reel",
      "Nice post 🔥",
      "What's up?",
      "See you soon!",
      "That's awesome 😍",
      "Good morning!",
    ][index],
    time: ["2m", "15m", "1h", "2h", "5h", "1d", "2d"][index],
  }));

  return (
    <div>
      <div className="px-5 pb-2">
        <h2 className="text-sm font-semibold text-[#262626]">Messages</h2>
      </div>

      {messages.map((user) => (
        <MessageUser key={user.id} user={user} />
      ))}
    </div>
  );
};

export default MessageList;
